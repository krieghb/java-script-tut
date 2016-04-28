/**
 * Created by krido02 on 4/25/2016.
 */
//  tutorial
var CommentBox = React.createClass({
    render: function() {
        return (
            <div className="commentBox">
                <h1>Comments</h1>
                <CommentList />
                <CommentForm />
                <TestClass propT="Oy Vey!"/>
            </div>
        );
    }
});

var CommentList = React.createClass({
    render: function() {
        return (
            <div className="commentList">
                Hello Worldies, I am a CommentList!
            </div>
        );
    }
});

var CommentForm = React.createClass({
    render: function() {
        return (
            <div className="commentForm">
                Hello Again.  I am a comment form.
            </div>
        );
    }
});

var TestClass = React.createClass({
    render: function() {
        return (
            <div className="testClass">
                <button type="button" onClick={this.incrementCount} >Increment (State: {this.state.count})</button>
                hmmmm OY:  {this.props.propT}
            </div>
        );
    },

    incrementCount: function() {
        this.setState({
            count: this.state.count + 1
        })
    },

    getInitialState: function() {
        return {
            count: 0
        }
    }
});







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
                Hello {this.state.username} <br />
                Change Name: <input type="text" value={this.state.username} onChange={this.handleChange} />
            </div>
        )
    }
});









ReactDOM.render(
    <HelloUser />,
    //<CommentBox />,
    //<TestClass propT="HI"/>,
    document.getElementById('content')
);