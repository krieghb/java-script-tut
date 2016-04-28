/**
 * Created by krido02 on 4/7/2016.
 * 
 * 3 ways of getting txt out.
 * 
 */         
//  Class can have state
class App extends React.Component {
    //  Will always have a render method in a class method that returns other methods or components.
    render() {
        
        // 1st way by using jx as a div
        //return <div>Hi there Everybody</div
        //return <h1>Hello Guys</h1>;
        
        //  2nd way, (the 1st way translates to this),  1st param is type, props, then object
        return React.createElement('h1', null, 'Hi There People');
        
        
        
    }
}

//  3rd way is by stateless.
//  Stateless does not have state.
//const App = () => <h1>Hello Eggheads</h1>

export default App
