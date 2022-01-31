import React, { useEffect, useState } from 'react';

import Carousel from '../../components/Carousel';
import PageDefault from '../../components/PageDefault';
import api from '../../services/api';
import { AiFillHeart } from 'react-icons/ai';
import { GiPopcorn, GiFilmProjector } from 'react-icons/gi';
import { BsSearch } from 'react-icons/bs';
import { Container } from './styles';


import Input from '../../components/Input';




function Home() {
  const [trendingMovies, setTrendingMovies] = useState([])
  const [topRatedMovies, setTopRatedMovies] = useState([])
  const [favoriteMovies, SetFavoriteMovies] = useState([])
  const [searchMovies, setSearchMovies] = useState([]);
  const [search, setSearch] = useState('')
  useEffect(() => {
    api.get(`movies/getTrendings`).then((movies) => {
      setTrendingMovies(movies.data);
    })
    api.get(`movies/getTopRatedMovies`).then((movies) => {
      setTopRatedMovies(movies.data);
    })
    api.get(`movies/favoriteMovies`).then((movies) => {
      SetFavoriteMovies(movies.data); 
    })
  }, [])
  useEffect(() => {
    if(search) {
      api.get(`movies/findMovie?search=${search}`).then(movie => {
      
        setSearchMovies(movie.data)
      })
    } else {
        setSearchMovies([])
    }
  }, [search])

  return (
    <PageDefault>
      <Container>
        <Input placeholder='Pesquisar...' onChange={(event) => {
          const search = event.target.value.split(" ").join(" + ");
          setSearch(search)
        }}/> 
      </Container>

      {search && <Carousel title = {"Pesquisa"} icon={<BsSearch style={{ color: '#EEEEEE', fontSize: '30px', marginLeft: '1%' }} />}  movies = {searchMovies} backgroundColor={"#AA14F0"}/> }
      <Carousel  title = {"Tendências"} icon={<GiPopcorn style={{ color: '#FFFFFF', fontSize: '30px', marginLeft: '1%' }} />}  movies = {trendingMovies} backgroundColor={"#30475E"}/>
      <Carousel  title = {"Mais votados"} icon={<GiFilmProjector style={{ color: '#FFFFFF', fontSize: '30px', marginLeft: '1%' }} />} movies = {topRatedMovies} backgroundColor={"#A1B57D"}/>
      <Carousel  title = {"Favoritos"} icon={<AiFillHeart style={{ color: '#FFFFFF', fontSize: '30px', marginLeft: '1%' }} />} movies = {favoriteMovies} emptyMsg ={"Nenhum filme favoritado"} backgroundColor={"#B33030"}/>
    </PageDefault>
  );
}

export default Home;