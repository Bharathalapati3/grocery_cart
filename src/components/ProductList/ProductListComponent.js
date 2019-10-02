import React, { Component } from "react";
import Product from "../Product/ProductComponent";
import CartFooter from "../CartFooter/CartFooterComponent";
import "./ProductListStyles.css";
class ProductList extends Component {
  state = {
    products: [],
    cart: [],
    cartTotal: 0,
    qty: 0
  };

  componentDidMount() {
    fetch("./data.json")
      .then(response => {
        console.log(response);
        return response.json();
      })
      .then(data => {
        this.setState({ products: data });
      })
      .catch(err => {
        console.log("Error Reading data " + err);
      });
  }

  getItem = id => {
    const product = this.state.products.find(item => item.id === id);
    return product;
  };

  increment = id => {
    let tqty = this.state.qty;
    let tempCart = [...this.state.products];
    const selectedProduct = tempCart.find(item => item.id === id);
    const index = tempCart.indexOf(selectedProduct);
    const product = tempCart[index];

    product.count = product.count + 1;
    tqty++;
    this.setState({ qty: tqty });

    product.total = product.count * product.mrp;

    this.setState(
      () => {
        return {
          cart: [...tempCart]
        };
      },
      () => {
        this.addTotals();
      }
    );
  };
  decrement = id => {
    let tqty = this.state.qty;
    let tempCart = [...this.state.products];
    const selectedProduct = tempCart.find(item => item.id === id);
    const index = tempCart.indexOf(selectedProduct);
    const product = tempCart[index];

    product.count = product.count - 1;
    tqty--;

    if (product.count < 0) {
      product.count = 0;
      tqty = this.state.qty;
    } else {
      product.total = product.count * product.mrp;
      this.setState(
        () => {
          return {
            cart: [...tempCart]
          };
        },
        () => {
          this.addTotals();
        }
      );
    }
    this.setState({ qty: tqty });
  };

  addTotals = () => {
    let total = 0;
    this.state.products.map(item => (total += item.total));

    this.setState(() => {
      return {
        cartTotal: total
      };
    });
  };

  render() {
    return (
      <div className="productList">
        {this.state.products.map(item => (
          <Product
            key={item.id}
            item={item}
            value={{ increment: this.increment, decrement: this.decrement }}
          />
        ))}

        <CartFooter total={this.state.cartTotal} qty={this.state.qty} />
      </div>
    );
  }
}

export default ProductList;
