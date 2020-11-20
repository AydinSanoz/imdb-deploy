import {StyledCardText, StyledCardWrapper, StyledMovieImage} from './Card.style';
import {useHistory} from 'react-router-dom'

export const Card = ({title, ImgUrl, id }) => {
  const history = useHistory()

  return (
    <StyledCardWrapper onClick = {()=> history.push(`/find/${id}`)} >
      <StyledMovieImage src= {ImgUrl} alt=""/>
      <StyledCardText>{title}</StyledCardText>
    </StyledCardWrapper>
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
