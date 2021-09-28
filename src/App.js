import './App.css';
import React, { Component } from 'react'
import {
    BrowserRouter as Router, 
    Route, 
    Switch,
    NavLink,
} from 'react-router-dom';
import All from './All.js';
import Detail from './Detail.js';

export default class App extends Component {
    
    render() {
        return (
            <div>
                <Router>
                    <header>
                        <h2>Art Gallery</h2>
                        <NavLink exact activeClassName='active-nav' to='/'>Home</NavLink>
                        {/* <NavLink exact activeClassName='active-nav' to='/pokemon'>Search</NavLink> */}
                    </header>
                    <Switch>
                        <Route 
                            path="/" 
                            exact
                            render={(routerProps) => <All {...routerProps} />} 
                        />
                        <Route 
                            path="/art/:id" 
                            exact
                            render={(routerProps) => <Detail {...routerProps} />} 
                        />
                    </Switch>
                </Router>
            </div>
        )
    }
}