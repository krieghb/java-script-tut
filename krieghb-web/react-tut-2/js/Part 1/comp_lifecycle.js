/**
 * Created by krido02 on 4/26/2016.
 * 
 * 
 * 
 */



var ParentContainer = React.createClass({
    getInitialState: function() {
        alert("In ParentContainer: getInitialState");
        return {
            name: "Dr. Who",
            // friends: ["Clara Oswald", "Melody Pond", "Rory Pond"]
        }
    },
    
    //  Invoked once before first render
    componentWillMount: function() {
        //  Calling setState here does not cause a re-render.
        alert("In ParentContainer:  componentWillMount");
    },

    //  Invoked once after first render
    componentDidMount: function() {
        //  Now have access to this.getDOMNode()
        alert("In ParentContainer:  componentDidMount");
    },

    //  Invoked whenever there is a prop change
    //  Called BEFORE render.
    componentWillReceiveProps: function() {
        //  This is not called for initial render.
        //  Previous props can be accessed by this.props
        //  Calling setState here does not trigger an additional re-render.
        alert("In ParentContainer:  componentWillReceiveProps");
    },

    //  Called IMMEDIATELY before a component is unmounted.
    componentWillUnmount: function() {
        alert("In ParentContainer:  componentWillUnmount");
    },
    
    render: function() {
        return (
            <div>
                Hello, {this.state.name}
            </div>
        )
    }
});

var AddFriend = React.createClass({
    getInitialState: function() {
        return{
            newFriend: ''
        }
    },
    //  Adding prop Types;
    propTypes: {
        addNew: React.PropTypes.func.isRequired
    },
    updateNewFriend: function(e) {
        this.setState({
            newFriend: e.target.value
        });
    },
    handleAddNew: function() {
        this.props.addNew(this.state.newFriend);
        this.setState({
            newFriend: ''
        });
    },
    render: function() {
        return (
            <div>
                <input  type="text" value={this.state.newFriend} onChange={this.updateNewFriend} />
                <button onClick={this.handleAddNew}>Add Friend</button>
            </div>
        )
    }
});

var ShowList = React.createClass({
    render: function() {
        var listItems = this.props.names.map(function(friend) {
            return <li>{friend}</li>
        });
        return (
            <div>
                <h3>Friends</h3>
                <hl>
                    {listItems}
                </hl>
            </div>
        )
    }
});


ReactDOM.render(<ParentContainer />, document.getElementById('content'));