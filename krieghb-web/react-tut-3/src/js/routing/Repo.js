/**
 * Created by krido02 on 5/11/2016.
 * 
 * 
 * To use URL Params
 */



import React from 'react'

var Repo = React.createClass({
    render() {
        return (
            <div>
                <h2>{this.props.params.repoName}</h2>
            </div>
        )
    }
});

export default Repo;