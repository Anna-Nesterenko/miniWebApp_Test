import { combineReducers, createStore, applyMiddleware } from "redux";
import { createWrapper } from "next-redux-wrapper";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { SET_RATES, SET_SELECTED_RATE } from "./actions";

const initialState = {
  allRates: [],
  selectedRate: {},
};

const rateReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_RATES:
      return {
        ...state,
        allRates: action.payload,
      };
    case SET_SELECTED_RATE:
      return {
        ...state,
        selectedRate: state.allRates.find(
          (rate) => rate.code === action.payload
        ),
      };
    default:
      return state;
  }
};
export const rootReducer = combineReducers({ cash: rateReducer });
