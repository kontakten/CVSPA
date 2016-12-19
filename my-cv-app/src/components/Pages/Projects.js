import React from 'react';
import { Link } from 'react-router';

export default class Projects extends React.Component{
	render(){
		return(
			<div className="container">
				<h2>
					Projects:
				</h2>
				<div className="row">
					<div className="col-xs-12 col-sm-12 col-md-12 text-center">
						<ul className="list-inline">
							<li><Link className="btn btn-link btn-block" activeStyle={{ color: 'Gray' }} to="/Projects/Fluer">Fluer</Link></li>
							<li><Link className="btn btn-link btn-block" activeStyle={{ color: 'Gray' }} to="/Projects/Hjem">Hjem</Link></li>
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
