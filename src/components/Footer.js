import React, { Component } from "react";

export default class Footer extends Component {
  render() {
    return (
      <div>
        <footer className="bg-light">
          <div className="row">
            <div className="col-sm-6 col-md-4 col-lg-4 text-left">
              <h5>SHOP ON BRAND</h5>
              <h6>Where to buy</h6>
              <h6>Shop</h6>
              <h6>SALE</h6>
              <br />
              <h5>Contact Us</h5>
              <br />
            </div>
            <div className="col-sm-6 col-md-4 col-lg-4 text-left">
              <h5>ABOUT ON BRAND</h5>
              <h6>Instagram</h6>
              <h6>About Us</h6>
              <h6>The Owner</h6>
              <h6>Values</h6>
              <h6>Team and Partners</h6>
            </div>
            <div className="col-sm-6 col-md-4 col-lg-4 text-left">
              <h5>Links</h5>
              <span>
                <i className="fab fa-instagram p-2" />
              </span>
              <span>
                <i className="fab fa-twitter p-2" />
              </span>
              <span>
                <i className="fab fa-facebook p-2" />
              </span>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-12 col-md-12 col-lg-12 text-center pt-5">
              <small>COPYRIGHT 2019 GetOnBrand</small>
            </div>
          </div>
        </footer>
      </div>
    );
  }
}
