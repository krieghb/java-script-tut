/**
 * Created by krido02 on 4/25/2016.
 *
 *
 */



var ParentContainer = React.createClass({
    getInitialState: function() {
        return {
            name: "Dr. Who",
            friends: ["Clara Oswald", "Melody Pond", "Rory Pond"]
        }
    },
    addFriend: function(friend) {
        this.setState({
            friends: this.state.friends.concat([friend])
        });
    },
    render: function() {
        return (
            <div>
                <h3>Name: {this.state.name}</h3>
                <ShowList names={this.state.friends} />
                <AddFriend addNew={this.addFriend} />
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