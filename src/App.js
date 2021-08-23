import { useMemo, useState } from "react";
import { RecoilRoot } from "recoil";
import "./App.css";
import { AsyncProfile } from "./examples/AsyncProfile";
import { CharacterCounter } from "./examples/CharacterCounter";
import { ToDo } from "./examples/ToDo";

function App() {
  const [currentExampleIndex, setCurrentExampleIndex] = useState(0);

  const examples = useMemo(
    () => [
      { label: "Character Counter", content: <CharacterCounter /> },
      { label: "To Do", content: <ToDo /> },
      { label: "Async Profile", content: <AsyncProfile /> },
    ],
    []
  );

  const handleOnChangeExample = (event) => {
    setCurrentExampleIndex(event.target.value);
  };

  return (
    <div className="App">
      <h3>Current example:</h3>
      <select onChange={handleOnChangeExample}>
        {examples.map((example, index) => (
          <option key={example.label} value={index}>
            {example.label}
          </option>
        ))}
      </select>
      <div className="example-wrapper">
        <RecoilRoot>{examples[currentExampleIndex].content}</RecoilRoot>
      </div>
    </div>
  );
}

export default App;
