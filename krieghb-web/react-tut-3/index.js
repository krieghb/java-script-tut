/**
 * Created by krido02 on 5/11/2016.
 */
import React from 'react'
import { render } from 'react-dom'
import HelloClass from './src/js/routing/HelloRouter'
import { Router, Route, hashHistory, IndexRoute } from 'react-router'
import About from './src/js/routing/About'
import Repos from './src/js/routing/Repos'
import Repo from './src/js/routing/Repo'
import Home from './src/js/routing/Home'


// part 1
// render(<App/>, document.getElementById('container'))

// part 2
// render((
//     <Router history={hashHistory}>
//         <Route path="/" component={HelloClass}/>
//         {/*  Adding routes here */}
//         <Route path="/repos" component={Repos} />
//         <Route path="/about" component={About} />
//     </Router>
// ), document.getElementById('container'));


// // Part 3    Nested UI Nav
// render((
//     <Router history={hashHistory}>
//         <Route path="/" component={HelloClass}>
//             {/*  Making repos/about children of HelloClass */}
//             <Route path="/repos" component={Repos} />
//             <Route path="/about" component={About} />
//         </Route>
//     </Router>
// ), document.getElementById('container'));

// // Part 4  URL Params
// render((
//     <Router history={hashHistory}>
//         <Route path="/" component={HelloClass}>
//             {/*  Making repos/about children of HelloClass */}
//             <Route path="/repos" component={Repos} />
//             {/* adding new route */}
//             <Route path="/repos/:userName/:repoName" component={Repo}/>
//             <Route path="/about" component={About} />
//         </Route>
//     </Router>
// ), document.getElementById('container'));



//  Part 5  Index Routes (with Home)
render((
    <Router history={hashHistory}>
        <Route path="/" component={HelloClass}>
            { /* Adding Home to be a child of '/' */ }
            <IndexRoute component={Home}/>
            { /*    
                    Notice how the IndexRoute has no path. It becomes this.props.children of the parent when no other 
                child of the parent matches, or in other words, when the parent's route matches exactly.
                    Index routes can twist people's brains up sometimes. Hopefully it will sink in with a bit more time.
                Just think about a web server that looks for index.html when you're at /. Same idea, React Router looks
                for an index route if a route's path matches exactly. 
            */ }
            
            <Route path="/repos" component={Repos}>
                <Route path="/repos/:userName/:repoName" component={Repo}/>
            </Route>
            
            <Route path="/about" component={About}/>
        </Route>
    </Router>
), document.getElementById('container'));