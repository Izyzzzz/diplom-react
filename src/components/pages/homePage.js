import React, {Component} from 'react';
import {Col, Row, Container} from 'reactstrap';
import {Link} from 'react-router-dom';
import './pages.sass';
import getService from '../../services/getService';
import idGenerator from 'react-id-generator';
import Menu from '../menu';
import Spinner from '../spinner';
import ErrorMessage from '../errorMessage';

export default class HomePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            newBase: null,
            error: false,
            status: null
        };
    }

    componentDidCatch() {
        this.setState({
            error: true
        })
    }

    componentDidMount(){
        new getService().getResource()
        .then(res => {
            this.setState( () => {
                return{
                    newBase: res
                }
            });
        })
        .catch(this.onError);
    }

    onError = (err) => {
        this.setState({
            error: true,
            status: err.status
        });
    }
    
    newBase = () => {
        if (this.state.newBase) {
            const items = this.state.newBase.coffee.map((item, index) => {
                if (this.state.newBase.bestsellers.some(el => (el.name === item.name))){
                return (                    
                    <Link to={`/coffee/${index}`} className="best__item" key={idGenerator('coffee')}>
                         <img src={item.url} alt="coffee" />
                         <div className="best__item-title">
                            {item.name}
                         </div>
                         <div className="best__item-price">{item.price}</div>
                    </Link>
                )}
                return null;
            });
            return items;
        }
    }
    
    render() {
        const {newBase, error, status} = this.state;
        const errorMessage = error ? <ErrorMessage status={status}/> : null;
        const spinner = (!newBase && !error) ? <Spinner /> : null;  
        if (this.state.error) {
            return <ErrorMessage />
        } 
        return (
            <>
            <div className="preview">
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
                            {errorMessage}
                            {spinner}
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