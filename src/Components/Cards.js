import { useState } from "react";

function Cards({ id, name, info, image, price ,removeTour }) {
  

  function toggleChange() {
    if (toggle) {
      setRead(info);
       setToggle(false)
    } else {
      setRead(desc);
       setToggle(true);
    }
  }

  const desc = `${info.substring(0, 200)}`;
  const [read, setRead] = useState(desc);
  const [toggle,setToggle] = useState(true);

  return (
    <div className="cards">
      <img src={image} loading="lazy" className=""></img>
      <div className="tour-details">
        <h4 className="price">{price}</h4>
        <h4 className="name">{name}</h4>
        <p className="para">
          {toggle ? (
            <>
              {read}
              <button onClick={toggleChange}>...read more</button>
            </>
          ) : (
            <div>
              {read}
              <button onClick={toggleChange}>...read less</button>
            </div>
          )}
        </p>
      </div>

      <button className="btn" onClick={()=>removeTour(id)}>Not Interested</button>
    </div>
  );
}

export default Cards;
