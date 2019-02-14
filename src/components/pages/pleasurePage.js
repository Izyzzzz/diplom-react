import React, {Component} from 'react';
import {Col, Row, Container} from 'reactstrap';
import './pages.sass';
import Menu from '../menu';
import getService from '../../services/getService';
import idGenerator from 'react-id-generator';
import Spinner from '../spinner';
export default class Pleasure extends Component {
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
                    newBase: res.goods
                }
            });
        })
    }
    
    newBase = () => {
        let elements = [];
        if (this.state.newBase) {
            const items = this.state.newBase.map((item) => {
                return (
                    <div className="shop__item" key={idGenerator('coffee')}>
                        <img src={item.url} alt="coffee"/>
                        <div className="shop__item-title">
                            {item.name}
                        </div>
                        <div className="shop__item-price">{item.price}</div>
                    </div>
                )
            });
            elements.push(items);
        }
        return elements;
    }

    render() {
        const {newBase} = this.state;        
        const spinner = !newBase ? <Spinner /> : null;
        return (
            <>
            <div className="banner-pleasure">
                <Container>
                    <Row>
                        <Col lg='6'>
                            <header>
                                <Menu
                                prefix={'header'}
                                prefixImg={''}/>
                            </header>
                        </Col>
                    </Row>
                    <h1 className="title-big">For your pleasure</h1>
                </Container>
            </div>
            <section className="shop">
                <Container>
                    <Row>
                        <Col lg={{size: 4, offset: 2}}>
                            <img className="shop__girl" src="img/coffee_cup.jpg" alt="girl"/>
                        </Col>
                        <Col lg="4">
                            <div className="title">About our goods</div>
                            <img className="beanslogo" src="logo/Beans_logo_dark.svg" alt="Beans logo"/>
                            <div className="shop__text">
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
                    <div className="line"></div>
                    <Row>
                        <Col lg={{size: 10, offset: 1}}>
                            {spinner}
                            <div className="shop__wrapper">
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