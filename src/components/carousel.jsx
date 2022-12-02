import { useState, useEffect } from "react";
import getTrending from "../services/getTrending";
import "../scss/carousel.scss";

import arrow from "../img/arrowleft.svg";

function next() {
  const scrollCaroulsel = document.querySelector("#carousel");
  const position = scrollCaroulsel.scrollLeft;
  scrollCaroulsel.scrollLeft = position + 950;
}

function previous() {
  const scrollCaroulsel = document.querySelector("#carousel");
  const position = scrollCaroulsel.scrollLeft;
  scrollCaroulsel.scrollLeft = position - 950;
}

export default function Carousel() {
  const [gifs, setGifs] = useState([]);

  useEffect(() => {
    async function data() {
      const data = await getTrending();
      setGifs(data);
    }
    data();
  }, []);

  return (
    <section className="carouselContainer" id="carousel">
      <div className="buttonContainer">
        <div className="arrow left" onClick={() => previous()}>
          <img src={arrow} />
        </div>
        <div className="arrow right" onClick={() => next()}>
          <img src={arrow} />
        </div>
      </div>
      {gifs.map(function (singleGif, index) {
        return <img className="imgCarousel" src={singleGif} key={index} />;
      })}
    </section>
  );
}
