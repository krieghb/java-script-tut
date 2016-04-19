/**
 * Created by krido02 on 4/8/2016.
 * 
 *   Accessing inter HTML or nested componenets use this.props.children
 */

import React from 'react';
class App extends React.Component {
    render() {
        return <Button>I <Heart /> React</Button>
    }
}

class Button extends React.Component {
    render() {
        return <button>{this.props.children}</button>
    }
}


const Heart = () => <span className="glyphicon glyphicon-heart"></span>

export default App;
