import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import {Navbar, Button} from "react-bootstrap";


import Home from './page/home';
import About from './page/about';
import ReduxTest from "./components/reduxtest/ReactAndRedux";
import CounterReactRedux from "./components/counter/CounterReactRedux";



const BasicExample = () => (
    <Router>
		<div>
            <Navbar>
                <Navbar.Header>
                    <Navbar.Brand>
                        <a href="#">react-app</a>
                    </Navbar.Brand>
                </Navbar.Header>
            </Navbar>

            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/topics">Topics</Link></li>
                <li><Link to="/redux">redux例子</Link></li>
                <li><Link to="/react-redux">react-redux例子</Link></li>
            </ul>

            <hr/>

            <Route exact path="/" component={Home}/>
            <Route path="/about" component={About}/>
            <Route path="/topics" component={Topics}/>
			<Route path="/redux"  component={ReduxTest} />
			<Route path="/react-redux" component={CounterReactRedux} />
        </div>
    </Router>
)





const Topics = ({ match }) => (
    <div>
        <h2>Topics</h2>
        <ul>
            <li>
                <Link to={`${match.url}/rendering`}>
                    Rendering with React
                </Link>
            </li>
            <li>
                <Link to={`${match.url}/components`}>
                    Components
                </Link>
            </li>
            <li>
                <Link to={`${match.url}/props-v-state`}>
                    Props v. State
                </Link>
            </li>
        </ul>

        <Route path={`${match.url}/:topicId`} component={Topic}/>
        <Route exact path={match.url} render={() => (
            <h3>Please select a topic.</h3>
        )}/>
    </div>
)



const Topic = ({ match }) => (
    <div>
        <h3>{match.params.topicId}</h3>
    </div>
)

export default BasicExample