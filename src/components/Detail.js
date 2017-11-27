import React, { Component } from 'react';
import axios from 'axios';
import { config } from '../config';

import store from '../store'
import { addToCart } from '../actions';
 
import '../App.css';


class Detail extends Component {

  constructor(props) {
    super(props);
    this.state = {
      product: [],
      id:this.props.match.params.id
    };       
    
    this.addToCart= this.addToCart.bind(this);
  }
  

  addToCart(product){
    store.dispatch( addToCart(product) );
  }

  
  componentDidMount() {
    axios.get(config.api_url+`/products/`+this.state.id)
      .then(function (response) {        
        this.setState({ 
          product :response.data
        });
      }.bind(this))
      .catch(function (error) {
        console.log(error);
    });
       

  }

  render() {
      let product=this.state.product;
      let src="../images/"+product.img;
    return (
      <div>
            <div className="page-head">
                <div className="container">
                    <h3><b>{product.title}</b> </h3>
                </div>
            </div>

            <div className="single">
                <div className="container">
                    <div className="col-md-6 single-right-left animated wow slideInUp animated" data-wow-delay=".5s">
                        <div className="grid images_3_of_2">
                            <div className="flexslider">

                                <div class="img-detail">
                                    <div className="thumb-image"> <img src={src} data-imagezoom="true" className="img-responsive"/> </div>
                                </div>                                
                                <ol class="flex-control-nav flex-control-thumbs">
                                    <li><img src="../images/d2.jpg" draggable="false"/> </li>
                                    <li><img src="../images/d1.jpg" draggable="false" class=""/></li>
                                    <li><img src="../images/d3.jpg" draggable="false" class=""/></li>
                                    <li><img src="../images/d4.jpg" draggable="false" class=""/> </li>
                                </ol>
                                <div className="clearfix"></div>
                            </div>	
                        </div>
                    </div>
                    <div className="col-md-6 single-right-left simpleCart_shelfItem animated wow slideInRight animated" data-wow-delay=".5s">
                                <h3>{product.title }</h3>
                                <p><span className="item_price">{product.price}</span> <del>- {product.off}</del></p>
                                <div className="rating1">
                                    <span className="starRating">
                                        <input id="rating5" type="radio" name="rating" value="5"/>
                                        <label for="rating5">5</label>
                                        <input id="rating4" type="radio" name="rating" value="4"/>
                                        <label for="rating4">4</label>
                                        <input id="rating3" type="radio" name="rating" value="3" checked=""/>
                                        <label for="rating3">3</label>
                                        <input id="rating2" type="radio" name="rating" value="2"/>
                                        <label for="rating2">2</label>
                                        <input id="rating1" type="radio" name="rating" value="1"/>
                                        <label for="rating1">1</label>
                                    </span>
                                </div>
                                <div className="color-quality">
                                    <div className="color-quality-right">
                                        <h5>Count :</h5>
                                        <div class="quantity"><div class="quantity-select"><div class="entry value-minus">&nbsp;</div><div class="entry value"><span>1</span></div><div class="entry value-plus active">&nbsp;</div></div></div>
                                    </div>
                                </div>
                                <div className="occasional">
                                    <h5>Types :</h5>
                                    <div className="colr ert">
                                        <label className="radio"><input type="radio" name="radio" checked=""/><i></i>Casual Shoes</label>
                                    </div>
                                    <div className="colr">
                                        <label className="radio"><input type="radio" name="radio"/><i></i>Sports Shoes</label>
                                    </div>
                                    <div className="colr">
                                        <label className="radio"><input type="radio" name="radio"/><i></i>Formal Shoes</label>
                                    </div>
                                    <div className="clearfix"> </div>
                                </div>
                                <div className="occasion-cart">                                    
                                    <a className="item_add single-item hvr-outline-out button2" onClick={(e) => this.addToCart(product)}>Add to cart</a>
                                </div>
                                
                    </div>
                            <div className="clearfix"> </div>

                            <div className="bootstrap-tab animated wow slideInUp animated" data-wow-delay=".5s">
                                <div className="bs-example bs-example-tabs" role="tabpanel" data-example-id="togglable-tabs">
                                    <ul id="myTab" className="nav nav-tabs" role="tablist">
                                        <li role="presentation" className="active"><a href="#home" id="home-tab" role="tab" data-toggle="tab" aria-controls="home" aria-expanded="true">Description</a></li>
                                                                            
                                    </ul>
                                    <div id="myTabContent" className="tab-content">
                                        <div role="tabpanel" className="tab-pane fade in active bootstrap-tab-text" id="home" aria-labelledby="home-tab">
                                            <h5>Product Brief Description</h5>
                                            <p>Raw denim you probably haven't heard of them jean shorts Austin. Nesciunt tofu stumptown aliqua, retro synth master cleanse. Mustache cliche tempor, williamsburg carles vegan helvetica. Reprehenderit butcher retro keffiyeh dreamcatcher synth. Cosby sweater eu banh mi, qui irure terry richardson ex squid. Aliquip placeat salvia cillum iphone. Seitan aliquip quis cardigan american apparel, butcher voluptate nisi qui.
                                                <span>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</span></p>

                                                <div className="bootstrap-tab-text-grids">
                                                <div className="bootstrap-tab-text-grid">                                                    
                                                    <div className="bootstrap-tab-text-grid-right">                                                        
                                                        <p>Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis 
                                                            suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem 
                                                            vel eum iure reprehenderit.</p>
                                                    </div>
                                                    <div className="clearfix"> </div>
                                                </div>
                                                
                                                <div className="add-review">
                                                    <h4>add a review</h4>
                                                    <form>
                                                        <input type="text" value="Name" onfocus="this.value = '';" onblur="if (this.value == '') {this.value = 'Name';}" required=""/>
                                                        <input type="email" value="Email" onfocus="this.value = '';" onblur="if (this.value == '') {this.value = 'Email';}" required=""/>
                                                        
                                                        <textarea type="text" onfocus="this.value = '';" onblur="if (this.value == '') {this.value = 'Message...';}" required="">Message...</textarea>
                                                        <input type="submit" value="SEND"/>
                                                    </form>
                                                </div>
                                            </div>                                        
                                        
                                        </div>
                                        
                                        
                                    </div>
                                </div>
                            </div>
                </div>
            </div>
            
               

      </div>
    );
  }
}

export default Detail;
