import { BrowserRouter, Route, Routes } from "react-router-dom";

import GlobalStyle from "./styles/globalStyles";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" />
      </Routes>
      <GlobalStyle />
    </BrowserRouter>
  );
}

export default App;
