import React from 'react';
import Qualifications from './Qualifications';
import Companies from './Companies';
import Projects from './Projects';
import Educations from './Educations';
import Personal from '../Owner/Personal';

export default class Home extends React.Component{
	render(){
		return(
			<div>
				<h2>
					Full list of Curriculum Vitae.
				</h2>
				<h3>Personal Profile:</h3>
				<Personal />
				<Qualifications />
				<Companies />
				<Projects />
				<Educations />
			</div>
		)
	}
}