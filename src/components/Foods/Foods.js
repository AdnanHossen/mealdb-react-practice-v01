import React from "react";
import { CardGroup, Card, Button } from "react-bootstrap";
import "./Foods.css";

const Foods = (props) => {
  const { strMeal, strMealThumb, strCategory, strInstructions, strArea } =
    props.food;
  const {addToCart}=props

  return (
    <div>
      <CardGroup className="h-100">
        <Card>
          <div className="">
            <Card.Img variant="top" src={strMealThumb} className="p-2" />
          </div>
          <Card.Body>
            <Card.Title>{strMeal}</Card.Title>
            <div className="card-body">
              <h4>Category: {strCategory}</h4>
              <h4>Area: {strArea}</h4>
              <Card.Text>{strInstructions.slice(0, 200)}</Card.Text>
            </div>
          </Card.Body>
          <div>
            <Button variant="outline-dark" className="w-100" onClick={()=>addToCart(props.food)} >
              add to cart{" "}
            </Button>
          </div>
        </Card>
      </CardGroup>
    </div>
  );
};

export default Foods;
