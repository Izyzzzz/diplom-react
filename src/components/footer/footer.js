import React from 'react';
import './footer.sass';
import {Link} from 'react-router-dom';
import {Col, Row, Container} from 'reactstrap';

const Footer = () => {
    return (
        <footer>
            <Container>
                <Row>
                    <Col lg={{size: 6, offset: 3}}>
                        <ul className="footer">
                            <li className="footer__item">
                                <Link to='/'>
                                    <img src="../logo/Logo_black.svg" alt="logo"/>
                                </Link>
                            </li>
                            <li className="footer__item">
                                <Link to='/ourcoffee'>Our coffee</Link>
                            </li>
                            <li className="footer__item">
                                <Link to='/pleasure'>For your pleasure</Link>
                            </li>
                            <li className="footer__item">
                                <Link to='/contact'>Contact us</Link>
                            </li>
                        </ul>
                    </Col>
                </Row>
                <img className="beanslogo" src="../logo/Beans_logo_dark.svg" alt="Beans logo"/>
            </Container>
        </footer>
    );
};

export default Footer;