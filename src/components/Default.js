import React, { Component } from "react";

export default class Default extends Component {
  render() {
    console.log(this.props);
    return (
      <div className="container">
        <div className="row">
          <div
            className="col-10 mx-auto text-center text-title 
       text-uppercase pt-5"
          >
            <h1 className="display-3">404 Error</h1>
            <br></br>
            <h4>Page not found</h4>
            <br></br>
            <h5>The requested URL 
                <span className="text-danger">{this.props.location.pathname}
            </span>{" "}
            is not valid</h5>
          </div>
        </div>
      </div>
    );
  }
}
