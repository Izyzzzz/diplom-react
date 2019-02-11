import React, {Component} from 'react';
import {Col, Row, Container} from 'reactstrap';
import './pages.sass';
import Header from '../header';

export default class Pleasure extends Component {

    render() {
        return (
            <>
            <div class="banner-pleasure">
                <Container>
                    <Header />
                    <h1 class="title-big">For your pleasure</h1>
                </Container>
            </div>
            <section className="shop">
                <Container>
                    <Row>
                        <Col lg={{size: 4, offset: 2}}>
                            <img class="shop__girl" src="img/coffee_cup.jpg" alt="girl"/>
                        </Col>
                        <Col lg="4">
                            <div class="title">About our goods</div>
                            <img class="beanslogo" src="logo/Beans_logo_dark.svg" alt="Beans logo"/>
                            <div class="shop__text">
                                Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.
                                {'\n'}{'\n'}
                                Afraid at highly months do things on at. Situation recommend objection do intention{'\n'}
                                so questions.{'\n'}
                                As greatly removed calling pleased improve an. Last ask him cold feel{'\n'}
                                met spot shy want. Children me laughing we prospect answered followed. At it went{'\n'}
                                is song that held help face.
                            </div>
                        </Col>
                    </Row>
                    <div class="line"></div>
                    <Row>
                        <Col lg={{size: 10, offset: 1}}>
                            <div class="shop__wrapper">
                                <div class="shop__item">
                                    <img src="https://www.sciencenews.org/sites/default/files/main/articles/100315_coffee_opener_NEW_0.jpg" alt="coffee"/>>
                                    <div class="shop__item-title">
                                        Solimo Coffee Beans 2kg
                                    </div>
                                    <div class="shop__item-country">Brazil</div>
                                    <div class="shop__item-price">10.73$</div>
                                </div>
                                <div class="shop__item">
                                    <img src="https://www.sciencenews.org/sites/default/files/main/articles/100315_coffee_opener_NEW_0.jpg" alt="coffee"/>
                                    <div class="shop__item-title">
                                        Presto Coffee Beans 1kg
                                    </div>
                                    <div class="shop__item-country">Brazil</div>
                                    <div class="shop__item-price">15.99$</div>
                                </div>
                                <div class="shop__item">
                                    <img src="https://hhp-blog.s3.amazonaws.com/2018/07/iStock-673468996.jpg" alt="coffee"/>
                                    <div class="shop__item-title">
                                        AROMISTICO Coffee 1kg
                                    </div>
                                    <div class="shop__item-country">Brazil</div>
                                    <div class="shop__item-price">6.99$</div>
                                </div>
                                <div class="shop__item">
                                    <img src="https://www.sciencenews.org/sites/default/files/main/articles/100315_coffee_opener_NEW_0.jpg" alt="coffee"/>
                                    <div class="shop__item-title">
                                        Solimo Coffee Beans 2kg
                                    </div>
                                    <div class="shop__item-country">Brazil</div>
                                    <div class="shop__item-price">10.73$</div>
                                </div>
                                <div class="shop__item">
                                    <img src="https://i0.wp.com/www.healthline.com/hlcmsresource/images/AN_images/AN275-cup-of-coffee-732x549-Thumb.jpg?w=756" alt="coffee"/>
                                    <div class="shop__item-title">
                                        Solimo Coffee Beans 2kg
                                    </div>
                                    <div class="shop__item-country">Brazil</div>
                                    <div class="shop__item-price">10.73$</div>
                                </div>
                                <div class="shop__item">
                                    <img src="https://www.sciencenews.org/sites/default/files/main/articles/100315_coffee_opener_NEW_0.jpg" alt="coffee"/>
                                    <div class="shop__item-title">
                                        Solimo Coffee Beans 2kg
                                    </div>
                                    <div class="shop__item-country">Brazil</div>
                                    <div class="shop__item-price">10.73$</div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
            </>
        )
    }
}