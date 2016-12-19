import React from 'react';

export default class Skills extends React.Component{

	render(){
		const skills = [
		  {key: 0, title: 'PHP', content: 'Programming language', level: 'Medium'},
		  {key: 1, title: 'Smarty', content: 'Template engine for php', level: 'High'},
		  {key: 2, title: 'HTML5', content: 'Frontend' ,level: 'High'},
		  {key: 3, title: 'CSS', content: 'Used for styling of site', level: 'High'},
		  {key: 4, title: 'SCSS', content: 'Advanced styling for responsive use : ulgify/minify', level: 'High'},
		  {key: 5, title: 'Javascript', content: 'Programming language', level: 'Medium'},
		  {key: 6, title: 'C#', content: 'Programming language', level: 'Medium'},
		  {key: 7, title: 'C++', content: 'Programming language', level: 'low'}
		];


		return(
			<div>
				<span><strong>{skills[this.props.value].title}</strong></span>
				<p>{skills[this.props.value].content}</p>	
			</div>
		)
	}
}

