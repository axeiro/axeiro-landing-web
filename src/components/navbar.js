import { useEffect } from "react"
import { RiCloseLargeLine } from "react-icons/ri";

const navbar = ({toggle , handleNavBar}) => {
   useEffect(()=>{
     console.log(toggle);
   })
    
  return (
    <div className={`
  bg-fuchsia-600/80 lg:bg-transparent absolute top-0 right-0 h-full
  w-3/4 max-w-xs p-5 flex flex-col lg:flex-row lg:justify-center items-center
  gap-5 lg:gap-32 text-white transition-transform duration-500 z-10 backdrop-blur-xs lg:backdrop-blur-none
  ${toggle ? 'translate-x-0' : 'translate-x-full'}
`}>
         <RiCloseLargeLine
    onClick={handleNavBar}
    className="text-white absolute top-2 left-3 lg:hidden text-xl cursor-pointer transition-all duration-700 z-30"
  />
        <ul className=" flex flex-col lg:flex-row justify-center items-center gap-5 text-white">
            <li className="border px-4 py-0.5 rounded-full">About</li>
            <li className="">Dev Docs</li>
            <li className="">Contact</li>
            <li className="">Services</li>
            <li className="">Price</li>
        </ul>
        <button className=" bg-white px-5 py-2 rounded-full text-black">Sign In</button>
    </div>
  )
}

export default navbar