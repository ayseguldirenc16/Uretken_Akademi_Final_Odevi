import sec1 from '/images/sec1.jpg';
import sec2 from '/images/sec2.jpg';

function SectionCardss() {
  return (
    <>
      <div className='container flex justify-between'>
        <div className="w-1/2">
          <img src={sec1} alt="" className='rounded-full' width={"500px"} />
        </div>
        <div className="w-1/2 mt-20">
          <h1>Yeniliklerimiz</h1>
          <p>Sürdürülebilir kentsel atık yönetimine öncülük etmek.</p>
          <ul className="list-group">
            <li className="list-group-item">Enerji Geri Kazanımı</li>
            <li className="list-group-item">Akıllı Çöp Kutuları</li>
            <li className="list-group-item">Pilin İmha Edilmesi</li>
            <li className="list-group-item">Eko Ambalaj</li>
          </ul>
        </div>
      </div>
      <div className='container flex justify-between mt-20'>
        <div className="w-1/2 mt-14">
          <h1>Atıklarda Devrim Yaratın</h1>
          <p>Piller, elektronik cihazlar, ambalajlar ve daha fazlası için sofistike, kullanıcı dostu imha çözümleri. </p>

        </div>
        <div className="w-1/2">
          <img src={sec2} alt="" className='rounded-full relative left-20' width={"500px"} />
        </div>
      </div>
    </>
  )
}

export default SectionCardss
