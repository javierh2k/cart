import React, { Component } from 'react';
import axios from 'axios';
import { Header } from './components/Header';
import { Menu } from './components/Menu';
import { Footer } from './components/Footer';
import { Main } from './components/Main';
import { config } from './config';

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
    
    axios.get(config.api_url+`/categorys/`)
    .then(function (response) { 
      this.setState({ 
        categorys :response.data
      });
    }.bind(this))
    .catch(function (error) {
      console.log(error);
  });

  }

  render() {
    
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
