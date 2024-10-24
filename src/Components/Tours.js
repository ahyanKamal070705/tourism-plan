import { useState } from "react";
import data from "../data";
import Cards from "./Cards";
function Tours() {
  const [tours, setTours] = useState(data);

  function removeTour(id) {
    setTours((prevItems) => {
      return prevItems.filter((item) => {
        return item.id != id;
      });
    });
  }

  function resetPage(){
    setTours(data);
  }
 

  return (
    <>
      {
        tours.length>0? <div>     {tours.map((tour) => {
        return <Cards {...tour} key={tour.id} removeTour={removeTour}  />;
      })}
      
      </div> :

        <div>
         <div> No tours left</div>
         <button onClick={resetPage}>Show tours</button>
         </div>
      }


      {/* <Cards id={tours[0].id} name={tours[0].name} info={} /> */}
    </>
  );
}

export default Tours;

// id: 1
// 		name: "Agra",
// 		info: "Agra is a city in northern India, known for the iconic Taj Mahal, a stunning white marble mausoleum built by Mughal emperor Shah Jahan in memory of his beloved wife. Agra is also home to several other historic and architectural wonders, including Agra Fort and Fatehpur Sikri.",
// 		image: "https://cdn.thecodehelp.in/Agra.jpeg",
// 		price: "35,758",
