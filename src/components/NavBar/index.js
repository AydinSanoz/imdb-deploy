import {StyledNavBarLeft, StyledNavBarUl, StyledNavBarLi} from './NavBar.style';
import {Link} from 'react-router-dom';

export const NavBar = () => {
  return (
    <StyledNavBarLeft>
      <StyledNavBarUl>
        <StyledNavBarLi>
          <Link to = "/">HOME</Link>
        </StyledNavBarLi>
        <StyledNavBarLi>
          <Link to="/About">ABOUT</Link>
        </StyledNavBarLi>
        <StyledNavBarLi>
          <Link to = "/Details/:id">DETAILS</Link>
        </StyledNavBarLi>
      </StyledNavBarUl>
    </StyledNavBarLeft>
  );
};
