import { createStore, combineReducers, applyMiddleware } from "redux";
import { cakeReducer, icecreamReducer } from "./CakeReducer";
import { composeWithDevTools } from "redux-devtools-extension";
import logger from "redux-logger";

const rootReducer = combineReducers({
  cake: cakeReducer,
  iceCream: icecreamReducer,
});

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(logger))
);

export default store;
