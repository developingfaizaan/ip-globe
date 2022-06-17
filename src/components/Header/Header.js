// Styled Components
import { StyledHeader, StyledNav, NavLink, Logo } from "./HeaderStyles";

const Header = () => {
  return (
    <StyledHeader>
      <Logo to="/">IPG</Logo>
      <StyledNav>
        <NavLink to="/" exact>
          IP Lookup
        </NavLink>
        <NavLink to="/url-tracker" exact>
          URL Tracker
        </NavLink>
      </StyledNav>
    </StyledHeader>
  );
};

export default Header;
