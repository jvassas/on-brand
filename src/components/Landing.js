import React, { Component } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

export default class Landing extends Component {
  render() {
    return (
        <div className="jumbotron jumbotron-fluid">
          <div class="container">
            <div className="jumbo-btn">
              <Link to="/shop" className="ml-auto" id="jumbo-btn">
                <ButtonContainer>SHOP NOW</ButtonContainer>
              </Link>
            </div>
          </div>
        </div>
    );
  }
}

const ButtonContainer = styled.button`
  text-transform: capitalize;
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
    color: var(--mainBlue);
  }
  &:focus {
    outline: none;
  }
`;
