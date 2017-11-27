import React, { Component } from 'react';

export class Footer extends Component {
    render() {
        return(
            <div class="footer footerline">
                <div class="container">
                
                    <div class="col-md-9 footer-right">
                        <div class="col-sm-6 newsleft">
                            <h3>SIGN UP FOR NEWSLETTER !</h3>
                        </div>
                        <div class="col-sm-6 newsright">
                            <form>
                                <input type="text" value="Email" onfocus="this.value = '';" onblur="if (this.value == '') {this.value = 'Email';}" required=""/>
                                <input type="submit" value="Submit"/>
                            </form>
                        </div>			
                        
                    </div>
                    <div class="clearfix"></div>
                    <p class="copy-right">&copy 2017 appShopCart. All rights reserved </p>
                </div>
            </div>

        )
    }
}
