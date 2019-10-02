import React, { Component } from "react";
import "./CartFooterStyles.css";
import Modal from "../Modal/ModalComponent";

class CartFooter extends Component {
  state = { show: false };

  showModal = () => {
    this.setState({ show: true });
  };

  hideModal = () => {
    this.setState({ show: false });
  };
  render() {
    return (
      <div className="totalCart">
        <div className="values">
          <div className="content-left">
            <strong>QTY-{this.props.qty}</strong>
            <strong>Total-{this.props.total} RS</strong>
          </div>
        </div>
        <div className="content-right">
          <Modal show={this.state.show} handleClose={this.hideModal}>
            <h3>Total Amount: {this.props.total}</h3>
            <h4>Order Successfully Placed</h4>
          </Modal>
          <button onClick={this.showModal}>CHECKOUT</button>
        </div>
      </div>
    );
  }
}

export default CartFooter;
