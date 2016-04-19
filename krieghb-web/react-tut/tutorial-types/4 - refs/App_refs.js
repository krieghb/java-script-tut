/**
 * Created by krido02 on 4/7/2016.
 * 
 * Refs are a way to reference an instance of a component from within react app.
 * 
 * Refs won't work with stateless
 * 
 */
import React from 'react';
import ReactDOM from 'react-dom';
//  Class can have state
class App extends React.Component {
    //State collection of value managed by component
    constructor() {
        super();  // Gives context for "this" within component.
        this.state = { 
            red: 0,
            green: 0,
            blue: 0,
            myTxt: "--"
        };
        this.update = this.update.bind(this);
    }
    
    // custom
    update(event) {
        this.setState({
                red: ReactDOM.findDOMNode(this.refs.red.refs.inp).value,
                green: ReactDOM.findDOMNode(this.refs.green.refs.inp).value,
                blue: ReactDOM.findDOMNode(this.refs.blue.refs.inp).value,
                myTxt: ReactDOM.findDOMNode(this.refs.myTxt.refs.inp2).value
            }
        );
    }
    
    
    //  Will always have a render method in a class method that returns other methods or components.
    render() {
        return (
            <div>
                <Slider  ref="red" update={this.update} />
                {this.state.red}
                <br />
                <Slider  ref="green" update={this.update} />
                {this.state.green}
                <br />
                <Slider  ref="blue" update={this.update} />
                {this.state.blue}
                <br />
                <TxtData  ref="myTxt" update={this.update} />
                <h1>{this.state.myTxt}</h1>
                <br />
            </div>
        )
    }
}

class Slider extends React.Component {
    render() {
        return (
            <div>
                <input ref="inp" type="range"
                    min="0"
                    max="255"
                    onChange={this.props.update} />
            </div>
        );
    };
}





class TxtData extends React.Component {
    render() {
        return (
            <div>
                <input ref="inp2" type="text"
                       onChange={this.props.update} />
            </div>
        );
    };
}


//  3rd way is by stateless.
//  Stateless does not have state.
//const App = () => <h1>Hello Eggheads</h1>

export default App
