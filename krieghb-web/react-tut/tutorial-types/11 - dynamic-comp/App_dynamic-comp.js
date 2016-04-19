/**
 * Created by krido02 on 4/7/2016.
 * 
 * Getting dynamic data from a data set
 * 
 */
import React from 'react';


class App extends React.Component {
    //State collection of value managed by component
    constructor() {
        super();  // Gives context for "this" within component.
        this.state = { data:  [
            {id:  1, name: "The Doctor"},
            {id:  2, name: "Clara Oswald"},
            {id:  3, name: "Leonard  Hofstadter"},
            {id:  4, name: "Penny Hofstadter"},
            {id:  5, name: "Howard Walowitz"},
            {id:  6, name: "Bernedette Rostenkowski"},
            {id:  7, name: "Sheldon Cooper"},
            {id:  8, name: "Amy Farrah Fowler"},
            {id:  9, name: "Raj Koothrappali"},
            {id: 10, name: "Emily"},
            {id: 11, name: "Stuart Bloom"},
            {id: 12, name: "Will Wheaton"},
            {id: 13, name: "Skippy"}
            
        ]};
    }
    
    // custom
    update(event) {
        this.setState({txt: event.target.value + " - HI"});
    }
    
    
    //  Will always have a render method in a class method that returns other methods or components.
    render() {
        let rows = this.state.data.map(person => {
            return <PersonRow key={person.id} data={person} />
        })
        return <table>
            <tbody>{rows}</tbody>
            </table>
    }
}

const PersonRow = (props) => {
    return <tr>
        <td>{props.data.id}</td>
        <td>{props.data.name}</td>
        </tr>
}

//  3rd way is by stateless.
//  Stateless does not have state.
//const App = () => <h1>Hello Eggheads</h1>

export default App
