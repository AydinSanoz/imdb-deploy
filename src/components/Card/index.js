import {
  StyledCardImage,
  StyledCardTitle,
  StyledCardWrapper,
  StyledCardFav,
  StyledCardPoint,
  StyledBottomWrapper,
} from './Card.style';

import {useHistory} from 'react-router-dom';

export const Card = (props) => {
  const history = useHistory();

  function onClick() {
    history.push(`/Details/${props.id}`);
  }

  return (
    <StyledCardWrapper onClick={onClick}>
      <StyledCardImage src={props.imgSrc} alt="" />
      <StyledCardTitle>{props.title}</StyledCardTitle>
      <StyledBottomWrapper>
        <StyledCardFav>Rate:{props.popularity}</StyledCardFav>
        <StyledCardPoint>Point:{props.point}</StyledCardPoint>
      </StyledBottomWrapper>
    </StyledCardWrapper>
  );
};
