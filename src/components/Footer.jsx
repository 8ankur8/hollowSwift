import logo from "../../image/logoW.svg" 

const Footer = () => (
  <div className="w-full flex md:justify-center justify-between items-center flex-col p-4 gradient-bg-footer">
    <div className="flex flex-[0.5] justify-center items-center">
    <img src={logo} alt="logo" className="w-20" />
    </div>

    <div className="flex justify-center items-center flex-col mt-5">
      <p className="text-white text-sm text-center font-medium mt-2">connect-exhcange-fun</p>
    </div>
    <p className="text-white text-right text-xs x-3">All rights reserved</p>
  
  </div>
);

export default Footer;