import "./App.css";
import Main from "./Component/Main/Main";
import About from "./Component/About/About";
import GlobalStyle, { Container } from "../GlobalStyle";
import { BrowserRouter as Router } from "react-router-dom";
function App() {
  return (
    <Router>
      <GlobalStyle />

      <Container inverse>
        <Main />
        <About/>
      </Container>
    </Router>
  );
}

export default App;
