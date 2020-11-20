import {useState} from 'react';

export function States() {
  const [movieList, setMovieList] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState('');
  const [inputValue, setInputValue] = useState('');
  const [searchText, setSearchText] = useState('');
}
