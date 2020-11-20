import {
  StyledSearchBoxWrapper,
  StyledSearchButton,
  StyledSearchInput,
} from './SearchBox.style';
import {useState} from 'react';

export const SearchBox = ({onChange, onClick}) => {
  
  return (
    <StyledSearchBoxWrapper>
      <StyledSearchInput onChange = {onChange} />
      <StyledSearchButton onClick = {onClick}>Search</StyledSearchButton>
    </StyledSearchBoxWrapper>
  );
};
