import styled from "styled-components";

export const ModalContainer = styled.div`
  width: 100vw;
  min-height: 100vh;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  overflow: auto;
  background-color: rgba(0, 0, 0, 0.7);
  padding: 2rem 0;
`;

export const Modal = styled.div`
  width: 65%;
  padding: 2rem;
  margin: 0 auto;
  background-color: ${(props) => props.theme.colors.primary};

  @media ${(props) => props.theme.breakpoints.md} {
    width: 90%;
    padding: 1rem;
  }
`;

export const ModalTitle = styled.h2`
  margin-bottom: 1.5rem;
`;
