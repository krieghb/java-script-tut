/**
 * Created by krido02 on 4/7/2016.
 * 
 * State is meant to managed by the component itself.
 * 
 */
import React from 'react';
//  Class can have state
class App extends React.Component {
    //State collection of value managed by component
    constructor() {
        super();  // Gives context for "this" within component.
        this.state = { txt:  "Hi There"};
        this.update = this.update.bind(this);
    }
    
    // custom
    update(event) {
        this.setState({txt: event.target.value + " - HI"});
    }
    
    
    //  Will always have a render method in a class method that returns other methods or components.
    render() {
        return (
            <div>
                <Widget txt={this.state.txt} update={this.update} />
                <Widget txt={this.state.txt} update={this.update} />
                <Widget txt={this.state.txt} update={this.update} />
                <Widget txt={this.state.txt} update={this.update} />

            </div>
        )
    }
}



//  New stateless component
const Widget = (props) => {
    return (
        <div>
            <input type="text"
                   onChange={props.update} />
            <h1>{props.txt}</h1>
        </div>
    );
};


//  3rd way is by stateless.
//  Stateless does not have state.
//const App = () => <h1>Hello Eggheads</h1>

export default App
