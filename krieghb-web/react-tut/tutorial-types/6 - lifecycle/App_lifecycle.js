/**
 * Created by krido02 on 4/8/2016.
 * 
 * 
 *      mounting lifecycle of react component
 *      added or removed = mounting / unmounting
 */

import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
    constructor() {
        super();
        this.state = {val: 0};
        this.update = this.update.bind(this);
    }
    
    update() {
        this.setState( {val: this.state.val + 1 } )
    }
    
    
    //  Compone mount
    componentWillMount() {
        console.log('mounting');
    }
    
    
    render() {
        console.log('rendering!');
        return <button onClick={this.update}>{this.state.val}</button>
    }
    
    componentDidMount(){
        console.log('mounted');
    }
    
    componentWillUnmount() {
        console.log('Bye Bye!');
    }
}


class App2 extends React.Component {
    constructor() {
        super();
        this.state = {val: 0};
        this.update = this.update.bind(this);
    }

    update() {
        this.setState( {val: this.state.val + 1 } )
    }


    //  Compone mount
    componentWillMount() {
        console.log('mounting 2');
    }


    render() {
        console.log('rendering 2!');
        return <button onClick={this.update}>{this.state.val}</button>
    }

    componentDidMount(){
        console.log('mounted 2');
    }

    componentWillUnmount() {
        console.log('Bye Bye 2!');
    }
}



class Wrapper extends React.Component {
    constructor() {
        super();
    }
    mount() {
        ReactDOM.render(<App2 />, document.getElementById("a"));
    }
    unmount() {
        ReactDOM.unmountComponentAtNode(document.getElementById('a'));
    }
    
    render() {
        return (
            <div>
                <button onClick={this.mount.bind(this)}>Mount</button>
                <button onClick={this.unmount.bind(this)}>UnMount</button>
                <div><h1>Hi there!</h1></div>
                <div id="a"></div>
            </div>
        )
    }
}



export default Wrapper