import React, {Component} from 'react';
import {Col, Row, Container} from 'reactstrap';
import {Link} from 'react-router-dom';
import Header from '../header';
import getService from '../../services/getService';
import idGenerator from 'react-id-generator';
import ItemFilter from '../itemFilter';
import ItemSearch from '../itemSearch';

export default class OurCoffe extends Component {
    constructor(props) {
        super(props);
        this.state = {
            newBase: null,
            term: '',
            filter: ''
        };
    }

    componentDidMount(){
        new getService().getResource()
        .then(res => { 
            this.setState( () => {
                return{
                    newBase: res.coffee
                }
            });
        })
    }

    searchItems = (items, term) => {
        if (term.length === 0) {
            return items
        }

        return items.filter((item) => {
            return item.name.toLowerCase().indexOf(term) > -1
        })
    }

    filterItems = (items, filter) => {
        switch (filter){
            case 'Brazil': 
                return items.filter((item) => item.country === 'Brazil');
            case 'Kenya': 
                return items.filter((item) => item.country === 'Kenya');
            case 'Columbia': 
                return items.filter((item) => item.country === 'Columbia');
            default:
                return items
        }
    }
    
    newBase = () => {
        let elements = [];
        if (this.state.newBase) {
            const itemsFilter = this.filterItems(this.searchItems(this.state.newBase, this.state.term), this.state.filter);
            const items = itemsFilter.map((item, index) => {
                return (
                    <Link to={`/coffee/${index}`} className="shop__item" key={idGenerator('coffee')}>
                        <img src={item.url} alt="coffee"/>
                        <div className="shop__item-title">
                            {item.name}
                        </div>
                        <div className="shop__item-country">{item.country}</div>
                        <div className="shop__item-price">{item.price}</div>
                    </Link>
                )
            });
            elements.push(items);
        }
        return elements;
    }

    onUpdateSearch = (term) => {
        this.setState({term})
    }

    onFilterSelect = (filter) => {
        this.setState({filter})
    }

    render() {
        const {filter} = this.state;
        return (
            <>
            <div className="banner">
                <Container>
                    <Header />
                    <h1 className="title-big">Our Coffee</h1>
                </Container>
            </div> 
            <section className="shop">
                <Container>
                    <Row>
                        <Col lg={{size: 4, offset: 2}}>
                            <img className="shop__girl" src="img/coffee_girl.jpg" alt="girl"/>
                        </Col>
                        <Col lg="4">
                            <div className="title">About our beans</div>
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
                        <ItemSearch
                        onUpdateSearch={this.onUpdateSearch}/>
                        <ItemFilter
                        filter={filter}
                        onFilterSelect={this.onFilterSelect}/>
                    </Row>
                    <Row>
                        <Col lg={{size: 10, offset: 1}}>
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