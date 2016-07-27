import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, hashHistory} from 'react-router';
import Login from './components/login';
import Signup from './components/signup';
import CardsMain from './components/cardsmain';
import CardSingle from './components/cardssingle';
import AddCard from './components/addcard';


const CardRouter = (
	<Router history={hashHistory}>
		<Route path="/" component={CardsMain}/>
    <Route path="/login" component={Login}/>
    <Route path="/signup" component={Signup}/>
    <Route path="/addcard" component={AddCard}/>
    <Route path="/cat/:id" component={CardSingle}/>
	</Router>
)

ReactDOM.render(CardRouter, document.querySelector('.container'))
