import React from 'react';
import { Link } from 'react-router'

export default class Companies extends React.Component{
	render(){
		return(
			<div className="container">
				<h2>
					Companies that i've worked with:
				</h2>
				<div className="row">
					<div className="col-xs-12 col-sm-12 col-md-12 text-center">
						<ul className="list-inline">
							<li><Link className="btn btn-link btn-block" activeStyle={{ color: 'Gray' }} to="/Companies/Atriumweb">Atriumweb</Link></li>
							<li><Link className="btn btn-link btn-block" activeStyle={{ color: 'Gray' }} to="/Companies/Smartweb">Smartweb</Link></li>
							<li><Link className="btn btn-link btn-block" activeStyle={{ color: 'Gray' }} to="/Companies/Fatiguedbox">Fatiguedbox</Link></li>
						</ul>
					</div>
					<div className="col-xs-12 col-sm-12 col-md-12 text-center">
						{this.props.children}
					</div>
				</div>
				
			</div>
		)
	}
}