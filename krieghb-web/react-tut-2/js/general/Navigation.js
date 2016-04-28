/**
 * Created by krido02 on 4/28/2016.
 * 
 * http://tutorialzine.com/2014/07/5-practical-examples-for-learning-facebooks-react-framework/
 */
var MenuExample = React.createClass({

    getInitialState: function(){
        return { focused: 1 };
    },

    clicked: function(index){

        // The click handler will update the state with
        // the index of the focused menu entry

        this.setState({focused: index});
    },

    render: function() {

        // Here we will read the items property, which was passed
        // as an attribute when the component was created

        var self = this;

        // The map method will loop over the array of menu entries,
        // and will return a new array with <li> elements.

        return (
            <div>
                <ul>{ this.props.items.map(function(m, index){

                    var style = '';

                    if(self.state.focused == index){
                        style = 'focused';
                    }

                    // Notice the use of the bind() method. It makes the
                    // index available to the clicked function:

                    return <li className={style} onClick={self.clicked.bind(self, index)}>{m}</li>;

                }) }

                </ul>

                <p className="paragraphClass">Selected: {this.props.items[this.state.focused]}</p>
            </div>
        );

    }
});

// Render the menu component on the page, and pass an array with menu options

ReactDOM.render(
    <MenuExample items={ ['Home', 'Services', 'About', 'Contact us', 'Custom'] } />,
    document.getElementById('container')
);