import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {useParams} from 'react-router-dom';
import {StyledMovieImage } from '../components/Card/Card.style'


const apiKey = '64f9385d47c970d860ccd6c147841242';
const baseUrl = 'https://api.themoviedb.org/3/movie/';
const baseImgUrl = 'https://image.tmdb.org/t/p/w500';




export const MovieDetails = () => {
  const [movieDetails, setMovieDetails] = useState('');
  console.log("MovieDetails -> movieDetails", movieDetails)
  const {id} = useParams();

  useEffect(() => {
    axios
      .get(baseUrl + id, {
        params: {
          api_key: apiKey,
        },
      })
      .then((res) => setMovieDetails(res?.data))
      .catch()
      .finally();
  }, [id]);

  return (
    <div>
      <h1>{movieDetails?.original_title}</h1>
      <StyledMovieImage src = {baseImgUrl+movieDetails?.poster_path}/>
        <p>{movieDetails.overview}</p>
    </div>
  );
};
