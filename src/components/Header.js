import React, { Component } from 'react';


export class Header extends Component {

    render() {
        return(
            <div className="header-bot">
                <div className="container">
                    <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3 header-left">
                        <h1><img src="../images/logo3.jpg"/> </h1>
                    </div>
                    <div className="col-xs-12 col-sm-12 col-md-9 col-lg-9 header-middle">
                        <form>
                            <div className="col-xs-4 col-sm-2 col-md-2 col-lg-2 search">
                                <input type="search" placeholder="Search" required=""/>
                            </div>
                            <div className="col-xs-4 col-sm-2 col-md-2 col-lg-2 section_room sel-filter">
                                <select id="country" className="frm-field required">
                                    <option value="">All</option>
                                    <option value="available">Available</option>
                                    <option value="sold out">Sold out</option>
                                    <option value="most sold">Most sold</option>
                                    {this.props.items.map(item => {
                                                return (
                                                    <option value={item}>{item}</option>
                                                );
                                    })}	
                                </select>
                            </div>
                            <div className="col-xs-4 col-sm-2 col-md-2 col-lg-2 filter_room sel-filter">
                                <select className="frm-field">
                                    <option value="">All</option>
                                    <option value="available">Mayor a 30000</option>
                                    <option value="sold out">Menor a 10000</option>
                                    <option value="most sold">Most sold</option>
                                    
                                </select>
                            </div>

                            <div className="col-xs-4 col-sm-2 col-md-2 col-lg-2 order_room sel-filter">
                                <select className="frm-field">
                                    <option value="">Order by</option>
                                    <option value="name">Name product</option>
                                    <option value="expensive">More expensive</option>
                                    <option value="cheaper">Cheaper</option>
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
