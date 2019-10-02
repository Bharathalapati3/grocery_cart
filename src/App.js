import React from "react";
import "./App.css";
import ProductList from "./components/ProductList/ProductListComponent";

const App = () => {
  return (
    <div className="app">
      <h1> Grocery Cart </h1>
      <ProductList />
    </div>
  );
};

export default App;
