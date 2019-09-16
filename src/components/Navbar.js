import React, { Component } from "react";
import { Link } from 'react-router-dom';
import logo from '../../src/logo.svg';
import styled from 'styled-components';


export default class Navbar extends Component {
  render() {
    return (
     <NavWrapper className="navbar navbar-expand-sm primary navbar-dark px-sm-5">
        {/* 
        https://www.iconfinder.com/icons/1243689/call_phone_icon
        Creative Commons (Attribution 3.0 Unported);
        https://www.iconfinder.com/Makoto_msk */ }
        <Link to='/'>
        {/* <img src={logo} alt="store" className="navbar-brand"/> */}
        </Link>
        <ul className="navbar-nav align-items-center">
            <li className="nav-item ml-5">
            <Link to="/" className="nav-link">
                HOME
            </Link>
            </li>
            <li className="nav-item ml-5">
            <Link to="/shop" className="nav-link">
                PRODUCTS
            </Link>
            </li>
            <li className="nav-item ml-5">
            <Link to="/about" className="nav-link">
                ABOUT
            </Link>
            </li>
        </ul>
        <Link to='/cart' className="ml-auto">
        <ButtonContainer>
            <span className="mr-2">
                <i className="fas fa-cart-plus" />
            </span>
            My Cart
        </ButtonContainer>
        </Link>
     </NavWrapper>
    );
  }
}


const ButtonContainer = styled.button`
    text-transform:capitalize;
    font-size: 1.2rem;
    background:white;
    border:0.2rem solid var(--lightBlue);
    padding:0.2rem 0.5rem;
    border-radius: 0.5rem;
    cursor:pointer;
    margin:0.2rem 0.5rem;
    transition:all 0.5s ease-in-out;
    &:hover { 
        background:var(--lightBlue);
        color:var(--mainBlue);
    }
    &:focus {
        outline:none;
    }
`;

const NavWrapper = styled.nav`
    background:var(--mainBlack);
    .nav-link {
        color:var(--mainWhite)!important;
        font-size: 1.3rem; 
        text-transform: capitalize;
    }
`;