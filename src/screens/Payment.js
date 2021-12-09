import React from "react";
import { Container, Table } from "react-bootstrap";
import CartFooter from "../components/items/CartFooter";
import CartItems from "../components/items/CartItems";
import Categories from "../components/items/Categories";
import ItemCards from "../components/items/ItemCards";
import PaymentOptions from "../components/items/PaymentOptions";
import Header from "../components/layout/Header";
import SideBar from "../components/layout/SideBar";
import "../css/App.css";

const Payment = () => {
  return (
    <div>
      <Header rightText="Payment" />
      <div className="flexed-content">
        <SideBar active="dashboard" />
        <div className="sales-content-area">
          <hr />
          <Container className="cards-holder">
            <Table bordered>
              <thead className="table-head">
                <tr>
                  <th>Item</th>
                  <th>Qty</th>
                  <th>Price</th>
                </tr>
              </thead>
              <tbody>
                <CartItems />
              </tbody>
              <tfoot className="table-footer">
                <CartFooter secondStage />
              </tfoot>
            </Table>
          </Container>
        </div>
        <div className="cart-content-area">
          <hr />
          <Container className="cards-holder">
            <PaymentOptions />
          </Container>
        </div>
      </div>
    </div>
  );
};

export default Payment;
