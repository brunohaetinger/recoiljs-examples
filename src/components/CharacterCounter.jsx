import { CharacterCount } from "./CharacterCount";
import { TextInput } from "./TextInput";

export function CharacterCounter() {
  return (
    <div>
      <h1>Character Counter:</h1>
      <TextInput />
      <CharacterCount />
    </div>
  );
}
