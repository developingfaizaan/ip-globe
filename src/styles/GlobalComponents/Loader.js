import styled from "styled-components";

const Loader = () => (
  <LoadingContainer>
    <svg
      width="50"
      height="50"
      viewBox="0 0 38 38"
      xmlns="http://www.w3.org/2000/svg"
      stroke="#8000ff"
    >
      <g fill="none" fillRule="evenodd">
        <g transform="translate(1 1)" strokeWidth="3">
          <circle stroke="#555555" strokeOpacity=".5" cx="18" cy="18" r="18" />
          <path d="M36 18c0-9.94-8.06-18-18-18">
            <animateTransform
              attributeName="transform"
              type="rotate"
              from="0 18 18"
              to="360 18 18"
              dur="1s"
              repeatCount="indefinite"
            />
          </path>
        </g>
      </g>
    </svg>
  </LoadingContainer>
);

export default Loader;

const LoadingContainer = styled.figure`
  height: 350px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
