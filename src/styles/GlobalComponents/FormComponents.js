import styled from "styled-components";

export const Form = styled.form`
  display: flex;
  align-items: flex-end;
  gap: 0.4rem;
  margin: 3rem 0 2rem 0;
  width: 100%;

  @media ${(props) => props.theme.breakpoints.md} {
    flex-direction: column;
  }
`;

export const FormGroup = styled.div`
  width: 100%;
`;

export const Label = styled.label`
  display: block;
  margin-bottom: 0.5rem;
`;

export const Input = styled.input`
  width: 100%;
  background-color: ${(props) => props.theme.colors.primary};
  color: ${(props) => props.theme.colors.secondary};
  transition: border-color 0.4s ease-in-out;
  border: 1px solid ${(props) => props.theme.colors.secondaryDark + "F2"}; // 'F2' Hex Alpha

  &:focus {
    border-color: ${(props) => props.theme.colors.accent};
  }
`;

export const Button = styled.button`
  background: ${(props) => props.theme.colors.accent};
  color: ${(props) => props.theme.colors.secondary};
  border: 1px solid ${(props) => props.theme.colors.accent};
  cursor: pointer;
  white-space: nowrap;
  transition: all 0.4s ease-in-out;
  transition-property: transform, background-color, border-color;

  &:focus {
    background: ${(props) => props.theme.colors.accentDark};
    border-color: ${(props) => props.theme.colors.accentDark};
    transform: scale(0.98);
  }

  &:hover {
    background: ${(props) => props.theme.colors.accentDark};
    border-color: ${(props) => props.theme.colors.accentDark};
  }
`;
