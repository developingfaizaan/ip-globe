import styled from "styled-components";

export const TableContainer = styled.div`
  width: 100%;
  overflow: auto;
  margin-bottom: 2rem;

  table {
    width: 100%;
    border-collapse: collapse;
    border-top: 1px solid ${(props) => props.theme.colors.secondaryDark};
  }

  th {
    text-align: left;
    font-weight: normal;
    color: ${(props) => props.theme.colors.secondaryLight};
  }

  td,
  th {
    border: 1px solid ${(props) => props.theme.colors.secondaryDark};
    border-top: 0;
    padding: 1.2em;
  }

  td {
    white-space: nowrap;
  }
`;
