import img5 from '/images/img5.png';
import SectionCards from './SectionCards';
import Head from '../Header/Head';
import SectionCard from './SectionCard';
import SectionCardss from './SectionCardss';

function Section() {
  return (
    <>
      <section className=' container'>
        <div className="flex mt-3 ">
          <div className="items-start flex flex-col ml-4 mt-9">
            <p className="w-80 font-mono ">Atık yönetiminde devrim yaratan akıllı şehirlerin geleceğini keşfedin. </p>
            <button type="button" className="btn btn-info mt-2 font-mono">Şimdi Keşfet</button>
          </div>
          <div className="items-start flex flex-col ml-12">
            <h1 className="w-16 font-mono font-bold ">Sürdürülebilir Kentsel Yaşam Hareketimize Katılın </h1>
          </div>
          <div className="items-end ml-96">
            <img src={img5} alt="" />
          </div>
        </div>
       
      </section>
      <Head />
      <SectionCards/>
      <SectionCard/>
      <SectionCardss/>
    </>
  )
}

export default Section
