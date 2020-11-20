import {useContext, useEffect, useState} from 'react';
import axios from 'axios';
import {StyledMainContainer} from './Styles';
import {MovieList, TvList, PlayingList, VideoList,} from './Sections';
import {ListContext, SearchContext} from '../context';


const myApi = '64f9385d47c970d860ccd6c147841242';
const baseImgUrl = 'https://image.tmdb.org/t/p/w500';
const baseMovieUrl = 'https://api.themoviedb.org/3/search/movie';
const baseTvUrl = 'https://api.themoviedb.org/3/search/tv';
const baseVideoUrl = 'https://api.themoviedb.org/3/movie/200/videos';
const baseNowPlayingUrl = 'https://api.themoviedb.org/3/movie/now_playing';
const baseYouTubeUrl = 'https://www.youtube.com/embed';

export const Home = () => {
  const [movieList, setMovieList] = useState([]);
  const [tvList, setTvList] = useState([]);
  const [videoList, setVideoList] = useState([]);
  const [nowPlayingList, setNowPlayingList] = useState([]);
  
  const {inputVal, query} = useContext(SearchContext);
  console.log("Home -> videoList", videoList)


  useEffect(() => {
    axios
      .get(baseMovieUrl, {
        params: {
          api_key: myApi,
          query: inputVal || 'a',
          page: 1,
        },
      })
      .then((res) => setMovieList(res.data.results))
      .catch((err) => console.log(err))
      .finally();
  }, [inputVal]);

  useEffect(() => {
    axios
      .get(baseTvUrl, {
        params: {
          api_key: myApi,
          query: inputVal || 'a',
        },
      })
      .then((res) => setTvList(res.data.results));
  }, [inputVal]);

  useEffect(() => {
    axios
      .get(baseNowPlayingUrl, {
        params: {
          api_key: myApi,
          page: 1,
        },
      })
      .then((res) => setNowPlayingList(res.data.results));
  }, [inputVal]);

  useEffect(() => {
    axios
      .get(baseVideoUrl, {
        params: {
          api_key: myApi,
        },
      })
      .then((res) => setVideoList(res.data.results))
      .catch()
      .finally();
  }, [inputVal]);

  return (
    <StyledMainContainer>
      <ListContext.Provider
        value={{
          movieList,
          baseImgUrl,
          tvList,
          nowPlayingList,
          videoList,
          baseYouTubeUrl
        }}
      >
        <MovieList />
        <TvList />
        <PlayingList />
        
        
        
      </ListContext.Provider>
    </StyledMainContainer>
  );
};
