import { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';
import Header from "../Header";
import './style.css';

export default function MoviesPage() {
    const [movies,setMovies]=useState([]);
    useEffect(() => {
		const requisicao = axios.get("https://mock-api.driven.com.br/api/v5/cineflex/movies");
		requisicao.then(resposta => {
            setMovies(resposta.data);
        });
	}, []);
    return (
      <div className="movies-page">
        <Header/>
        <div className="step">Selecione o filme</div>
        <div className="in-theaters">
            {movies.map(movie=> <MoviePoster imageURL={movie.posterURL} id={movie.id}/>)}
        </div>
      </div>
    );
  }
  function MoviePoster(props){
      return(
        <Link to={`/sessoes/${props.id}`}>
            <div className="movie-poster">
                <img
                src={props.imageURL} alt="movie poster"
                />
            </div>
        </Link>
      );
  }