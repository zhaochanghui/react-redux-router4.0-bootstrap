import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {Navbar, Button} from "react-bootstrap";

// ===首页的展示组件，不负责业务和逻辑，从this.props获取参数   这里暂时没用上
class Home extends Component {
	constructor(props) {
		super(props);
		
	}
	render() {

		console.log('welcome');

		return (
			<div>
				 <Navbar>
       				 <Navbar.Header>
            			<Navbar.Brand>
                			<a href="#">react-app</a>
            			</Navbar.Brand>
        			</Navbar.Header>
    		</Navbar>

			
				<ul>
					<li className='btn btn-defualt'><Link to="/">Home</Link></li>
					<li className='btn btn-defualt'><Link to="/about">about</Link></li>
					<li className='btn btn-defualt'><Link to="/contact">Contact</Link></li>
					<li className='btn btn-defualt'><Link to="/counter">计算器(react-redux例子)</Link></li>
					<li className='btn btn-defualt'><Link to="/redux">redux例子</Link></li>
				</ul>
				{this.props.children}


			</div>
			);
	}
}

export default Home