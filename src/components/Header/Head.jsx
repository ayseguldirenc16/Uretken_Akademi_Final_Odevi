
import { Link } from 'react-router-dom';
import './header.css'
import './head.css'

function Head() {
  return (
    <>
      <div className="flex justify-center ">
        <div className=" head-item flex flex-row items-end ">
          <ul className="flex space-x-4 mt-1 mb-6">
            <li>
              <Link to="/" className="head-link hover:bg-slate-300 rounded-lg px-4 py-2">
                Anasayfa
              </Link>
            </li>
            <li>
              <Link to="/AtikTakip" className="head-link hover:bg-slate-300 rounded-lg px-4 py-2">
               Rakamlarla Çevresel İsrafın Gerçekleri
              </Link>
            </li>
            <li>
              <Link to="/About" className="head-link hover:bg-slate-300 rounded-lg px-4 py-2">
                Hakkımızda
              </Link>
            </li>
            <li>
              <Link to="/content" className="head-link hover:bg-slate-300 rounded-lg px-4 py-2">
                İletişim
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <hr className='shadow-xl mt-0' />
    </>
  );
}

export default Head;
