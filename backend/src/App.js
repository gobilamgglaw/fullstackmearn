import React, { Component } from 'react';
import AppNavbar from './components/AppNavbar';
import ShoppingList from './components/ShoppingList';
import ProductModal from './components/ProductModal';
import { Container } from 'reactstrap';
//redux
import { Provider } from 'react-redux';
import store from './store';


import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <AppNavbar/>
          <Container>
          <ProductModal/>
          <ShoppingList/>
          </Container>
        </div>  
      </Provider>
    );
  }
}

export default App;
