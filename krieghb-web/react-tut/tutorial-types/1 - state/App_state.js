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
        this.state = { 
            txt:  DefaultText.txt,  
            newTxt: DefaultText.newTxt
        };
    }
    //  Component mount
    componentWillMount() {
        console.log('will mount');
        console.log("Default:  " + this.state.txt);
    }
    
    // custom
    update(event) {
        console.log("Updating:  " + event);
        var substring = "HI";
        var me = "";
        if (event.target.value.toLowerCase().indexOf(substring.toLowerCase()) >= 0) {
            me = "I now contain " + substring + "!"
            //me = event.target.value.toLowerCase().indexOf(substring.toLowerCase());
        }
        else {
            me = "I do NOT contain " + substring + "";
            //me = event.target.value.toLowerCase().indexOf(substring.toLowerCase());
        }
        this.setState({
            txt: event.target.value,
            newTxt: me
        });
    }
    
    resetField() {
        this.setState({
            txt: DefaultText.txt,
            newTxt:  DefaultText.txt
        });
    }
    
    
    //  Will always have a render method in a class method that returns other methods or components.
    render() {
        return (
            <div>
                <div>
                    <input type="text"
                           onChange={this.update.bind(this)} />
                    <h1>{this.state.txt}</h1>
                    <h2>{this.state.newTxt}</h2>
                </div>
                <div>
                    <button onClick={this.resetField.bind(this)}>Reset!
                    </button>
                </div>
            </div>
        )
    }
}


const DefaultText = {
    txt: "this is the state text",
    newTxt: "The state contains the substring 'HI'"
};

//  3rd way is by stateless.
//  Stateless does not have state.
//const App = () => <h1>Hello Eggheads</h1>

export default App
