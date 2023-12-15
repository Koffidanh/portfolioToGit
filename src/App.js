import logo from "./logo.svg";
import "./App.css";
import Page from "../src/Components/Page";
import { GlobalProvider } from "./Contexts/GlobalContext";
function App() {
  return (
    <GlobalProvider>
      <div className="App">
        <header className="App-header">
          <Page />
        </header>
      </div>
    </GlobalProvider>
  );
}

export default App;
