import { Link } from "react-router-dom"



function Footer() {
  return (
    <>
    <footer className="py-5">
    <div className="row">
     
      <div className="col-6 col-md-2 mb-3 ml-12">
        <h5>Sosyal Medya Hesaplarımız</h5>
        <ul className="nav flex-column">
          <li className="nav-item mb-2"><a href="https://www.instagram.com/bursabuyuksehir/" className="nav-link p-0 text-body-secondary" target='_blank'>İnstagram</a></li>
          <li className="nav-item mb-2"><a href="https://twitter.com/bursabuyuksehir" className="nav-link p-0 text-body-secondary" target='_blank'>Twitter</a></li>
          <li className="nav-item mb-2"><a href="https://www.youtube.com/c/BursaB%C3%BCy%C3%BCk%C5%9FehirBelediyesi16" className="nav-link p-0 text-body-secondary" target='_blank'>Youtube</a></li>
          <li className="nav-item mb-2"><a href="https://www.facebook.com/bursabuyuksehir" className="nav-link p-0 text-body-secondary" target='_blank'>Facebook</a></li>
          <li className="nav-item mb-2"><a href="https://www.bursa.bel.tr/" className="nav-link p-0 text-body-secondary" target='_blank'>BBB</a></li>
        </ul>
      </div>

      <div className="col-6 col-md-2 mb-3">
        <h5>Sosyal Medya</h5>
        <ul className="nav flex-column">
          <li className="nav-item mb-2"><Link to="/" className=" nav-link p-0 text-body-secondary mb-2 ">
                Anasayfa
              </Link></li>
          <li className="nav-item mb-2"><Link to="/About" className=" nav-link p-0 text-body-secondary mb-2 ">
                Hakkımızda
              </Link></li>
          <li className="nav-item mb-2"><Link to="/content" className=" nav-link p-0 text-body-secondary mb-2 ">
                İletişim
              </Link></li>
          
        </ul>
      </div>
      <div className="col-6 col-md-2 mb-3 ml-12">
        <h5>Bize Ulaşın </h5>
        <ul className="nav flex-column">
          <li className="nav-item mb-2"><p className="nav-link p-0 text-body-secondary"> beyazmasa@bursa.bel.tr</p></li>
          <li className="nav-item mb-2"><p className="nav-link p-0 text-body-secondary mb-2"> Zafer Mh. Ankara Yolu Cd. C Blok No:1 PK:16080 Osmangazi / BURSA</p></li>
          <li className="nav-item mb-2"><p className="nav-link p-0 text-body-secondary">  444 16 00</p></li>
          
        </ul>
      </div>



     

    </div>

    <div className="d-flex flex-column flex-sm-row justify-content-center py-4 my-4 border-top ">
      <p>© 2024 Company, Ayşegül Direnç | Tüm Hakları Saklıdır</p>
      <ul className="list-unstyled d-flex">
        <li className="ms-3"><a className="link-body-emphasis" href="#"><svg className="bi" width="24" height="24"><use xlink:href="#twitter"></use></svg></a></li>
        <li className="ms-3"><a className="link-body-emphasis" href="#"><svg className="bi" width="24" height="24"><use xlink:href="#instagram"></use></svg></a></li>
        <li className="ms-3"><a className="link-body-emphasis" href="#"><svg className="bi" width="24" height="24"><use xlink:href="#facebook"></use></svg></a></li>
      </ul>
    </div>
  </footer>
      {/* <div className=" bg-gray-900 max-w-full h-52 mt-9 ">
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

      </div> */}
    </>
  )
}

export default Footer
