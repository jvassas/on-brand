import React, { Component } from "react";
import { Navbar, Nav } from "react-bootstrap";
import logo from "../../src/logo.svg";
import styled from "styled-components";

export default class Navb extends Component {
  render() {
    return (
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand href="#home"></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/" className="nav-link" id="page-link">
              HOME
            </Nav.Link>
            <Nav.Link href="/shop" className="nav-link" id="page-link">
              SHOP
            </Nav.Link>
            <Nav.Link href="/about" className="nav-link" id="page-link">
              ABOUT
            </Nav.Link>
            <Nav.Link href="/blog" className="nav-link" id="page-link">
              BLOG
            </Nav.Link>
          </Nav>
          <Nav.Link href="/cart" className="ml-auto">
            <ButtonContainer>
              <span>
                <i className="fas fa-shopping-bag" />{" "}
              </span>
            </ButtonContainer>
          </Nav.Link>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

const ButtonContainer = styled.button`
    text-transform:capitalize;
    font-size: 1.2rem;
    background:transparent;
    color: white;
    padding:0.2rem 0.5rem;
    border: solid transparent;
    border-radius: 0.5rem;
    cursor:pointer;
    transition:all 0.5s ease-in-out;
    &:hover { 
        background:var(--lightBlue);
        color:var(--mainYellow);
        border: solid var(--lightBlue);
    }
    &:focus {
        outline:none;
    }
`;

//      <NavWrapper className="navbar navbar-expand-sm primary navbar-dark px-sm-5">
//         {/*
//         https://www.iconfinder.com/icons/1243689/call_phone_icon
//         Creative Commons (Attribution 3.0 Unported);
//         https://www.iconfinder.com/Makoto_msk */ }
//         <Link to='/'>
//         {/* <img src={logo} alt="store" className="navbar-brand"/> */}
//         </Link>
//         <ul className="navbar-nav align-items-center">
//             <li className="nav-item ml-5">
//             <Link to="/" className="nav-link" id="page-link">
//                 HOME
//             </Link>
//             </li>
//             <li className="nav-item ml-5">
//             <Link to="/shop" className="nav-link" id="page-link">
//                 SHOP
//             </Link>
//             </li>
//             <li className="nav-item ml-5">
//             <Link to="/about" className="nav-link" id="page-link">
//                 ABOUT
//             </Link>
//             </li>
//             <li className="nav-item ml-5">
//             <Link to="/blog" className="nav-link" id="page-link">
//                 BLOG
//             </Link>
//             </li>
//         </ul>
//         <Link to='/cart' className="ml-auto">
//         <ButtonContainer>
//             <span className="mr-1">
//                 <i className="fas fa-cart-plus"/>
//             </span>
//         </ButtonContainer>
//         </Link>
//      </NavWrapper>
//     );
//   }
// }
