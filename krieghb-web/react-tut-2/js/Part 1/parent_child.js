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
    render: function() {
        return (
            <div>
                <h3>Name: {this.state.name}</h3>
                <ShowList names={this.state.friends} />
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