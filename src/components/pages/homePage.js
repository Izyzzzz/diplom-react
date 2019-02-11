import React, {Component} from 'react';
import {Col, Row, Container} from 'reactstrap';
import {Link} from 'react-router-dom';
import './pages.sass';
import Header from '../header';
import getService from '../../services/getService';
import idGenerator from 'react-id-generator';

export default class HomePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            newBase: null
        };
    }

    componentDidMount(){
        new getService().getResource()
        .then(res => {
            this.setState( () => {
                return{
                    newBase: res.bestsellers
                }
            });
        })
    }
    
    newBase = () => {
        let elements = [];
        if (this.state.newBase) {
            const items = this.state.newBase.map((item, index) => {
                return (                    
                    <Link to={`/bestsellers/${index}`} className="best__item" key={idGenerator('coffee')}>
                         <img src={item.url} alt="coffee" />
                         <div className="best__item-title">
                            {item.name}
                         </div>
                         <div className="best__item-price">{item.price}</div>
                    </Link>
                )
            });
            elements.push(items);
        }
        return elements;
    }
    
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
            <section className="best">
                <Container>
                    <div className="title">Our best</div>
                    <Row>
                        <Col lg={{size: 10, offset: 1}}>
                            <div className="best__wrapper">
                                {this.newBase()}
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
           </>
        )
    }
}