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
        this.update = this.update.bind(this);
        this.state = {increasing: false}
    }
    
    update() {
        ReactDOM.render(
            <App val={this.props.val + 1} />,
            document.getElementById('app')
        );
        //this.setState({val: this.state.val + 1})
    }
    
    //  Component mount
    //  At this state component is ready to go into DOM,  don't have access to DOM, but do have access to state and props
    //componentWillMount() {
    //    this.setState({m: 2});
    //}
    
    
    componentWillReceiveProps(nextProps) {
        this.setState({increasing: nextProps.val > this.props.val})
    }
    
    // Returning a true/false
    shouldComponentUpdate(nextProps, nextState) {
        console.log("curProp: ", nextProps, " curState: ", nextState);
        return nextProps.val % 5 === 0;
    }
    
    componentDidUpdate(prevProps, prevState) {
        console.log("prevProps", prevProps);
    }
    
    render() {
        console.log(this.state.increasing);
        return (
            <button onClick={this.update}>
                {this.props.val}
            </button>
        )
    }
    
    //  Do have access to component in the DOM
    componentDidMount(){
        //console.log(ReactDOM.findDOMNode(this));
        // increment  every half second
        //this.inc = setInterval(this.update,500);
    }
    
    //  Clean up any processes
    componentWillUnmount() {
        
        clearInterval(this.inc);
        console.log('Bye Bye!');
    }
}



class Wrapper extends React.Component {
    constructor() {
        super();
    }
    mount() {
        ReactDOM.render(<App />, document.getElementById("a"));
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


App.defaultProps = { val: 0 };
export default App