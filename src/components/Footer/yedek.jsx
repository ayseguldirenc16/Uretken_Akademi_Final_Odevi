import { FaInstagram } from "react-icons/fa";
import {  BsTwitterX } from "react-icons/bs";
import { CiYoutube } from "react-icons/ci";
import { FiFacebook } from "react-icons/fi";
import './footer.css'
import footerLogo from '/images/footerLogo.png';
import unesco from '/images/unesco.png';
import googleplay from '/images/googleplay.png';
import appstore from '/images/appstore.png';

function Footer() {
  return (
    <>
      <div className="footer-container  bg-gray-900">
        <div className=' pt-1 '>
          <div className="container  flex flex-col items-start text-white ">
            <div className='footer-icon '>
              <a href="https://www.instagram.com/bursabuyuksehir/"   target='_blank'><FaInstagram className='footer-icons ' /></a>
            </div>
            <div className='footer-icon'>
              <a href="https://twitter.com/bursabuyuksehir"  target='_blank'><BsTwitterX className='footer-icons'  /></a>
            </div >
            <div className='footer-icon'>
              <a href="https://www.youtube.com/c/BursaB%C3%BCy%C3%BCk%C5%9FehirBelediyesi16"  target='_blank'><CiYoutube className='footer-icons' /></a>
            </div>
            <div className='footer-icon'>
              <a href="https://www.facebook.com/bursabuyuksehir"  target='_blank'><FiFacebook className='footer-icons' /></a>
            </div>
          </div>
          <div className="footer-text text-white">
            <div >
              <h3 className=' font-bold text-center '>Adres</h3>
              <div className='footer-adress'>
                <p  > Zafer Mah. Ankara yolu Caddesi. No: 1 16080 Osmangazi/BURSA Telefon: ALO 153 / 444 16 00</p>
              </div>
              
            </div>

          </div>
          <div >
            <p className='footer-id text-white'>By Ayşegül Direnç | © 2024 </p>
          </div>
          <div className="container   footer-images">
            <div className=" footer-img">
              <img src={footerLogo} alt="" width={"55px"} />
            </div>
            <div className="footer-img">
              <img src={unesco} alt="" width={"55px"} />
            </div>
            <div className="footer-img">
              <img src={googleplay} alt="" width={"55px"} />
            </div>
            <div className="footer-img">
              <img src={appstore} alt="" width={"55px"} />
            </div>
          </div>




        </div>
      </div>

    </>
  )
}

export default Footer
