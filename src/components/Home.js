import React, { Component } from 'react';
import axios from 'axios';
import { browserHistory } from 'react-router';

import { Products } from './Products';
import '../App.css';
 
class Home extends Component {

  constructor(props) {
    super(props);
    this.state = {
      products: [],
      hash:this.props.location.hash.replace("#","")
    };       
    
    //this.search = this.search.bind(this);  

    this.props.history.listen((location, action) => {
        let anchorName = this.props.location.hash;
        if (anchorName) {
            anchorName = anchorName.replace("#","");
            this.state={hash:anchorName};
            this.componentDidMount();
        }
    });

  }
  


  componentDidMount() {
    let query="";
    if(this.state.hash){
        query="?category="+this.state.hash;
        if(this.state.hash=="all"){
          query="";
        }
    }
    axios.get(`http://localhost:3004/products/`+query)
      .then(function (response) {        
        this.setState({ 
          products :response.data
        });
      }.bind(this))
      .catch(function (error) {
        console.log(error);
    });       
  }


  render() {
    return (
      <div>
        <Products items={this.state.products}></Products>
      </div>
    );
  }
}

export default Home;
