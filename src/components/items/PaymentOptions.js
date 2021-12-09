import React, { useState } from "react";
import { Button, Col, Form, Row, Tab, Tabs } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { commons } from "../../constants/common";
import { selectItem, addToCart } from "../../redux_setup/slices/shopSlice";

const PaymentOptions = () => {
  const dispatch = useDispatch();
  const itemsFromCart = useSelector(selectItem);
  const items = [...itemsFromCart];
  const updateCart = (item, action) => {
    let newQuantity;
    const index = items.findIndex((tempItem) => tempItem.id === item.id);
    if (action === "increment") {
      newQuantity =
        items[index].quantity < item.maxNum
          ? items[index].quantity + 1
          : items[index].quantity;
      //
      items.splice(index, 1, {
        id: item.id,
        name: item.name,
        price: item.price,
        totalPrice: item.price * newQuantity,
        image: item.image,
        quantity: newQuantity,
        maxNum: item.maxNum,
      });
    } else if (action === "decrement") {
      newQuantity =
        items[index].quantity > 1
          ? items[index].quantity - 1
          : items[index].quantity;
      //
      items.splice(index, 1, {
        id: item.id,
        name: item.name,
        price: item.price,
        totalPrice: item.price * newQuantity,
        image: item.image,
        quantity: newQuantity,
        maxNum: item.maxNum,
      });
    } else {
      items.splice(index, 1);
    }

    //final dispatch
    dispatch(addToCart(items));
  };

  // form states
  const [amount, setAmount] = useState("");
  const [discount, setDiscount] = useState("");
  const [balance, setBalance] = useState("");

  // function to modify balance
  const modifyBalance = () => {
    const balance = parseInt(discount);
    console.log(balance);
  };
  return (
    <>
      {items.length > 0 ? (
        <Tabs
          defaultActiveKey="cash"
          id="payment_options"
          className="mb-3 text-white"
        >
          <Tab eventKey="cash" title="Cash">
            <Form>
              <Form.Group as={Row} className="mb-3" controlId="amount">
                <Form.Label column sm="3">
                  Amount <span className="text-danger">*</span>
                </Form.Label>
                <Col sm="9">
                  <Form.Control
                    type="number"
                    placeholder="Amount"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    onBlur={modifyBalance}
                    required
                  />
                </Col>
              </Form.Group>
              <Form.Group
                as={Row}
                className="mb-3"
                controlId="discount"
                value={discount}
                onChange={(e) => setDiscount(e.target.value)}
                onBlur={modifyBalance}
              >
                <Form.Label column sm="">
                  Discount
                </Form.Label>
                <Col sm="9">
                  <Form.Control type="number" placeholder="Discount, if any" />
                </Col>
              </Form.Group>
              <Form.Group as={Row} className="mb-3" controlId="balance">
                <Form.Label column sm="3">
                  Balance
                </Form.Label>
                <Col sm="9">
                  <Form.Control plaintext readOnly value={balance} />
                </Col>
              </Form.Group>
              <Button variant="success" type="submit">
                Complete
              </Button>
            </Form>
          </Tab>
          <Tab eventKey="mpesa" title="Mpesa" disabled>
            <p>Mpesa</p>
          </Tab>
          <Tab eventKey="cards" title="Cards" disabled>
            <p>Cards</p>
          </Tab>
        </Tabs>
      ) : (
        <p>No items in cart to pay for</p>
      )}
    </>
  );
};

export default PaymentOptions;
