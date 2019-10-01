import React, { Component } from "react";
import { ProductConsumer } from "../context";
import { Link } from "react-router-dom";
import styled from "styled-components";

export default class Details extends Component {
  render() {
    return (
      <ProductConsumer>
        {value => {
          const {
            id,
            company,
            img,
            info,
            price,
            title,
            inCart
          } = value.detailProduct;
          return (
            <div className="container py-5">
            {/* title */}
              <div className="row">
                <div className="col-10 mx-auto text-center text-slanted text-blue my-5">
                  <h1 className="title">{title}</h1>
                </div>
              </div>
              <div className="row">
                <div className="col-10 mx-auto col-md-6 my-3">
                  <img src={img} className="img-fluid" alt="product" />
                </div>
                {/* product model, price, info */}
                <div className="col-10 mx-auto col-md-6 my-3 text-capitalize" id="product-info">
                  <h3>model: {title}</h3>
                  <h4 className="text-title text-uppercase text-muted mt-3 mb-2">
                    made by : <span className="text-uppercase">{company}</span>
                  </h4>
                  <h4 className="text-blue">
                    <strong>
                      price : <span>$</span>
                      {price}
                    </strong>
                  </h4>
                  <p className="text-capitalize font-weight-bold mt-3 mb-0">
                  Info about product:
                  </p>
                  <p className="text-muted lead">{info}</p>
                  {/* buttons */}
                  <div>
                      <ButtonContainer
                      disabled={inCart ? true : false}
                      onClick={() => {
                          value.addToCart(id);
                          value.openModal(id);
                      }}
                      >
                          {inCart ? "inCart" : "add to cart"}
                      </ButtonContainer>
                      <Link to ='/shop'>
                      <ButtonContainer>back to products</ButtonContainer>
                      </Link>
                  </div>
                </div>
              </div>
            </div>
          );
        }}
      </ProductConsumer>
    );
  }
}


const ButtonContainer = styled.button`
  text-transform: uppercase;
  font-size: 1.2rem;
  background: white;
  border: 0.2rem solid var(--lightBlue);
  padding: 0.2rem 0.5rem;
  border-radius: 0.5rem;
  cursor: pointer;
  margin: 0.2rem 0.5rem;
  transition: all 0.5s ease-in-out;
  &:hover {
    background: var(--lightBlue);
    color: var(--mainYellow);
  }
  &:focus {
    outline: none;
  }
`;