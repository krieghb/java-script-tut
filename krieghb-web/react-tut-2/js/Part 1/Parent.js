/**
 * Created by krido02 on 4/26/2016.
 * 
 * 
 */

import Child from "./Child";

var Parent = React.createClass({
    render: function() {
        return (
            <div>
                <div> This is the parent. </div>
                <Child name="child"/>
            </div>
        )
    }
});


export default Parent;