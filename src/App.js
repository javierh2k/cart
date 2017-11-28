import React, { Component } from 'react';
import axios from 'axios';
import { Header } from './components/Header';
import { Menu } from './components/Menu';
import { Footer } from './components/Footer';
import { Main } from './components/Main';
import { config } from './config';

//import { Products } from './components/Products';
import './App.css';
 
class App extends Component {

  constructor() {
    super();
    this.state = {
      categories:[]
    };       
  }
  
  componentDidMount() {   
    
    axios.get(config.api_url+`/categories/`)
    .then(function (response) { 
      this.setState({ 
        categories :response.data
      });
    }.bind(this))
    .catch(function (error) {
      console.log(error);
  });

  }

  render() {
    
    return (
      <div className="App">
        <Header items={this.state.categories}></Header>
        <Menu items={this.state.categories}></Menu>
        <Main></Main>
        <Footer></Footer>
      </div>
    );
  }
}

export default App;
