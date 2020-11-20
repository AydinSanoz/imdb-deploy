import {Card} from '../Card/Card';
import {StyledCardList} from './CardList.style';
import {MovieContext} from '../../Pages/Movie';
import {useContext} from 'react';

export const CardList = (props) => {
  const {movieList, baseImgUrl} = useContext(MovieContext);

  return (
    <StyledCardList>
      {movieList.map((movie, index) => (
        <Card
          key={index}
          id = {movie.id}
          title={movie.title}
          ImgUrl={baseImgUrl + movie.poster_path}
        />
      ))}
    </StyledCardList>
  );
};

/*
adult: false
backdrop_path: "/vgGJ9ThoKjFbQHbAeI29NsbT2lK.jpg"
genre_ids: (3) [878, 12, 28]
id: 1895
original_language: "en"
original_title: "Star Wars: Episode III - Revenge of the Sith"
overview: "The evil Darth Sidious enacts his final plan for unlimited power -- and the heroic Jedi Anakin Skywalker must choose a side."
popularity: 36.558
poster_path: "/xfSAoBEm9MNBjmlNcDYLvLSMlnq.jpg"
release_date: "2005-05-17"
title: "Star Wars: Episode III - Revenge of the Sith"
video: false
vote_average: 7.3
vote_count: 9633
*/
