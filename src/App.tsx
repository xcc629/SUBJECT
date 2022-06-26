import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "styled-components";

import GlobalStyle from "./styles/globalStyles";
import theme from "./styles/theme";
import Main from "./pages/main";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<Main />} />
        </Routes>
      </BrowserRouter>
      <GlobalStyle />
    </ThemeProvider>
  );
}

export default App;
