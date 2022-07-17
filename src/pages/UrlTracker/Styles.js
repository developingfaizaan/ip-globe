import styled from "styled-components";

export const Layout = styled.section`
  width: 90%;
  margin: 0 auto;

  @media ${(props) => props.theme.breakpoints.md} {
    width: 100%;
  }
`;

export const SectionTitle = styled.h2`
  margin: 3rem 0 1.1rem;
`;

export const List = styled.ul`
  color: ${(props) => props.theme.colors.secondaryLight};

  li {
    margin: 1rem;
  }
`;
