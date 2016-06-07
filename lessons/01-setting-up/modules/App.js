import React from 'react'
import NavLink from './NavLink'
import Home from './Home'
import { IndexLink } from 'react-router'

export default React.createClass({
    render() {
        // return (
            // <div>{this.props.children || <Home/>}</div>
        // )
        return (
            <div style={{ backgroundColor: 'lightgrey' }}>
                <h1>React Router Tutorial</h1>
                <ul role="nav">
                    <li>
                        <NavLink to="/" onlyActiveOnIndex={true}>Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/about">About</NavLink>
                    </li>
                    <li>
                        <NavLink to="/repos">Repos</NavLink>
                    </li>
                </ul>
                {this.props.children}
            </div>
        )
    }
})


/*

<IndexLink to="/" activeClassName="active">Home</IndexLink>
can also be
<Link to="/" activeClassName="active" onlyActiveOnIndex={true}>Home</Link>
but we're using spread (like this: <Link {...this.props} > ...etc)
so we can do it the above way

*/