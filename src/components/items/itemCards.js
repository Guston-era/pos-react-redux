import React from "react";
import { Col } from "react-bootstrap";

// mock state
const items = [
  {
    id: 1,
    name: "Microtik 1511",
    image: "router.jpg",
    price: 2400,
    brand: "Microtik",
    category: "Router",
  },
  {
    id: 2,
    name: "Litebeam 36T",
    image: "router.jpg",
    price: 5400,
    brand: "Ubiquiti",
    category: "Radio",
  },
  {
    id: 3,
    name: "Powerbeam 400",
    image: "router.jpg",
    price: 9400,
    brand: "Ubiquiti",
    category: "Radio",
  },
  {
    id: 4,
    name: "SXT Lite 5",
    image: "router.jpg",
    price: 4950,
    brand: "Microtik",
    category: "Radio",
  },
  {
    id: 5,
    name: "Tenda 409",
    image: "router.jpg",
    price: 1700,
    brand: "Tenda",
    category: "Router",
  },
  {
    id: 6,
    name: "TPLink 1405",
    image: "router.jpg",
    price: 1400,
    brand: "TP Link",
    category: "Router",
  },
];

const itemCards = () => {
  return (
    <>
      {items.map(({ id, name, image, price, brand, category }) => (
        <Col md={4} key={id}>
          <img src={`../../../public/${image}`} className="item-image" />
          <div className="item-content">
            <p>{name}</p>
            <p>{brand}</p>
            <p>{price}</p>
            <p>{category}</p>
          </div>
        </Col>
      ))}
    </>
  );
};

export default itemCards;
