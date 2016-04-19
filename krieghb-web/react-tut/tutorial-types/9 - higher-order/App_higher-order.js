/**
 * Created by krido02 on 4/8/2016.
 * 
 * 
 *      mounting lifecycle of react component
 *      added or removed = mounting / unmounting
 */

import React from 'react';

let Mixin = InnerComponent => class extends React.Component {
    constructor() {
        super();
        this.update = this.update.bind(this);
        this.state = {val: 0};
    }

    update() {
        this.setState( {val: this.state.val + 1 } )
    }


    //  Component mount
    componentWillMount() {
        console.log('will mount');
    }
    
    render() {
        return <InnerComponent
            update={this.update}
            {...this.state}
            {...this.props} />
    }

    componentDidMount(){
        console.log('mounted');
    }

};


const Button = (props) => <button onClick={props.update}>
                            {props.txt} - {props.val}
                          </button>
const Label = (props) => <label onMouseMove={props.update}>
                            {props.txt} - {props.val * 1.235468126}
                         </label>

let ButtonMixed = Mixin(Button);
let LabelMixed = Mixin(Label);

class App extends React.Component {
    
    render() {
        return (
            <div>
                <ButtonMixed txt="Button" />
                <LabelMixed txt="WHOOP!" />
            </div> 
        );
    }
}



App.defaultProps = {txt: "button"};

export default App