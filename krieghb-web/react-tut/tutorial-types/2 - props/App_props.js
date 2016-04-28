/**
 * Created by krido02 on 4/7/2016.
 * 
 *      Props, which are meant to passed into component as static values or methods.
 */
import React from 'react';
import ReactDOM from 'react-dom';
//  Class can have state
class App extends React.Component {
    //  Will always have a render method in a class method that returns other methods or components.
    render() {
        //  using props
        let txt = this.props.txt;
        return <h1>{txt}</h1>;
        
        //  Can also put in one line:
        //return <h1>{this.props.txt}</h1>
        
        
    }
}

//  Defining property types expecting.
App.propTypes = {
    txt: React.PropTypes.string,
    cat: React.PropTypes.number.isRequired
};

// For defaults
App.defaultProps = {
    txt: 'this is the default text',
    cat: 5
};

ReactDOM.render(
    <App txt="This is the props value" />,
    document.getElementById('app')
);