import styled from "styled-components";

export const Container = styled.div`
  width: 90%;
  margin: 0 auto;
`;

export const Center = styled.div`
  height: ${(props) => props.height};
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: ${(props) =>
    props.flexDirection ? props.flexDirection : "row"};
`;

export const BigTitle = styled.h1`
  font-size: 3rem;
  text-align: center;
  margin: 1rem 0 1.5rem;
  line-height: 1.4;
  max-width: 70%;

  @media ${(props) => props.theme.breakpoints.md} {
    font-size: 2rem;
    max-width: 100%;
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
