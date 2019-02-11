import React, {Component} from 'react';
import {Container} from 'reactstrap';
import Header from '../header';

export default class Contact extends Component {

    render() {
        return (
            <div className="banner">
                <Container>
                    <Header />
                    <h1 className="title-big">Our Coffee</h1>
                </Container>
            </div>
        )
    }
}