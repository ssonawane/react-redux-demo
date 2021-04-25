import { BUY_CAKE, BUY_ICECREAM } from "./CakeTypes";

const cakeInitialState = {
  numOfCakes: 10,
};

const icecreamInitialState = {
  numOfIcecream: 20,
};

export const cakeReducer = (state = cakeInitialState, action) => {
  switch (action.type) {
    case BUY_CAKE:
      return {
        ...state,
        numOfCakes: state.numOfCakes - 1,
      };

    default:
      return state;
  }
};

export const icecreamReducer = (state = icecreamInitialState, action) => {
  switch (action.type) {
    case BUY_ICECREAM:
      return {
        ...state,
        numOfIcecream: state.numOfIcecream - 1,
      };

    default:
      return state;
  }
};
