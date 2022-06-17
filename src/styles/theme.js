import { ThemeProvider } from "styled-components";
// Styles
import theme from "../themes/default";
import GlobalStyles from "./globals";

const Theme = ({ children }) => (
  <ThemeProvider theme={theme}>
    <GlobalStyles />
    {children}
  </ThemeProvider>
);

export default Theme;
