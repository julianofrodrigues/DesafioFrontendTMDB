import React from 'react';
import Slider from "react-slick";
import {Link} from 'react-router-dom';
import { MovieContainer, Title, TextCarroseulNull} from './styles';



function Carousel({title,movies, backgroundColor, icon, emptyMsg}) {
  const settings = {
    dots: true,
    infinite: movies.length > 5,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1
  };

  return (
    <div>
      <Title style={{backgroundColor}}>{title} {icon}</Title> 
      <Slider {...settings}>
        {movies.length < 1 ? <TextCarroseulNull> <div> <h1 > {emptyMsg}  </h1> </div></TextCarroseulNull> : movies.map(movie => {
          const posterPathIsNull = movie.poster_path.split("/").at(-1) == 'null';
          if(!posterPathIsNull) {
            return (
              <div key = {movie.id} >
                <Link to = {`/movie/detail/${movie.id}`} > 
                  <MovieContainer src = {movie.poster_path} alt= {movie.title} />
                </Link>
              </div>
            )
          }
        })}
      </Slider>
    </div>
  );
}
 
export default Carousel;