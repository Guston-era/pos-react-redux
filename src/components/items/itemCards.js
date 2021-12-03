import React from "react";
import { Col } from "react-bootstrap";
import "../../css/items.css";
import { commons } from "../../constants/common";

// mock state
const items = [
  {
    id: 1,
    name: "Microtik 1511",
    image: "router.jpg",
    maxNum: 12,
    price: 2400,
    brand: "Microtik",
    category: "Router",
  },
  {
    id: 2,
    name: "Litebeam 36T",
    image: "router.jpg",
    maxNum: 12,
    price: 5400,
    brand: "Ubiquiti",
    category: "Radio",
  },
  {
    id: 3,
    name: "Powerbeam 400",
    image: "router.jpg",
    maxNum: 12,
    price: 9400,
    brand: "Ubiquiti",
    category: "Radio",
  },
  {
    id: 4,
    name: "SXT Lite 5",
    image: "router.jpg",
    maxNum: 12,
    price: 4950,
    brand: "Microtik",
    category: "Radio",
  },
  {
    id: 5,
    name: "Tenda 409",
    image: "router.jpg",
    maxNum: 12,
    price: 1700,
    brand: "Tenda",
    category: "Router",
  },
  {
    id: 6,
    name: "TPLink 1405",
    image: "router.jpg",
    maxNum: 12,
    price: 1400,
    brand: "TP Link",
    category: "Router",
  },
];

const itemCards = () => {
  const handleAddToCart = () => {
    alert("Add to Cart");
  };
  return (
    <>
      {items.map(({ id, name, image, price, brand, category, maxNum }) => (
        <Col md={4} key={id} className="item-card" onClick={handleAddToCart}>
          <div className="item-image-holder">
            <img src={`images/${image}`} className="item-image" />
          </div>
          <div className="item-content">
            <p className="bold">{name}</p>
            <p className="category">Category: {category}</p>
            <p className="brand">Brand: {brand}</p>

            <p className="price bold">{`${commons.currency} ${price}`}</p>
          </div>
        </Col>
      ))}
      <div className="clearfix"></div>
    </>
  );
};

export default itemCards;
