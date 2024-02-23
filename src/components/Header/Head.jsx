import head from '/images/head.png';

function Head() {
  return (
    <>
      <div className='flex items-center justify-center relative mt-5'>
        <img src={head} alt="" className='flex items-center justify-center w-full' />
        <div className="absolute flex justify-between items-center w-full text-white">
          <div className="flex flex-col items-center mx-32">
            <h1 className=' font-bold'>100+</h1>
            <p>Atık piller</p>
          </div>
          <div className="flex flex-col items-center mx-32">
            <h1 className=' font-bold'>%99,99</h1>
            <p>Geri Dönüşüm Oranı</p>
          </div>
          <div className="flex flex-col items-center mx-32">
            <h1 className=' font-bold'>Sayısız</h1>
            <p>Akıllı Şehircilik Projeleri</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Head;
