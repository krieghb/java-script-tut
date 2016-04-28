

var HelloUser = React.createClass({
   getInitialState: function() {
       return {
           username: 'MyUser'
       }
   },
    handleChange: function(e) {
        this.setState({
            username: e.target.value
        });
    },
    render: function() {
        return (
            <div>
                Hi
            </div>
        )
    }
});

ReactDOM.render(<HelloUser />, document.getElementById('app'));