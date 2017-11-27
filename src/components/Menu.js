import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import store,{loadDataJson} from '../store';
import { removeFromCart } from '../actions';

export class Menu extends Component {

    constructor(props){
        super(props);
        //this.removeFromCart =this.removeFromCart.bind(this);

        if( loadDataJson('cart') ){
            this.state = {
                cart:loadDataJson('cart')
            }
        }        
    
        store.subscribe( ()=>{
            this.setState({
                cart:store.getState().cart
            });
        }); 
        
        
    }

    



    
    render() {
        
        let total=0,counter=2;
        if(this.state.cart){
            total=this.state.cart.reduce( (sum,product)=> sum+ parseFloat(product.price),0 );
            counter=this.state.cart.length; //reduce( (product)=> count++ );
        }
        //console.log("render",this.state );

        return(
            <div className="ban-top">
            <div className="container">
                <div className="top_nav_left">
                    <nav className="navbar navbar-default">
                      <div className="container-fluid">
                        
                        <div className="navbar-header">
                          <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                            <span className="sr-only">Toggle navigation</span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                          </button>
                        </div>
                        
                        <div className="collapse navbar-collapse menu--shylock" id="bs-example-navbar-collapse-1">
                          <ul className="nav navbar-nav menu__list">
                            <li className=" menu__item"><a className="menu__link" href="/#all"> All </a></li>
                            {this.props.items.map(u => {
                                        let ref="/#"+u;
                                        return (
                                            <li className=" menu__item"><a className="menu__link" href={ref}>{u}</a></li>
                                        );
                            })}					
                            
                          </ul>
                        </div>
                      </div>
                    </nav>	
                </div>


                <div className="top_nav_right">
                    <div className="cart box_1">
                                
                                <Link to={`/checkout`}>
                                    <h3> <div className="total">
                                        <i className="glyphicon glyphicon-shopping-cart" aria-hidden="true"></i>
                                        <span className="simpleCart_total">${total} </span> (<span id="simpleCart_quantity" className="simpleCart_quantity"> {counter} </span> items)</div>
                                    </h3>
                                </Link>
                                <p><a href="javascript:;" className="simpleCart_empty" onClick={ ()=>this.props.removeFromCart() } >Empty Cart</a></p>
                               
                    </div>	
                </div>
                <div className="clearfix"></div>
            </div>
        </div>    
        )
    }

}