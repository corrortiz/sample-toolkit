import { ItemsType } from "../../types";

export const SET_SELECTED_ITEM = "SET_SELECTED_ITEM";
export const CLEAR_SELECTED_ITEM = "CLEAR_SELECTED_ITEM";

export const setSelectedItem = (payload: ItemsType) => {
  return {
    type: SET_SELECTED_ITEM,
    payload,
  };
};

export const clearSelectedItem = () => {
  return {
    type: CLEAR_SELECTED_ITEM,
  };
};

const INITIAL_STATE = {
  selectedItem: {
    name: "",
    author: "",
    id: 0,
  },
};

export const reducer = (state = INITIAL_STATE, action: any) => {
  switch (action.type) {
    case SET_SELECTED_ITEM:
      return {
        ...state,
        selectedItem: action.payload,
      };
    case CLEAR_SELECTED_ITEM:
      return {
        ...state,
        selectedItem: INITIAL_STATE.selectedItem,
      };
    default:
      return state;
  }
};
