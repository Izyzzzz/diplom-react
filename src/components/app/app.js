import React, {Component} from 'react';
import {HomePage, OurCoffeePage, PleasurePage, ContactPage, CoffeePage} from '../pages';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {Col, Row, Container} from 'reactstrap';

import './index.sass';
import Menu from '../menu';

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
                        <Route component={NoMatch} />
                    </Switch>
                    <footer>
                        <Container>
                            <Row>
                                <Col lg={{size: 6, offset: 3}}>                   
                                    <Menu
                                    prefix={'footer'}
                                    prefixImg={'_black'}/>
                                </Col>
                            </Row>
                            <img className="beanslogo" src="../logo/Beans_logo_dark.svg" alt="Beans logo"/>
                        </Container>
                    </footer>
                </div>
            </Router>
        );
    }    
};

function NoMatch({ location }) {
    return (
      <div className="d-flex justify-content-center">
          <img className="img-nomatch" src="/img/404.png" alt="error"/>
        <h3 className="title-nomatch">
          No match for <code> - {location.pathname}</code>
        </h3>
        <a href="/" className="button-back d-flex justify-content-center">Back</a>
      </div>
    );
  }