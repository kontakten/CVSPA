import React from 'react';
import { Router, Route, hashHistory, IndexRoute } from 'react-router'
import ReactDOM from 'react-dom';
import Header from './components/Sections/Header';
import App from './App';
import Qualifications from './components/Pages/Qualifications';
import Companies from './components/Pages/Companies';
import Home from './components/Pages/Home';
import Projects from './components/Pages/Projects';
import Educations from './components/Pages/Educations';
import Atriumweb from './components/Pages/Companies/Atriumweb';
import Smartweb from './components/Pages/Companies/Smartweb';
import Fatiguedbox from './components/Pages/Companies/Fatiguedbox';

ReactDOM.render(<Header/>, document.getElementById('root'));

ReactDOM.render((
  <Router history={hashHistory}>
  	<Route path="/" component={App} >
  		<IndexRoute component={Home}/>
  		<Route path="qualifications" component={Qualifications} />
  		<Route path="companies" component={Companies}>
  			<Route path="atriumweb" component={Atriumweb} />
  			<Route path="smartweb" component={Smartweb} />
        <Route path="fatiguedbox" component={Fatiguedbox} />
  		</Route>
  		<Route path="projects" component={Projects} />
  		<Route path="educations" component={Educations} />
  	</Route>
  </Router>
  ),document.getElementById('links'));
