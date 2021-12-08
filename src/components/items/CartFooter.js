import React from "react";
import { Button, Col } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { commons } from "../../constants/common";
import { selectItem, addToCart } from "../../redux_setup/slices/shopSlice";

const CartFooter = () => {
  const itemsFromCart = useSelector(selectItem);
  const items = [...itemsFromCart];
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
                  <Button variant="danger">Clear Cart</Button>
                </Col>
                <Col md={6}>
                  <p className="bold">{`Total: ${commons.currency} ${total}`}</p>
                  <p>{`Tax: ${commons.currency} ${(0.14 * total).toFixed(
                    2
                  )}`}</p>
                </Col>
                <Col md={12}>
                  <Button variant="success" className="btn w-100">
                    Proceed
                  </Button>
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
