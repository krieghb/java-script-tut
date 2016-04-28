/**
 * Created by krido02 on 4/26/2016.
 * 
 * a
 */



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