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
            input: '/* add your jsx here */',
            output: '',
            err: ''
        };
        
        this.update = this.update.bind(this);
    }
    
    // custom
    update(event) {
        let code = event.target.value;
        try {
            this.setState({
                output: babel.transform(code, {
                    stage: 0,
                    loose: 'all'
                }).code,
                err: ''  // When no error
            })
        }
        catch(err) {
            this.setState({err: err.message})
        }
    }
    
    
    //  Will always have a render method in a class method that returns other methods or components.
    render() {
        return (
            <div>
                <header>{this.state.err}</header>
                <div className="container">
                    <textarea
                        onChange={this.update}
                        defaultValue={this.state.input}>
                    </textarea>
                    <pre>
                        {this.state.output}
                    </pre>
                </div>
            </div>
        )
    }
}

//  3rd way is by stateless.
//  Stateless does not have state.
//const App = () => <h1>Hello Eggheads</h1>

export default App
