import { combineReducers } from "redux";
import lawData from "./lawData/lawData";
import { HYDRATE } from "next-redux-wrapper";

const rootReducer = combineReducers({
  index: (state = {}, action) => {
    switch (action.type) {
      case HYDRATE:
        console.log("HYDRATE", action);
        return { ...(state as {}), ...action.payload };
      default:
        return state;
    }
  },
  lawData,
});

export default rootReducer;
