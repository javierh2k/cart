import React, { Component } from 'react';
import axios from 'axios';
import { browserHistory } from 'react-router';
import { config } from '../config';
import { Products } from './Products';
import '../App.css';
import storeProduct from '../storeProduct'; 

class Home extends Component {

  constructor(props) {
    super(props);

    this.state = {
      products: [],
      hash:this.props.location.hash.replace("#","")
    };       
        
    this.props.history.listen((location, action) => {
        let anchorName = this.props.location.hash;
        if (anchorName) {
            anchorName = anchorName.replace("#","");
            this.state={hash:anchorName};
            this.refresh();
        }
    });

  }
  

  refresh (){
    let query="";
    if(this.state.hash){
      query="?category="+this.state.hash;
      if(this.state.hash=="all"){
        query="";
      }
    }
    axios.get(config.api_url+`/products/`+query)
      .then(function (response) {        
        this.setState({ 
          products :response.data
        });
      }.bind(this))
      .catch(function (error) {
        console.log(error);
    });  
  }

  componentDidMount() {
    this.refresh();

    storeProduct.subscribe( ()=>{
      this.setState({
          products:storeProduct.getState().products
      });
    }); 
    //storeProduct.subscribe( this.forceUpdate.bind(this) );

  }


  render() {
  
    return (
      <div>
        <Products products={this.state.products}></Products>
      </div>
    );
  }
}

export default Home;
