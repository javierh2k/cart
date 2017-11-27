import React, { Component } from 'react';
import axios from 'axios';
import { Header } from './components/Header';
import { Menu } from './components/Menu';
import { Footer } from './components/Footer';
import { Main } from './components/Main';

import { Products } from './components/Products';
import './App.css';
 
class App extends Component {

  constructor() {
    super();
    this.state = {
      categorys:[]
    };       
  }
  
  componentDidMount() {   
    
    axios.get(`http://localhost:3004/categorys/`)
    .then(function (response) { 
      console.log(response);       
      this.setState({ 
        categorys :response.data
      });
    }.bind(this))
    .catch(function (error) {
      console.log(error);
  });

  }

  render() {
    console.log(this.state);
    return (
      <div className="App">
        <Header items={this.state.categorys}></Header>
        <Menu items={this.state.categorys}></Menu>
        <Main></Main>
        <Footer></Footer>
      </div>
    );
  }
}

export default App;
