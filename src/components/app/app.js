import React, {Component} from 'react';
import {HomePage, OurCoffeePage, PleasurePage, ContactPage, CoffeePage} from '../pages';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import './index.css';
import Footer from '../footer';

export default class App extends Component {
     
    render() {
        return (
            <Router>
                <div className="app">
                    <Switch>
                        <Route path='/' exact component={HomePage} />
                        <Route path='/ourcoffee' component={OurCoffeePage} />
                        <Route path='/pleasure' component={PleasurePage} />
                        <Route path='/contact' exact component={ContactPage} />
                        <Route path='/:conf/:id' component={CoffeePage}/>
                    </Switch>                    
                    <Footer />
                </div>
            </Router>
        );
    }    
};