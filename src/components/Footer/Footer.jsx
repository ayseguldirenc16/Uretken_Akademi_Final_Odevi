import footerLogo from '../../../public/images/footerLogo.png'
import googleplay from '../../../public/images/googleplay.png'
import appstore from '../../../public/images/appstore.png'
import unesco from '../../../public/images/unesco.png'
import { CiInstagram, CiYoutube } from "react-icons/ci";
import {BsTwitter} from "react-icons/bs";
import {FiFacebook} from "react-icons/fi";


function Footer() {
  return (
    <>
      <div className=" bg-gray-900 max-w-full h-52 mt-9 ">
        <div className="container  ">
          <footer className="">
            <div className="container  flex flex-col items-end text-white ">
              <div className="logo">
                <img src={footerLogo} alt="" width="50px" className=' mt-2 mb-2'/>
                <img src={googleplay} alt="" width="50px" className=' mb-2'/>
                <img src={appstore} alt="" width="50px" className=' mb-2' />
                <img src={unesco} alt="" width="50px" />
              </div>
            </div>
            <div className=" flex flex-col items-start text-white relative bottom-32   ">
        <a className=" mb-4  hover:bg-slate-300" href="https://www.instagram.com/bursabuyuksehir/ " target='_blank'>
          <div >
          <CiInstagram className='w-9 rounded-xl right-2 text-white ' />
          </div>
        </a>
        <a className=" mb-4 hover:bg-slate-300 top-3  " href="https://twitter.com/bursabuyuksehir" target='_blank'>
          <BsTwitter className='w-9 rounded-xl right-2 text-white'  />
        </a>
        <a className=" mb-4 hover:bg-slate-300" href="https://www.youtube.com/c/BursaB%C3%BCy%C3%BCk%C5%9FehirBelediyesi16" target='_blank'>
          <CiYoutube className='w-9 rounded-xl right-2 text-white' />
        </a>
        <a className="  hover:bg-slate-300" href="https://www.facebook.com/bursabuyuksehir" target='_blank'>
          <FiFacebook className='w-9 rounded-xl right-2 text-white ' />
        </a>
      </div>
            <p className="text-center text-white relative bottom-44">© 2024 Ayşegül Direnç, Inc</p>
          </footer>
        </div>

      </div>
    </>
  )
}

export default Footer
