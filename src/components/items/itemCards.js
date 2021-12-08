import React from "react";
import { Col } from "react-bootstrap";
import "../../css/items.css";
import { commons } from "../../constants/common";
import { useSelector, useDispatch } from "react-redux";
import { selectItem, addToCart } from "../../redux_setup/slices/shopSlice";

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
  {
    id: 7,
    name: "Mercusys 567",
    image: "router.jpg",
    maxNum: 12,
    price: 6400,
    brand: "Mercusys",
    category: "Router",
  },
  {
    id: 8,
    name: "TPLink YT4",
    image: "router.jpg",
    maxNum: 12,
    price: 3400,
    brand: "TP Link",
    category: "Router",
  },
];

const ItemCards = () => {
  const dispatch = useDispatch();
  const itemsFromCart = useSelector(selectItem);
  const cartArray = [...itemsFromCart];
  const handleAddToCart = (item) => {
    console.log(cartArray);
    //search if item exists in cart array
    if (cartArray.length > 0) {
      //proceed with check
      const index = cartArray.findIndex((tempItem) => tempItem.id === item.id);
      if (index !== -1) {
        //id exists so increment the quantity
        const newQuantity = cartArray[index].quantity + 1;
        cartArray.splice(index, 1, {
          id: item.id,
          name: item.name,
          price: item.price,
          totalPrice: item.price * newQuantity,
          image: item.image,
          quantity: newQuantity,
        });
        // console.log(cartArray[index].name, cartArray[index].quantity);
      } else {
        cartArray.push({
          id: item.id,
          name: item.name,
          price: item.price,
          totalPrice: item.price,
          image: item.image,
          quantity: 1,
        });
      }
    } else {
      // just add it already

      cartArray.push({
        id: item.id,
        name: item.name,
        price: item.price,
        totalPrice: item.price,
        image: item.image,
        quantity: 1,
      });
    }

    dispatch(addToCart(cartArray));
    console.log(cartArray);
    // console.log(itemsFromCart);
  };
  return (
    <>
      {items.map((item) => (
        <Col
          md={4}
          key={item.id}
          className="item-card"
          onClick={() => handleAddToCart(item)}
        >
          <div className="item-image-holder">
            <img src={`images/${item.image}`} className="item-image" />
          </div>
          <div className="item-content">
            <p className="bold">{item.name}</p>
            <p className="category">Category: {item.category}</p>
            <p className="brand">Brand: {item.brand}</p>

            <p className="price bold">{`${commons.currency} ${item.price}`}</p>
          </div>
        </Col>
      ))}
      <div className="clearfix"></div>
    </>
  );
};

export default ItemCards;
