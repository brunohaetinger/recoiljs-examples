import { useRecoilValue } from "recoil";
import { charCountState } from "../recoil/selectors";

export function CharacterCount() {
  const count = useRecoilValue(charCountState);

  return <>Character Count: {count}</>;
}
