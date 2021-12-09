import React from "react";
import { Button, Col } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { commons } from "../../constants/common";
import { selectItem, clearCart } from "../../redux_setup/slices/shopSlice";

const CartFooter = ({ secondStage }) => {
  const dispatch = useDispatch();
  const itemsFromCart = useSelector(selectItem);
  const items = [...itemsFromCart];
  // clear the whole cart
  const clearCartHandler = () => {
    if (window.confirm("Are you sure you want to clear the cart?")) {
      dispatch(clearCart());
    }
  };
  let total = 0;
  items.map((item) => {
    total += item.totalPrice;
  });
  return (
    <>
      {items.length > 0 && (
        <>
          <tr>
            <td colSpan="3">
              <div className="row">
                <Col md={6}>
                  <Button variant="danger" onClick={clearCartHandler}>
                    Clear Cart
                  </Button>
                </Col>
                <Col md={6}>
                  <p className="bold">{`Total: ${commons.currency} ${total}`}</p>
                  <p>{`Tax: ${commons.currency} ${(0.14 * total).toFixed(
                    2
                  )}`}</p>
                </Col>
                <Col md={12}>
                  {secondStage ? (
                    <Link to="/dashboard">
                      <Button variant="warning" className="btn w-100">
                        <i className="fa fa-arrow-left"></i> Back To Items
                      </Button>
                    </Link>
                  ) : (
                    <Link to="/payment">
                      <Button variant="success" className="btn w-100">
                        Proceed
                      </Button>
                    </Link>
                  )}
                </Col>
              </div>
            </td>
          </tr>
        </>
      )}
    </>
  );
};

export default CartFooter;
