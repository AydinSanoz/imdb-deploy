import {useEffect, useState, createContext} from 'react';
import axios from 'axios';
import {CardList} from '../components/CardList/CardList';
import {SearchBox} from '../components/SearchBox/SearchBox';
import { States } from '../context/States';
console.log("States", States)


const apiKey = '64f9385d47c970d860ccd6c147841242';
const baseUrl = 'https://api.themoviedb.org/3/search/movie';
const baseImgUrl = 'https://image.tmdb.org/t/p/w500';

export const MovieContext = createContext();

export const Movie = () => {
  const [movieList, setMovieList] = useState([]);
  const [searchText, setSearchText] = useState('');
  const [selectedText, setSelectedText] = useState('');
 

  useEffect(() => {
    axios
      .get(baseUrl, {
        params: {
          api_key: apiKey,
          query: searchText ? searchText : 'Star Wars',
          page: 1,
        },
      })
      .then((res) => setMovieList(res.data.results))
      .catch()
      .finally();
  }, [searchText]);

  return (
    <div className="App">
      <MovieContext.Provider value = {{movieList, baseImgUrl}}>
        <SearchBox
          onChange={(e) => setSearchText(e.target.value)}
          onClick={() => console.log('Click Pressed')}
          onKeyPress={(e) => e.code == 'Enter' && alert(e.code)}
        />
        <CardList />
      </MovieContext.Provider>
    </div>
  );
};
