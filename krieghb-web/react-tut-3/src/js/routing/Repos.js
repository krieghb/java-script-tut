/**
 * Created by krido02 on 5/11/2016.
 * 
 * 
 */


import React from 'react'
import { Link } from 'react-router'


var MyRepos = React.createClass({
    render() {
        return (
            <div>
                <br/>
                <br/>
                <h2 className="listTitle">Repos</h2>
                
                { /*  Adding some links */ }
                <ul>
                    <li><Link className="listElements" to="/repos/reactjs/react-router">React Router</Link></li>
                    <li><Link className="listElements" to="/repos/facebook/react">React</Link></li>
                </ul>
            </div>
        )
    }
});

export default MyRepos;
