import "./App.css";
import Main from "./Component/Main/Main";
import GlobalStyle from "../GlobalStyle";
import { BrowserRouter as Router} from "react-router-dom";

function App() {
  return (
    <Router>
      <GlobalStyle />

        <Main />

      
    </Router>
  );
}

export default App;
