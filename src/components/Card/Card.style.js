import styled from 'styled-components';

export const StyledCardWrapper = styled.div`
  width: 150px;
  height: 200px;

  border: 1px solid black;
  box-shadow: 10px 10px 10px #00000040;
  border-radius: 10px;
  margin: 5px;
  background-color: #000000;
  position: relative;
  transition: 0.5s;
  & :hover {
    transform: scale(1.1);
    border-radius: 15px;
  }
`;

export const StyledCardTitle = styled.p`
  position: absolute;
  top: 0px;
  width: 100%;
  background-color: #87000090;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  padding: 3px;
  display: flex;
  justify-content: center;
`;

export const StyledCardFav = styled.p`
  border-bottom-left-radius: 10px;
  padding: 3px;
  font-size: small;
`;

export const StyledCardPoint = styled.p`
  border-bottom-right-radius: 10px;
  padding: 3px;
  font-size: small;
`;
export const StyledBottomWrapper = styled.div`
  background-color: #87000090;
  position: absolute;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  bottom: 0px;
  width: 100%;
`;

export const StyledCardImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  border-radius: 10px;
`;
export const StyledCardDesc = styled.p``;
