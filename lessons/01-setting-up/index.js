// import React from 'react'
// import { render } from 'react-dom'
// import App from './modules/App'

// // import { Router, Route, hashHistory, IndexRoute } from 'react-router'
// import { Router, Route, browserHistory, IndexRoute } from 'react-router'
// import About from './modules/About'
// import Repos from './modules/Repos'
// import Repo from './modules/Repo'
// import Home from './modules/Home'


// // IndexRoute becomes this.props.children of the parent when no other child of the parent matches, or in other words, when the parent's route matches exactly

// render((
//     <Router history={browserHistory}>
//         <Route path="/" component={App}>
//             <IndexRoute component={Home} />
//             <Route path="/about" component={About} />
//             <Route path="/repos" component={Repos}>
//                 <Route path="/repos/:userName/:repoName" component={Repo} />
//             </Route>
//         </Route>
//     </Router>
// ), document.getElementById('app'))


// ^before server
// after server: 

import React from 'react'
import { render } from 'react-dom'
import { Router, browserHistory } from 'react-router'
// import routes and pass them into <Router/>
import routes from './modules/routes'

render(
  <Router routes={routes} history={browserHistory}/>,
  document.getElementById('app')
)