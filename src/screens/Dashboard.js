import React from "react";
import { Container, Table } from "react-bootstrap";
import CartFooter from "../components/items/CartFooter";
import CartItems from "../components/items/CartItems";
import Categories from "../components/items/Categories";
import ItemCards from "../components/items/ItemCards";
import Header from "../components/layout/Header";
import SideBar from "../components/layout/SideBar";
import "../css/App.css";

const Dashboard = () => {
  return (
    <div>
      <Header />
      <div className="flexed-content">
        <SideBar active="dashboard" />
        <div className="sales-content-area">
          <hr />
          <Categories />
          <hr />
          <p className="text-white">Pick Items</p>
          <Container className="cards-holder">
            <div className="row">
              <ItemCards />
            </div>
          </Container>
        </div>
        <div className="cart-content-area">
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
                <CartFooter />
              </tfoot>
            </Table>
          </Container>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
