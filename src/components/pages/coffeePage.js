import React, {Component} from 'react';
import {Row, Col, Container} from 'reactstrap';
import Header from '../header';
import getService from '../../services/getService';

import './pages.sass';

export default class CoffeItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            newBase: null,
            maxlength: 200
        };
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
    }
    truncateNo = (maxlength) => {
        this.setState({maxlength})
    }
    truncate(str, maxlength) {
        return (str.length > maxlength) ?
          str.slice(0, maxlength - 3) + '...' : str;
      }
    render() {
        const {maxlength} = this.state;
        const {id, conf} = this.props.match.params;
        let item = null;
        if( this.state.newBase && this.state.newBase[conf] && this.state.newBase[conf][id]) {
            item = this.state.newBase[conf][id]
        }
        return (
            <>
            <div className="banner">
                <Container>
                    <Header />
                    <h1 className="title-big">{item ? item.name : ''}</h1>
                </Container>
            </div>
            <section className="shop">
                <Container>
                    <Row>
                        <Col lg={{size: 5, offset: 1}}>
                            <img className="shop__girl" src={item ? item.url : ''} alt="coffee_item"/>
                        </Col>
                        <Col lg="4">
                            <div className="title">About it</div>
                            <img className="beanslogo" src="/logo/Beans_logo_dark.svg" alt="Beans logo"/>
                            <div className="shop__point">
                                <span>Country:</span>
                                {item ? item.country : ''}
                            </div>
                            <div onClick={() => this.truncateNo(item.description.length)} className="shop__point">
                                <span>Description:</span>
                                {item ? this.truncate(item.description, maxlength) : ''}
                            </div>
                            <div className="shop__point">
                                <span>Price:</span>
                                <span className="shop__point-price">{item ? item.price : ''}</span>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>             
            </>           
        )
    }
}