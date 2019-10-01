import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Tween, Timeline } from "react-gsap";
import styled from "styled-components";
import GOB from "../../src/geton.png";

export default class Landing extends Component {
  render() {
    return (
      <div className="jumbotron p-0">
        <div className="rounded-top">
          <img src={GOB} class="img-fluid" alt="Sample image" />
          <a href="#">
            <div class="mask rgba-white-slight"></div>
          </a>
        </div>

        <div className="card-body text-center mb-3">
          <Tween from={{ x: "200px" }}>
            <h3 class="card-title h3 my-4">
              <strong>COMFY CASUAL X STREETWEAR</strong>
            </h3>
          </Tween>
          <p class="card-text py-2" id="intro">
            Get On Brand represents comfortable and stylish for any occasion. Be
            yourself, feel yourself, On Brand.
          </p>
          <Link to="/shop" className="ml-auto" id="jumbo-btn">
            <ButtonContainer>SHOP NOW</ButtonContainer>
          </Link>
        </div>
      </div>
    );
  }
}

const ButtonContainer = styled.button`
  text-transform: capitalize;
  font-size: 1.2rem;
  background: var(--mainDark);
  color: white;
  border: 0.2rem solid var(--mainDark);
  padding: 0.2rem 0.5rem;
  border-radius: 0.5rem;
  cursor: pointer;
  margin: 0.2rem 0.5rem;
  transition: all 0.5s ease-in-out;
  &:hover {
    background: var(--mainBlack);
    color: var(--mainYellow);
    border:0.2rem solid var(--mainBlack);
  }
  &:focus {
    outline: none;
  }
`;
