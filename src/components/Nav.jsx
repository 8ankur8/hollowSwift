import React from "react"
import { AiOutlineMenu } from "react-icons/ai";
import { AiOutlineClose } from "react-icons/ai";
import logo from "../../image/logoW.svg" 

const NavItem = ({title,classProps}) =>{
  return (
    <li className={'mx-4 cursor-pointer $(classProps)'}>
      {title}
    </li>
  )
}

const Nav = () =>{
  const [toggleMenu,setToggleMenu] = React.useState(false)
    return(
    <nav className="w-full flex md:justify-center justify-between items-center p-4">
      <div className="md:flex-[0.5] flex-initial justify-center items-center">
        <img src={logo} alt="logo" className="w-20 cursor-pointer "/>
      </div>
      <ul className="text-white md:flex hidden list-none flex-row justify-between items-center flex-intial">
         {["Features","Exchange","Wallets"].map((item,index) => (
            <NavItem key ={item + index} title ={item} />
         ))}
         <li className="bg-[#f97068] py-2 px-7 mx-4 rounded-full cursor-pointer hover:bg-black">
           Login
         </li>
      </ul>
      <div className="flex relative">
      {!toggleMenu ? 
          <AiOutlineMenu  fontSize={28} className="text-white md:hidden cursor-pointer" onClick={() => setToggleMenu(true)} />
          :<AiOutlineClose fontSize={28} className="text-white md:hidden cursor-pointer" onClick={() => setToggleMenu(false)} />
        }
        {toggleMenu && (
          <ul
            className="z-10 fixed -top-0 -right-2 p-3 w-[70vw] h-screen shadow-2xl md:hidden list-none
            flex flex-col justify-start items-end rounded-md blue-glassmorphism text-white animate-slide-in"
          >
            <li className="text-xl w-full my-2"><AiOutlineClose onClick={() => setToggleMenu(false)} /></li>
            {["Market", "Exchange", "Tutorials", "Wallets"].map(
              (item, index) => <NavItem key={item + index} title={item} classprops="my-2 text-lg" />,
            )}
          </ul>
        )}

      </div>
    </nav>
    )
}
export default Nav