import React, { Component } from 'react';

import { Item } from './Item';
//import store from '../store'; 

export class Products extends Component {
    
    

    render() {
        //console.log( this.props );
        return(
            <div className="product-easy">
                <div className="container">                    
                            <div className="resp-tabs-containerx">
                                <div className="tab-1 resp-tab-contentx" aria-labelledby="tab_item-0">
                                   
                                    {this.props.products.map(u => {
                                        return (
                                            <Item product={u} />
                                        );
                                    })}

                                    
                                    
                                    <div className="clearfix"></div>
                                </div>
                                

                            </div>					

                        </div>
                    </div>
               


        )
    }
}
