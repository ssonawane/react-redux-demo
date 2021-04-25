import React from "react";
import { connect } from "react-redux";
import { buyCake, buyIcecream } from "../cakes/CakesAction";

function CakeContainer(props) {
  return (
    <div>
      <h2>Number of cakes - {props.numOfCakes}</h2>
      <button onClick={props.buyCake}>Buy Cake</button>
      <br />
      <h2>Number of Ice Cream - {props.numOfIcecream}</h2>
      <button onClick={props.buyIcecream}>Buy Ice Cream</button>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    numOfCakes: state.cake.numOfCakes,
    numOfIcecream: state.iceCream.numOfIcecream,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    buyCake: () => dispatch(buyCake()),
    buyIcecream: () => dispatch(buyIcecream()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CakeContainer);
