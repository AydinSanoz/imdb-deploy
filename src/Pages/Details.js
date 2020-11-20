import {
  StyledMainContainer,
  StyledSectionContainer,
  StyledSectionWrapper,
} from './Styles';

import axios from 'axios';
import {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import {
  StyledCardFav,
  StyledCardImage,
  StyledCardPoint,
  StyledCardTitle,
  StyledBottomWrapper,
 
} from '../components/Card/Card.style';
import {StyledDetailCardWrapper ,  StyledImageWrapper, StyledLogoWrapper} from './Styles';
import { VideoList } from './Sections';

const myApi = '64f9385d47c970d860ccd6c147841242';
const movieDetailBaseUrl = 'https://api.themoviedb.org/3/movie/';
const baseImageUrl = 'https://image.tmdb.org/t/p/w500';

export const Details = (props) => {
  const [movieDetails, setMovieDetails] = useState('');
  const {id} = useParams();


  useEffect(() => {
    axios
      .get(movieDetailBaseUrl + id, {
        params: {
          api_key: myApi,
        },
      })
      .then((res) => setMovieDetails(res.data));
  }, []);

  return (
    <StyledMainContainer>
     <VideoList/>
     
      <StyledSectionContainer>
        <StyledImageWrapper>
          <>
            <StyledDetailCardWrapper>
              <StyledCardImage
                src={baseImageUrl + movieDetails.poster_path}
                alt=""
              />
              <StyledCardTitle>{movieDetails.title}</StyledCardTitle>
              <StyledBottomWrapper>
                <StyledCardFav>Rate:{movieDetails.popularity}</StyledCardFav>
                <StyledCardPoint>Point:{movieDetails.point}</StyledCardPoint>
              </StyledBottomWrapper>
            </StyledDetailCardWrapper>
          </>
        </StyledImageWrapper>

        
        <StyledSectionWrapper>
         
            <h1>{movieDetails.title}</h1> <hr/> <hr/>
            <p>{movieDetails.overview}</p>
            <p>{movieDetails.overview}</p>
            <p>{movieDetails.overview}</p>
            <p>{movieDetails.overview}</p> <hr/> <hr/>
            <p>{movieDetails.overview}</p>
            <p>{movieDetails.overview}</p>
            <p>{movieDetails.overview}</p> <hr/><hr/>
            <a href={movieDetails.homepage}>HOMEPAGE</a>
            
            <p>{movieDetails.video && 'Trailer'}</p>
          
        </StyledSectionWrapper>
        
      </StyledSectionContainer>
    </StyledMainContainer>
  );
};

// id: "533ec652c3a36854480001b1"
// iso_639_1: "en"
// iso_3166_1: "US"
// key: "N1XmtdMZdL8"
// name: "Star Trek IX: Insurrection - Trailer. Available in United States only."
// site: "YouTube"
// size: 720
// type: "Trailer"

// adult: false
// backdrop_path: null
// belongs_to_collection: null
// budget: 0
// genres: [{…}]
// homepage: "http://www.dasvidaniya.in/"
// id: 14751
// imdb_id: "tt1288638"
// original_language: "hi"
// original_title: "Dasvidaniya"
// overview: "A man who loves to make "to-do lists" makes one last bucket list when he realizes he is about to die."
// popularity: 3.707
// poster_path: null
// production_companies: [{…}]
// production_countries: (2) [{…}, {…}]
// release_date: "2008-11-07"
// revenue: 0
// runtime: 117
// spoken_languages: [{…}]
// status: "Released"
// tagline: "The Best Goodbye Ever"
// title: "Dasvidaniya"
// video: false
// vote_average: 7
// vote_count: 22
