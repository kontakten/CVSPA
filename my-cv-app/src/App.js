import React from 'react';
import { Link } from 'react-router'
import Home from './components/Pages/Home';

export default class App extends React.Component{
	render(){
		return(
			<div>
		        <ul className="list-inline">
		          <li><Link className="btn btn-default" activeStyle={{ color: 'Green' }} to="/" onlyActiveOnIndex={true}>Home</Link></li>
		          <li><Link className="btn btn-default" activeStyle={{ color: 'Green' }} to="/Qualifications">Qualifications</Link></li>
		          <li><Link className="btn btn-default" activeStyle={{ color: 'Green' }} to="/Companies">Companies</Link></li>
		          <li><Link className="btn btn-default" activeStyle={{ color: 'Green' }} to="/Projects">Projects</Link></li>
		          <li><Link className="btn btn-default" activeStyle={{ color: 'Green' }} to="/Educations">Educations</Link></li>
		        </ul>
			<hr/>
	        {this.props.children || <Home />}
	      </div>
		)
	}
}

