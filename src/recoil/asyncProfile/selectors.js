import { selector } from "recoil";
import { profileGender } from "./atoms";

export const currentProfileQuery = selector({
  key: "currentProfileQuery",
  get: async ({ get }) => {
    const response = await fetch(
      `https://randomuser.me/api/?gender=${get(profileGender)}`
    );
    if (response.error) {
      throw response.error;
    }
    const json = await response.json();
    return json.results[0];
  },
});
