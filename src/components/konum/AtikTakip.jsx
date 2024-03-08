import AtikPilChart from './AtikPilChart';
import AtikPil from './AtikPil';
import AmbalajAtikChart from './AmbalajAtikChart';
import AmbalajAtik from './AmbalajAtik';
import EAEEBarChart from './EAEEBarChart';
import ElektorinkAtik from './ElektorinkAtik';
import SterilAtikBarChart from './SterilAtikBarChart ';
import SterilAtik from './SterilAtik';
import Lastik from './Lastik';

function AtikTakip() {
  return (
    <>
     <div>
      <h3 className=' relative left-20'>Atık Pil Miktarı Grafiği</h3>
      <AtikPilChart data={AtikPil}  />
      <h3 className=' relative left-20'>Atık Ambalaj  Grafiği</h3>
      <AmbalajAtikChart data={AmbalajAtik} />
      <h3 className=' relative left-20'>Atık Elektrikli ve Elektronik Eşyalar Grafiği</h3>
      <EAEEBarChart  data={ElektorinkAtik}/>
      <h3 className=' relative left-20'>Lastik Atık Miktarı Grafiği</h3>
      <Lastik/>

      <h3 className=' relative left-20'>Sterilize Edilmiş Atıklar Grafiği</h3>
      <SterilAtikBarChart data={SterilAtik}   />
    </div>
    </>
  )
}

export default AtikTakip
