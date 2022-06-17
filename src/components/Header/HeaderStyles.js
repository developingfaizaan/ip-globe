import { NavLink as Link } from "react-router-dom";
import styled from "styled-components";

export const StyledHeader = styled.header`
  min-height: 10vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const StyledNav = styled.nav`
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const NavLink = styled(Link)`
  padding-left: 2rem;
  transition: color 0.4s ease-in-out;
  color: ${(props) => props.theme.colors.secondaryLight};

  &:hover {
    color: ${(props) => props.theme.colors.secondary};
  }

  &.active {
    color: ${(props) => props.theme.colors.secondary};
  }

  @media ${(props) => props.theme.breakpoints.md} {
    padding-left: 1.5rem;
  }
`;

export const Logo = styled(Link)`
  font-size: 1.25rem;
  font-weight: 600;
`;
