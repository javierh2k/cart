import React, { Component } from 'react';
import axios from 'axios';
import { config } from '../config';
import storeProduct from '../storeProduct'; 
import { refreshListFilter } from '../actions';

export class Header extends Component {

    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        //this.refreshListFilter = this.refreshListFilter.bind(this);    
    }
    
    refreshListFilter( products ){
        storeProduct.dispatch( refreshListFilter(products) )
    }
    
    remove_hash_from_url(){
        var uri = window.location.toString();
        if (uri.indexOf("#") > 0) {
            var clean_uri = uri.substring(0, uri.indexOf("#"));
            window.history.replaceState({}, document.title, clean_uri);
        }
    }

    handleSubmit(event) {
        event.preventDefault();
        let self=this;
        const formdata = new FormData(event.target);
        let params=[];
        for(let i of formdata){
            if(i[1]!=""){
                if(i[0]=="text"){  
                    params.push( "q="+i[1] );
                }else{
                    params.push(i[1]);
                }
            }                        
        }

        axios.get(config.api_url+`/products/?`+params.join("&") )
            .then(function (response) {        
                self.refreshListFilter(response.data);                
            })
            .catch(function (error) {
                console.log(error);
            });
            this.remove_hash_from_url();
    }




    render() {
        return(
            <div className="header-bot">
                <div className="container">
                    <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3 header-left">
                        <h1><img src="../images/logo3.jpg"/> </h1>
                    </div>
                    <div className="col-xs-12 col-sm-12 col-md-9 col-lg-9 header-middle">
                        <form onSubmit={ (e) => this.handleSubmit(e)  }>
                            <div className="col-xs-4 col-sm-2 col-md-2 col-lg-2 search">
                                <input type="search" name="text" placeholder="Search Text" required=""/>
                            </div>
                            <div className="col-xs-4 col-sm-2 col-md-2 col-lg-2 section_room sel-filter">
                                <select id="country" name="cat" className="frm-field required">
                                    <option value="">All Categories </option>
                                    <option value="available=true">Available</option>
                                    <option value="available=false">Sold out</option>
                                    <option value="_sort=sold_count&_order=desc">Most sold</option>
                                    {this.props.items.map(item => {
                                                return (
                                                    <option value={`category=$(item)`}>{item}</option>
                                                );
                                    })}	
                                </select>
                            </div>
                            <div className="col-xs-4 col-sm-2 col-md-2 col-lg-2 filter_room sel-filter">
                                <select className="frm-field" name="coast">
                                    <option value="">All Price</option>
                                    <option value="price_gte=30000">Mayor a 30000</option>
                                    <option value="price_lte=10000">Menor a 10000</option>
                                </select>
                            </div>

                            <div className="col-xs-4 col-sm-2 col-md-2 col-lg-2 order_room sel-filter">
                                <select className="frm-field" name="order">
                                    <option value="">All Order</option>
                                    <option value="_sort=title&_order=asc">Name product</option>
                                    <option value="_sort=sold_count&_order=desc">More expensive</option>
                                    <option value="_sort=sold_count&_order=asc">Cheaper</option>
                                </select>
                            </div>

                            <div className="sear-sub">
                                <input type="submit" onClick={this.search} value=" "/>
                            </div>
                            <div className="clearfix"></div>
                        </form>
                    </div>		
                    <div className="clearfix"></div>
                </div>
            </div>        
        )
    }
}
