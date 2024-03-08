import  { useState, useEffect } from 'react';
import veri from './Lastik.json'; // Lastik.json dosyasını projeye dahil edin

function VeriCekme() {
  const [data, setData] = useState(null);

  useEffect(() => {
    // JSON dosyasından verileri yükleme
    setData(veri);
  }, []); // Bu useEffect sadece bir kere çalışacak, komponent yüklendiğinde

  return (
    <div className="container mx-auto py-6">
      <h1 className="text-2xl font-semibold mb-6">Atık Miktarları (Tablo)</h1>
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
