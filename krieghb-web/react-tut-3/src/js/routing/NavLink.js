/**
 * Created by krido02 on 5/11/2016.
 * 
 *      Nav Link Wrappers   
 */

import React from 'react'
import { Link } from 'react-router'

var NavLink = React.createClass( {
    render() {
        return (
            <Link {...this.props} activeClassName="active" />
        )
    }
});





export default NavLink;
