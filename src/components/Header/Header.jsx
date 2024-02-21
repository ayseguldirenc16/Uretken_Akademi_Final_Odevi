
import bbblogo from '/images/bbblogo.png';
import { FaInstagram } from "react-icons/fa";
import { BsTwitter } from "react-icons/bs";
import { CiYoutube } from "react-icons/ci";
import { FiFacebook } from "react-icons/fi";
import './header.css';
import Head from './Head'


function Header() {
  return (
    <div className='  '>
    <div className=" navbar bg-gray-900 flex justify-between items-center   ">
      <div className="container ">
      <div className="logo">
        <img src={bbblogo} alt="" width="150px"  />
      </div>
      <div className="navbar-nav flex flex-row items-center text-white   ">
        <a className="nav-link  hover:bg-slate-300" href="https://www.instagram.com/bursabuyuksehir/ " target='_blank'>
          <div >
          <FaInstagram className='w-9 rounded-xl right-2 text-white ' />
          </div>
        </a>
        <a className="nav-link hover:bg-slate-300 top-3  " href="https://twitter.com/bursabuyuksehir" target='_blank'>
          <BsTwitter className='w-9 rounded-xl right-2 text-white'  />
        </a>
        <a className="nav-link hover:bg-slate-300" href="https://www.youtube.com/c/BursaB%C3%BCy%C3%BCk%C5%9FehirBelediyesi16" target='_blank'>
          <CiYoutube className='w-9 rounded-xl right-2 text-white' />
        </a>
        <a className="nav-link hover:bg-slate-300" href="https://www.facebook.com/bursabuyuksehir" target='_blank'>
          <FiFacebook className='w-9 rounded-xl right-2 text-white ' />
        </a>
      </div>
      </div>
      <hr className=' shadow-2xl ' />
      
    </div>
    <Head/>
    </div>
    
  );
}

export default Header;
