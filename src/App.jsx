import "./App.css";
import Main from "./Component/Main/Main";
import Introduction from "./Component/Introduction/Introduction";
import Technologies from "./Component/Technologies/Technologies";
import GlobalStyle, { Container } from "../GlobalStyle";
import { BrowserRouter as Router } from "react-router-dom";
function App() {
  return (
    <Router>
      <GlobalStyle />

      <Container inverse>
        <Main />
        <Introduction/>
        <Technologies />
      </Container>
    </Router>
  );
}

export default App;
