import styled from "styled-components";

export const Layout = styled.section`
  display: flex;
  min-height: 100vh;

  @media ${(props) => props.theme.breakpoints.md} {
    flex-direction: column;
  } ;
`;

export const LeftPanel = styled.div`
  flex: 1;
  padding: 0 3rem;

  @media ${(props) => props.theme.breakpoints.md} {
    padding: 0 1.5rem;
  } ;
`;

export const RightPanel = styled.div`
  flex: 1;
  background: ${(props) => props.theme.colors.primaryLight};
`;
