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
            red: 0
        };
        this.update = this.update.bind(this);
    }
    
    // custom
    update(event) {
        this.setState({
                red: ReactDOM.findDOMNode(this.refs.red.refs.inp).value
            }
        );
    }
    
    
    //  Will always have a render method in a class method that returns other methods or components.
    render() {
        return (
            <div>
                <NumInput  
                    ref="red" 
                    min={0}
                    max={255}
                    step={1}
                    val={+this.state.red} // + coerces to a number
                    label="Red"
                    type="number"
                    update={this.update} />
            </div>
        )
    }
}


//  Making more composable and more reusable component.  (Similar apis between range and number)
class NumInput extends React.Component {
    render() {
        let label = this.props.label !== '' ? <label>{this.props.label} - {this.props.val}</label> : ''
        return (
            <div>
                <input ref="inp"
                       type={this.props.type}
                       min={this.props.min}
                       max={this.props.max}
                       step={this.props.step}
                       defaultValue={this.props.val}
                    onChange={this.props.update} />
                <br />
                {label}
            </div>
        );
    };
}

NumInput.propTypes = {
    min:    React.PropTypes.number,
    max:    React.PropTypes.number,
    step:   React.PropTypes.number,
    val:    React.PropTypes.number,
    label:  React.PropTypes.string,
    update: React.PropTypes.func.isRequired,
    type:   React.PropTypes.oneOf(['number', 'range'])
};


NumInput.defaultProps = {
    min:    0,
    max:    0,
    step:   1,
    val:    0,
    label:  '',
    type:   'range'
};


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


export default App
