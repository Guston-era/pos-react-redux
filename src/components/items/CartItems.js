import React from "react";
import { Col } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { commons } from "../../constants/common";
import { selectItem, addToCart } from "../../redux_setup/slices/shopSlice";

const CartItems = () => {
  const itemsFromCart = useSelector(selectItem);
  const items = [...itemsFromCart];
  return (
    <>
      {items.length ? (
        items.map((item) => (
          <tr
            key={item.id}
            className="cart-item"
            //   onClick={() => handleAddToCart(item)}
          >
            <td> {item.name} </td>
            <td>{item.quantity} </td>
            <td>{item.price} </td>
            {/* <div className="item-image-holder">
            <img src={`images/${item.image}`} className="item-image" />
          </div>
          <div className="item-content">
            <p className="bold">{item.name}</p>
            <p className="category">Category: {item.category}</p>
            <p className="brand">Brand: {item.brand}</p>

            <p className="price bold">{`${commons.currency} ${item.price}`}</p>
          </div> */}
          </tr>
        ))
      ) : (
        <tr>
          <td>
            <p>You have no items in your cart.</p>
          </td>
        </tr>
      )}
    </>
  );
};

export default CartItems;
