import  { useState, useEffect } from 'react';
import veri from './Lastik.json'; 

function VeriCekme() {
  const [data, setData] = useState(null);

  useEffect(() => {
 
    setData(veri);
  }, []); 

  return (
    <div className="container mx-auto py-6">
     {/* diğer sayfalarda fetch yöntemi yaparken hata alıyorum ve hatayı çözemiyorum o yüzden diğlerini bu şekilde grafik
     halinde duruyor. Grafik olrak fetch ettiğimde sayfayı yenilediğimde tüm veriler siliniyor. */}
      <div className="overflow-x-auto">
        <table className="table-auto w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-100">
              <th className="px-4 py-2">Yıl</th>
              <th className="px-4 py-2">Atık Miktarı (Ton)</th>
              <th className="px-4 py-2">Önceki Yıla Göre Yüzde Artma/Azalma</th>
            </tr>
          </thead>
          <tbody>
            {data ? (
              data.map((item, index) => (
                <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                  <td className="border px-4 py-2">{item.YIL}</td>
                  <td className="border px-4 py-2">{item.ATIK_MIKTARI_TON}</td>
                  <td className="border px-4 py-2">{item.ONCEKI_YILA_GORE_YUZDE_ARTMA_AZALMA || "Veri Yok"}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="3" className="border px-4 py-2">Veri yükleniyor...</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default VeriCekme;
