import React from "react";
import { Button } from "react-bootstrap";
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
            <td className="cart-description-area">
              <div className="cart-image-holder">
                <img src={`images/${item.image}`} className="cart-image" />
              </div>
              <div className="cart-info">
                <div className="cart-description">
                  <p>{item.name}</p>
                  <p>{`${commons.currency} ${item.price}`}</p>
                </div>
                <div className="cart-buttons">
                  <Button variant="light">
                    <i className="fa fa-minus"></i>
                  </Button>
                  <Button variant="primary">
                    <i className="fa fa-plus"></i>
                  </Button>
                  <Button variant="danger">
                    <i className="fa fa-trash"></i>
                  </Button>
                </div>
              </div>
            </td>
            <td>{item.quantity} </td>
            <td>{item.totalPrice} </td>
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
