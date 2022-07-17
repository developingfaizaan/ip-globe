import styled from "styled-components";

export const Container = styled.div`
  width: 90%;
  margin: 0 auto;
`;

export const Center = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
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
