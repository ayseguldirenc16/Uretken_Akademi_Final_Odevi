import data from "./data";

function SectionCard() {
  return (
    <div className="flex">
      {data.map((item, index) => (
        <div className="card flex flex-col mb-4 w-96 mr-12 ml-9 border-0 mt-4" key={index} >
          <div className="card-img flex items-center justify-center">
            <img src={item.link} alt="" width={"50%"} height={"40%"} className=" flex items-center justify-center" />
          </div>
          <div className="card-text">
            <h3 className='text-lg relative text-center font-mono font-bold mt-2 text-blue-400'>{item.title}</h3>
            <p className='text-lg text-black text-center mt-2'>{item.desc}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default SectionCard;
