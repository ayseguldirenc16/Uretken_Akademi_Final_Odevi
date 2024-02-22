import atik from '/images/atik.jpg';
import anaimg from '/images/anaimg.png';
import './section.css'
import SectionCards from './SectionCards';

function Section() {
  return (
    <>
      <section>
        <div className=' items-center flex justify-center'>
          <div className="section-img">
            <img src={anaimg} alt="" />
          </div>
          <div className="section-text ">
            <p>ÇÖP DEĞİL ATIK: ATIK YÖNETİMİ</p>

          </div>

        </div>
        <div className='container'>
          <div className='  atik text-center text-balance text-rose-700'>
          <h2>Atık Yönetimi Hiyerarşisi </h2>
          </div>
          <div>
            <img src={atik} alt=" Atık Yönetim Şeması" className='secAtik ' />
          </div>
          <div className="metin text-center relative top-1">
            
            <p> <b>Önleme:</b> Atık miktarını azaltarak doğal kaynak tüketimini minimize etmek.

              Doğal kaynakları minimum düzeyde kullanmak.
              Atık ürünleri tekrar kullanmak.
              Ürün kullanım sürelerini uzatmak.</p>
            <p>
              <b>Azaltma:</b> Atık oluşumunu en aza indirmek için çözümler üretmek.

              Temiz teknolojiler kullanarak atık miktarını azaltmak.
              Endüstrilerde ambalaj kullanımını minimize etmek.
            </p>
            <p>
              <b>Yeniden Kullanma: </b>Atıkların mümkün olduğunca tekrar kullanılması.

              Kullanılan materyalleri temizleyerek yeniden kullanmak.
              Plastik kapları yeniden kullanarak çeşitli amaçlar için kullanmak.
            </p>
            <p>
              <b>Geri Dönüşüm:</b> Atıkların ayrı toplanarak hammadde haline getirilmesi.

              Evsel organik atıklardan kompost üretmek.
              Farklı atık türlerini ayrı toplayarak geri dönüşüme kazandırmak.
            </p>
            <p>
              <b> Enerji Geri Kazanımı:</b> Geri dönüştürülemeyen atıklardan enerji elde etmek.

              Anaerobik çürütme, yakma, gazlaştırma gibi yöntemlerle enerji üretimi.
            </p>
            <p>
              <b>Bertaraf:</b> En son çözüm olarak, çevresel etkileri minimize edecek şekilde atıkların imha edilmesi.

              Düzenli atık depolama sahaları gibi yöntemlerle atıkların bertaraf edilmesi.
            </p>
          </div>
        </div>
        <SectionCards/>
      </section>
    </>
  )
}

export default Section
