import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import store,{loadDataJson} from '../store';

import { removeFromCart } from '../actions';
import { connect } from 'react-redux';

export default class Checkout extends Component {

    constructor(props){
        super(props);
        this.removeFromCart =this.removeFromCart.bind(this);

        this.state = {
            cart:loadDataJson('cart')
        }
    
        /*store.subscribe( ()=>{
            this.setState({
                cart:store.getState().cart
            });
        }); */     
        //console.log("render",this.state.cart );
    }

    removeFromCart(product,e){
        store.dispatch( removeFromCart(product) );
        this.del_tr(e.target);        
    }
    
    del_tr(remtr)  {   
        while((remtr.nodeName.toLowerCase())!='tr')
            remtr = remtr.parentNode;    
        remtr.parentNode.removeChild(remtr);
    }

    render() {
        
        let total=0,counter=2;
        if(this.state.cart){
            total=this.state.cart.reduce( (sum,product)=> sum+ parseFloat(product.price),0 );
            counter=this.state.cart.length; //reduce( (product)=> count++ );
        }
        
        return(
            <div>
                <div className="page-head">
                    <div className="container">
                        <h3>Check Out</h3>
                    </div>
                </div>
                
                <div className="checkout">
                    <div className="container">
                        <h3>My Shopping Bag</h3>
                        <div className="table-responsive checkout-right animated wow slideInUp" data-wow-delay=".5s">
                            <table className="timetable_sub">
                                <thead>
                                    <tr>
                                        <th>Remove</th>
                                        <th>Product</th>
                                        <th>Quantity</th>
                                        <th>Product Name</th>
                                        <th>Price</th>
                                    </tr>
                                </thead>
                                {this.state.cart.map(product => 
                                    

                                    <tr className="rem1">
                                        <td className="invert-closeb">
                                            <div className="rem">
                                                <div className="close1" onClick={(e) => this.removeFromCart(product,e)}> </div>
                                            </div>                                            
                                        
                                        </td>
                                        <td className="invert-image">
                                        <Link to={`/detail/`+product.id}>
                                            <img src={`../images/`+product.img} alt=" " className="img-responsive" />
                                        </Link>
                                        </td>
                                        
                                        <td className="invert">
                                            <div className="quantity"> 
                                                <div className="quantity-select">                           
                                                    <div className="entry value-minus">&nbsp;</div>
                                                    <div className="entry value"><span>1</span></div>
                                                    <div className="entry value-plus active">&nbsp;</div>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="invert">Hand Bag</td>
                                        <td className="invert">{product.price}</td>
                                    </tr>                                    
                                  )}
                                    
                                    
                            </table>
                        </div>
                        <div className="checkout-left">	
                                
                                <div className="checkout-right-basket animated wow slideInRight" data-wow-delay=".5s">
                                    <a href="/"><span className="glyphicon glyphicon-menu-left" aria-hidden="true"></span>Back To Shopping</a>
                                </div>
                                <div className="checkout-left-basket animated wow slideInLeft" data-wow-delay=".5s">
                                    <h4>Total Shopping basket</h4>
                                    <ul>                                        
                                        <li>Total <i>-</i> <span>{total}</span></li>
                                    </ul>
                                </div>
                                <div className="clearfix"> </div>
                            </div>
                    </div>
                </div>	
            </div>
        )
    }
}
            