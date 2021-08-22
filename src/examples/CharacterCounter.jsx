import { TextInput } from "../components/CharacterCounter/TextInput";
import { CharacterCount } from "../components/CharacterCounter/CharacterCount";

export function CharacterCounter() {
  return (
    <div>
      <h1>Character Counter:</h1>
      <TextInput />
      <CharacterCount />
    </div>
  );
}
