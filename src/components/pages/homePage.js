import React, {Component} from 'react';
import {Col, Row, Container} from 'reactstrap';
import {Link} from 'react-router-dom';
import './pages.sass';
import Header from '../header';

export default class HomePage extends Component {

    render() {
        return (
            <>
            <div className="preview">
               <Container>
                    <Header />
                    <Row className="row">
                        <Col lg={{size: 10, offset: 1}}>
                            <h1 className="title-big">Everything You Love About Coffee</h1>
                             <img className="beanslogo" src="logo/Beans_logo.svg" alt="Beans logo"/>
                             <div className="preview__subtitle">We makes every day full of energy and taste</div>
                             <div className="preview__subtitle">Want to try our beans?</div>
                             <Link to='/ourcoffee' className="preview__btn">More</Link>
                        </Col>
                    </Row>                    
                </Container>                
            </div>
            <section className="about">
                <Container>
                    <Row>
                        <Col lg={{size: 6, offset: 3}}>
                            <div className="title">About Us</div>
                            <img className="beanslogo" src="logo/Beans_logo_dark.svg" alt="Beans logo"/>
                            <div className="about__text">
                                Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.
                                Afraid at highly months do things on at. Situation recommend objection do intention
                                so questions. As greatly removed calling pleased improve an. Last ask him cold feel
                                met spot shy want. Children me laughing we prospect answered followed. At it went
                                is song that held help face.
                                {'\n'}
                                {'\n'}
                                Now residence dashwoods she excellent you. Shade being under his bed her, Much
                                read on as draw. Blessing for ignorant exercise any yourself unpacked. Pleasant
                                horrible but confined day end marriage. Eagerness furniture set preserved far
                                recommend. Did even but nor are most gave hope. Secure active living depend son
                                repair day ladies now.
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
            <section class="best">
                <Container>
                    <div class="title">Our best</div>
                    <Row>
                        <Col lg={{size: 10, offset: 1}}>
                            <div class="best__wrapper">
                                <div class="best__item">
                                    <img src="https://www.sciencenews.org/sites/default/files/main/articles/100315_coffee_opener_NEW_0.jpg" alt="coffee" />
                                    <div class="best__item-title">
                                        Solimo Coffee Beans 2kg
                                    </div>
                                    <div class="best__item-price">10.73$</div>
                                </div>
                                <div class="best__item">
                                    <img src="https://www.sciencenews.org/sites/default/files/main/articles/100315_coffee_opener_NEW_0.jpg" alt="coffee"/>
                                    <div class="best__item-title">
                                        Presto Coffee Beans 1kg
                                    </div>
                                    <div class="best__item-price">15.99$</div>
                                </div>
                                <div class="best__item">
                                    <img src="https://www.sciencenews.org/sites/default/files/main/articles/100315_coffee_opener_NEW_0.jpg" alt="coffee"/>
                                    <div class="best__item-title">
                                        AROMISTICO Coffee 1kg
                                    </div>
                                    <div class="best__item-price">6.99$</div>
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