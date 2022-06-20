import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "styled-components";

import GlobalStyle from "./styles/globalStyles";
import theme from "./styles/theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path="*" />
        </Routes>
        <GlobalStyle />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
