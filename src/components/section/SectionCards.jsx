import data from './data'
import './section.css'
function SectionCards() {
 
  return (
    <>
     
     <div className=' container'>
        <div className="cards">
            {data.map((item, index) => {
              return (
                <div className="card" key={index}>
                  <div className="card-img">
                    <img src={item.link} alt="" />
                  </div>
                  <div className="card-text">
                    
                    <p>{item.desc}</p>
                    
                  </div>
                </div>
              );
            })}
            
        </div>
     </div>
    
    </>
  )
}

export default SectionCards
