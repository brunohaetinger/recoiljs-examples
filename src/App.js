import { RecoilRoot } from "recoil";
import "./App.css";
import { CharacterCounter } from "./components/CharacterCounter";

function App() {
  return (
    <div className="App">
      <RecoilRoot>
        <CharacterCounter />
      </RecoilRoot>
    </div>
  );
}

export default App;
