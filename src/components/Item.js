import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import store from '../store'
import { addToCart } from '../actions';

export class Item extends Component {
  constructor(){
      super();
      this.addToCart= this.addToCart.bind(this);
  }

  
  addToCart(product){
      store.dispatch( addToCart(product) );
  }


  render () {

    let product=this.props.product;
    let src="../images/"+product.img;
    return (        
        <div className="col-md-3">
            <div className="men-pro-item product-men yes-marg">
                
                <div className="men-thumb-item">
                    <img src={src} alt="" className="pro-image-front"/>
                    <img src={src} alt="" className="pro-image-back"/>
                        <div className="men-cart-pro">
                            <div className="inner-men-cart-pro">
                                <Link to={`/detail/${product.id}`} className="link-product-add-cart" >Quick View</Link>
                            </div>
                        </div>
                        <span className="product-new-top">{product.promo}</span>
                </div>
                <div className="item-info-product ">
                    <h4><a href="single.html">{product.title}</a></h4>
                    <div className="info-product-price">
                        <span className="item_price">{product.price}</span>
                        <del>{product.off}</del>
                    </div>
                    <a className="item_add single-item hvr-outline-out button2" onClick={(e) => this.addToCart(product)}>Add to cart</a>
                </div>
            </div>
        </div>

    );
  }
}



