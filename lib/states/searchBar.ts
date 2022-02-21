import { atom, selector } from "recoil";
import { RECOIL_KEYS } from "./config/keys";

export const searchBarState = selector({
  key: RECOIL_KEYS.SEARCH_BAR,
  get: ({get}) => ({
    isActive: get(searchBarIsActiveState),
    selected: get(searchBarSelectedState)
  })
});

export const searchBarIsActiveState = atom({
  key: RECOIL_KEYS.SEARCH_BAR_IS_ACTIVE,
  default: false
})

export const searchBarSelectedState = atom({
  key: RECOIL_KEYS.SEARCH_BAR_SELECTED,
  default: false
});
