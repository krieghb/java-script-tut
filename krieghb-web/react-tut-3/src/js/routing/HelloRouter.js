/**
 * Created by krido02 on 5/11/2016.
 * 
 */

import React from 'react'
import NavLink from './NavLink'

// import { Link } from 'react-router'

// import ReactDOM from 'react-dom'
//
// var HelloClass = React.createClass({
//     render() {
//         return (
//             <div>
//                 <div>
//                     <h1 id="Linking">Nested Linking Tutorial</h1>
//                     <ul id="Listing" role="nav">
//                         <li><Link to="/about">About</Link></li>
//                         <li><Link to="/repos">Repos</Link></li>
//                     </ul>
//                     {this.props.children}
//                 </div>
//                 <div id="HelloRouter">
//                     Hello,  My Little React Router!
//                 </div>
//             </div>
//         )
//     }
// });

// //  Active linking
// var HelloClass = React.createClass({
//     render() {
//         return (
//             <div>
//                 <div>
//                     <h1 id="Linking">Nested Linking Tutorial</h1>
//                     <ul id="Listing" role="nav">
//                         { /*<li><Link to="/about" activeStyle={{color: 'red'}}>About</Link></li> */ }
//                         { /*<li><Link to="/repos" activeStyle={{color: 'red'}}>Repos</Link></li> */ }
//                        
//                         { /*<li><Link to="/about" activeClassName="active">About</Link></li> */ }
//                         { /*<li><Link to="/repos" activeClassName="active">Repos</Link></li> */ }
//                        
//                         <li><NavLink to="/about">About</NavLink></li>
//                         <li><NavLink to="/repos">Repos</NavLink></li>
//                     </ul>
//                     {this.props.children}
//                 </div>
//                 <div id="HelloRouter">
//                     Hello,  My Little React Router!
//                 </div>
//             </div>
//         )
//     }
// });

//  URL Params
var HelloClass = React.createClass({
    render() {
        return (
            <div>
                <div>
                    <h1 id="Linking">Nested Linking Tutorial</h1>
                    <ul id="Listing" role="nav">
                        <li><NavLink to="/repos">Repos</NavLink></li>
                        <li><NavLink to="/about">About</NavLink></li>
                    </ul>
                    {this.props.children}
                </div>
                <div id="HelloRouter">
                    Hello,  My Little React Router!
                </div>
            </div>
        )
    }
});

// ReactDOM.render(<HelloClass />, document.getElementById("container"));

export default HelloClass;