import styled from 'styled-components';

export const StyledMainContainer = styled.div`
  min-height: 86vh;

  background-image: url('https://picsum.photos/id/250/600/400');

  background-size: cover;
`;

export const StyledLogoWrapper = styled.div`
  background-color: #000000;
  display: flex;
  flex-direction: column;
  flex-wrap : wrap;
  align-items: center;
  
  padding: 25px;
  width: 90%;
  height : 16vh;
  border-radius: 30px;
  background-image: url('https://picsum.photos/id/1067/600/400'),
    url('https://picsum.photos/id/250/600/400');
  background-blend-mode: lighten;
  background-size: cover;
  margin: auto;
  box-shadow: 10px 10px 10px black;
`;

export const StyledSectionContainer = styled.div`
  margin: 1.5rem;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  border-radius: 5px;
`;

export const StyledImageWrapper = styled.div`
  display : flex;
  justify-content : center;

  margin: 10px;
  background-color: #000000;
  background-image: linear-gradient(#ffffff, #000000);
  margin: 10px;
  border-radius: 10px;
  text-align: justify;
  padding: 10px;
  align-self: center;
`;
export const StyledSectionWrapper = styled.div`
  width: 45vw;
  height : 70vh ;
  margin: 10px;
  background-color: #000000;
  background-image: linear-gradient(#ffffff, #000000);
  margin: 10px;
  border-radius: 10px;
  text-align: justify;
  padding: 10px;
  display: flex;
  flex-direction : column;
  align-items :center;
  align-content : center;
  justify-content : center;
  overflow-x : hidden;
`;

export const StyledDetailCardWrapper = styled.div`
  width: 70%;
  height: 70%;
  display: flex;
  justify-content : center;
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
