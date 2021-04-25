import { BUY_CAKE, BUY_ICECREAM } from "./CakeTypes";

export const buyCake = () => {
  return {
    type: BUY_CAKE,
  };
};
export const buyIcecream = () => {
  return {
    type: BUY_ICECREAM,
  };
};
