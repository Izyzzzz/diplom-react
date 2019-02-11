import React from 'react';
import './header.sass';
import {Link} from 'react-router-dom';
import {Col, Row} from 'reactstrap';

const Header = () => {
    return (
        <Row>
            <Col lg='6'>
                <header>
                    <ul className="header">
                        <li className="header__item">
                            <Link to='/'>
                                <img src="logo/Logo.svg" alt="logo"/>
                            </Link>
                        </li>
                        <li className="header__item">
                            <Link to='/ourcoffee'>Our coffee</Link>
                        </li>
                        <li className="header__item">
                            <Link to='/pleasure'>For your pleasure</Link>
                        </li>
                        <li className="header__item">
                            <Link to='/contact'>Contact us</Link>
                        </li>
                    </ul>
                </header>
           </Col>
        </Row>
    );
};

export default Header;