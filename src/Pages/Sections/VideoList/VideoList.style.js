import styled from 'styled-components'


export const StyledVideoWrapper = styled.div`
  background-color: #000000;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;

  padding: 25px;
  width: 95%;
  border-radius: 30px;
  background-image: url('https://picsum.photos/id/1067/600/400'),
    url('https://picsum.photos/id/250/600/400');
  background-blend-mode: lighten;
  background-size: cover;
  margin: auto;
  box-shadow: 10px 10px 10px black;
`;

