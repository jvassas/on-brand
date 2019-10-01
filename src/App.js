import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from './components/Navbar';
import Landing from './components/Landing';
import ProductList from './components/ProductList';
import Details from './components/Details';
import Cart from './components/Cart';
import Default from './components/Default';
import Modal from './components/Modal';
import About from './components/About';
import Blog from './components/Blog';

class App  extends Component {
  render() {
    return (
     <React.Fragment>
       <NavBar/>
       <Switch>
         <Route exact path="/" component={Landing} />
         <Route exact path="/shop" component={ProductList} />
         <Route exact path="/details" component={Details} />
         <Route exact path="/cart" component={Cart} />
         <Route exact path="/about" component={About} />
         <Route exact path="/blog" component={Blog} />
         <Route component={Default} />
       </Switch>
       <Modal />
     </React.Fragment>
    );
  }
}


export default App;
