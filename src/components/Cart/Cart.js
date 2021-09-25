import React from "react";
import Details from "../Details/Details";
import "./Cart.css";

const Cart = (props) => {
  console.log(props.meals);
  const { meals } = props;
  return (
    <div>
      <h3>Order Summary</h3>
      {
        meals.map(meal=><Details meal={meal}></Details>)
      }
    </div>
  );
};

export default Cart;
