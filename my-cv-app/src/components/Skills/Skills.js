import React from 'react';

export default class Skills extends React.Component{
	render(){
		const element = <h1>{this.props.title}</h1>;
		return(
			<div>
			 {element}
			</div>
		)
	}
}