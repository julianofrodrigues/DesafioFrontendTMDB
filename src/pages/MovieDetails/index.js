import React,{useState, useEffect} from 'react';
import { Cape, Container, Title, Text, Gender, StarIcon, HeartIcon } from './styles';
import PageDefault from '../../components/PageDefault';
import { AiFillStar, AiOutlineStar, AiFillHeart, AiOutlineHeart } from 'react-icons/ai';
import api from '../../services/api';

function MovieDetails() {
  const [fav, setFav] = useState(false);
  const [movie, setMovie] = useState([]);
  const [genres, setGenres] = useState('');
  const [movieId, setMovieId] = useState(0);
  const [totalStars, setTotalStars] = useState(0)
  const handleSetFavorite = (id) => {
    api.get(`movies/favoriteMoviesId`).then((favoriteMovies) => {
      const isFavorite = favoriteMovies.data.find(favorite => favorite.movie_id == id);
      isFavorite ? setFav(true) : setFav(false)
    });
  }
  const handleSendFavorite = async (id) => {
    if(!fav) {
      await api.post(`movies/favoriteMovies`, {
        id
      });
    } else {
      await api.delete(`movies/favoriteMovies/${id}`);
    }

    handleSetFavorite(id)
  }
  useEffect(() => {
    const urlSplit = window.location.href.split("/");
    const id = urlSplit.at(-1)
    setMovieId(parseInt(id));
    let genresArray = [];
    api.get(`movies/getDetails/${id}`).then(movie => {     
      const totalVote = Math.floor(movie.data.vote_average / 2)
      setTotalStars(totalVote);
      movie.data.genres.forEach((genre) => {
        genresArray.push(genre.name)
      })
      const genres = genresArray.join(', ')
      setGenres(genres);
      setMovie(movie.data);
    })
    handleSetFavorite(id);
  }, [])
  return (
    <PageDefault>
      <Container>
        <Cape src = {movie.poster_path} /> 
      </Container>
        <Title>{movie.title}</Title>
        <Gender>
         <span> {genres} </span>
        </Gender>
        <HeartIcon>
          {fav ? <AiFillHeart onClick = {() => {
            handleSendFavorite(movieId)
          }} /> : <AiOutlineHeart onClick = {() => {
            handleSendFavorite(movieId)
          }}/> }  
        </HeartIcon>
        <StarIcon>

        { [...Array(5)].map((_, index) => {
          if(totalStars > index) {
            return <span key={index}> <AiFillStar /> </span> ;
          } else {
            return <span key={index}><AiOutlineStar /></span>
          }

        })}

        </StarIcon>
       
        <Text>
            Sinopse: {movie.overview}
        </Text>
    </PageDefault>
  );
}

export default MovieDetails;