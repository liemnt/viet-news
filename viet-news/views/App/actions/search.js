import { IS_SEARCH_OPEN } from "../const/search";

export const toggleSearch = () => {
  return {
    type: IS_SEARCH_OPEN
  };
};
