import React, { Component } from "react";
import Product from "./Product";
import Title from "./Title";
import {ProductConsumer} from '../context';

export default class ProductList extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="py-5">
          <div className="container">
            <h1 className="title">Products</h1>
            {/* <Title name="our" title="products" /> */}
            
            <div className="row" />
            <ProductConsumer>
              {value => {
                return value.products.map( product => {
                  return <Product key={product.id} 
                  product={product}  />;
                });
              }}
            </ProductConsumer>
          </div>
        </div>
      </React.Fragment>
      //    <Product/>
    );
  }
}
