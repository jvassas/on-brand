import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Tween } from "react-gsap";
import styled from "styled-components";
import GOB from "../../src/onbrand3.png";
import Chi from "../../src/chitown.png";

export default class Landing extends Component {
  render() {
    return (
      <div className="jumbotron p-0">
        <div className="rounded-top">
          <img src={GOB} class="img-fluid" alt="bg-white-ob" />
        </div>
        <div className="row bg-light" id="car">
          <div className="col-sm-12 text-center">
            <Tween from={{ x: "200px" }}>
              <h3 class="h3 mt-4">
                <strong>COMFY CASUAL X STREETWEAR</strong>
              </h3>
            </Tween>
            <p class="py-2" id="intro">
              Get On Brand represents comfortable and stylish for any occasion.
              Be yourself, feel yourself, On Brand.
            </p>
            <Link to="/shop" className="ml-auto mb-3" id="jumbo-btn">
              <ButtonContainer>SHOP NOW</ButtonContainer>
            </Link>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-12 col-md-12 col-lg-12">
            <img src={Chi} class="img-fluid" alt="bw-chi"/>
          </div>
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
  margin-bottom: 4rem;
  transition: all 0.5s ease-in-out;
  &:hover {
    background: var(--mainBlack);
    color: var(--mainYellow);
    border: 0.2rem solid var(--mainBlack);
  }
  &:focus {
    outline: none;
  }
`;
