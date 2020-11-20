import {StyledHeaderWrapper} from './Header.style';
import {SearchBox} from '../SearchBox';
import {NavBar} from '../../components/NavBar';
import {useState} from "react";

export const Header = ({onChange, onClick}) => {

  return (
    <StyledHeaderWrapper>
      <NavBar />
      <SearchBox onChange={onChange} onClick={onClick} />
    </StyledHeaderWrapper>
  );
};
