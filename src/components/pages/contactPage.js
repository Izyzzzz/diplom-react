import React, {Component} from 'react';
import {Container} from 'reactstrap';
import Header from '../header';

export default class Contact extends Component {

    render() {
        return (
            <div class="banner">
                <Container>
                    <Header />
                    <h1 class="title-big">Our Coffee</h1>
                </Container>
            </div>
        )
    }
}