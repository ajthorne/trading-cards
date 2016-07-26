import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router';


const CardRouter = (
	<Router history={hashHistory}>
		<Route path="/login" component={Login}/>
	</Router>
)


ReactDOM.render(CardRouter, document.querySelector('container'))
