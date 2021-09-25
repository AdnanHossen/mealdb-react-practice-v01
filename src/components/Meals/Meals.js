import React, { useEffect, useState } from "react";
import { FormControl, InputGroup } from "react-bootstrap";
import Cart from "../Cart/Cart";
import Foods from "../Foods/Foods";
import "./Meals.css";

const Meals = () => {
  const [foods, setFoods] = useState([]);
  const [meals, setMeals] = useState([]);
  const [displaySearch, setDisplaySearch] = useState([]);

  useEffect(() => {
    fetch("./mealdb.JSON")
      .then((res) => res.json())
      .then((data) => {
        setFoods(data.meals);
        setDisplaySearch(data.meals);
      });
  }, []);

  // onclick function for add to cart
  const addToCart = (meal) => {
    const newCart = [...meals, meal];
    setMeals(newCart);
  };

  //
  const searchField = (event) => {
    const searchText = event.target.value;
    const matchedResult = foods.filter((food) =>
      food.strMeal.toLowerCase().includes(searchText.toLowerCase())
    );
    setDisplaySearch(matchedResult);
  };

  // return
  return (
    <>
      <div className="search-field">
        <InputGroup className="my-5 w-50 mx-auto" onChange={searchField}>
          <FormControl placeholder="search foods" />
        </InputGroup>
      </div>

      <div className="mealdb-data-holder">
        <div className="meals-container">
          {displaySearch.map((food) => (
            <Foods food={food} addToCart={addToCart}></Foods>
          ))}
        </div>
        <div className="cart-container">{<Cart meals={meals}></Cart>}</div>
      </div>
    </>
  );
};

export default Meals;
