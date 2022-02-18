import React from "react";
import "./productList.css";
import Product from "../product/product";
import { products } from "../../data";

function productList() {
  return (
    <div className="pl">
      <div className="pl-texts">
        <h1 className="pl-title">Past, Present & Future</h1>
        <p className="pl-desc">
          Examples of work that I have been apart of. Displaying skills bewtween
          React, React Native and HTML.
        </p>
      </div>
      <div className="pl-list">
        {products.map((item) => (
          <Product key={item.id} img={item.img} link={item.link} />
        ))}
      </div>
    </div>
  );
}

export default productList;
