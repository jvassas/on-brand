import React, { Component } from "react";
import styled from "styled-components";
import { ProductConsumer } from "../context";
import { Link } from "react-router-dom";

export default class Modal extends Component {
  render() {
    return (
      <ProductConsumer>
        {value => {
          const { modalOpen, closeModal } = value;
          const { img, title, price } = value.modalProduct;

          if (!modalOpen) {
            return null;
          } else {
            return (
              <ModalContainer>
                <div className="container">
                  <div className="row">
                    <div
                      id="modal"
                      className="col-8 mx-auto col-md-6 col-lg-4 text-center text-capitalize p-5"
                    >
                      <h5 className="msg">added to cart</h5>
                      <img src={img} className="img-fluid" alt="product" />
                      <h5 className="msg">{title}</h5>
                      <h5 className="text-muted">price : $ {price}</h5>
                      <Link to="/shop">
                        <ButtonContainer onClick={() => closeModal()}>
                          Continue Shopping
                        </ButtonContainer>
                      </Link>
                      <Link to="/cart">
                        <ButtonContainer onClick={() => closeModal()}>Go to Cart</ButtonContainer>
                      </Link>
                    </div>
                  </div>
                </div>
              </ModalContainer>
            );
          }
        }}
      </ProductConsumer>
    );
  }
}

const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.3);
  display: flex;
  align-items: center;
  border-radius: 0.5rem;
  justify-content: center;
  #modal {
    background: var(--mainWhite);
  }
`;

const ButtonContainer = styled.button`
  text-transform: capitalize;
  font-size: 1.2rem;
  background: var(--mainDark);
  color: white;
  border: 0.1rem solid var(--lightBlue);
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
