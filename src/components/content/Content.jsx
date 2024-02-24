
import './content.css'
import { BsTelephoneFill } from "react-icons/bs";
import { IoLogoWhatsapp } from "react-icons/io5";
import { FaLocationDot } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
import { BiCalendarCheck } from "react-icons/bi";
import { IoIosCall } from "react-icons/io";







function Content() {
  return (
    <>
      <div className=' container'>
        <div className='content'>
          <div>
            <h1>İletişim</h1>
          </div>
          <div>
            <hr />
            <BsTelephoneFill />
            <p>Telefon: Alo 153 Beyazmasa / Santral: 444 16 00</p>
            <hr />
          </div>
          <div>
            <IoLogoWhatsapp />
            <p> Whatsapp Hattı : 0501 153 16 16</p>
            <hr />
          </div>
          <div>
            <FaLocationDot />
            <p> Adres:
              Zafer Mh. Ankara Yolu Cd. C Blok No:1 PK:16080 Osmangazi / BURSA</p>
            <hr />
          </div>
          <div>
            <IoMdMail />
            <p> E-Posta: beyazmasa@bursa.bel.tr</p>
            <hr />

          </div>
          <div>
            <BiCalendarCheck />
            <p>Belediyemiz Arabuluculuk iletişim bilgileri:
              Telefon 444 16 00
              Faks (0224) 716 15 50
              Adres Zafer Mh. Ankara Yolu Cd. C Blok No:1 PK:16270 Osmangazi / BURSA</p>
            <hr />
          </div>
          <div>
            <IoIosCall />
            <p> İstek, şikayet ve önerileriniz için: <a href="https://beyazmasa.bursa.bel.tr/WebBasvuru/#/" target='_blank'>Beyaz Masa</a></p>
            <hr />
          </div>
        </div>
        <form >
          <div className="mb-3 mt-5 ">
            <label className="form-label font-bold">Adınızı ve Soyadınızı giriniz </label>
            <input type="text" className="form-control" id="exampleInputName" aria-describedby="nameHelp" placeholder='Ad ve soyadınızı girin' />
            <label className="form-label font-bold">E-postanızı giriniz </label>
            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='E-postanızı girin' />

          </div>


          <label className="form-label font-bold">Mesajınızı yazın</label>
          <input type="text" className="form-control" id="exampleInputMessage" aria-describedby="messageHelp" placeholder=' mesajınızı yazınız' />
          <button type="submit" className="btn btn-info mt-4"> Mesaj Gönder</button>
        </form>
      </div>
    </>
  )
}

export default Content
