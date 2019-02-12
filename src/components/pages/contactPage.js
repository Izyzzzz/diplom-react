import React, {Component} from 'react';
import {Container, Col, Row, Form, FormGroup, Label, Input } from 'reactstrap';
import Menu from '../menu';

export default class Contact extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: ''
        }
    }

    heandleSubmit = (event) => {
        // event.preventDefault();
        console.log("Submit", this.state.name)
    }

    render() {
        return (
            <>
            <div className="banner">
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
                  <h1 className="title-big">Contact us</h1>
                </Container>
            </div>
            <section className="contact">
                <Container>
                    <Col lg={{size: 4, offset: 4}}>
                        <div className="title">Tell us about your tastes</div>
                        <img className="beanslogo" src="logo/Beans_logo_dark.svg" alt="Beans logo"/>
                    </Col>
                    <Form className="contact__form" onSubmit={this.heandleSubmit}>
                        <FormGroup row >
                          <Label className="contact__form-label" for="exampleName" sm={{size: 2, offset: 3}}>Names<span>*</span></Label>
                          <Col sm={{size: 3, offset: 1}}>
                            <Input className="contact__form-input" type="text" name="name" id="exampleName" />
                          </Col>
                        </FormGroup>
                        <FormGroup row>
                          <Label className="contact__form-label" for="exampleEmail" sm={{size: 2, offset: 3}}>Email<span>*</span></Label>
                          <Col sm={{size: 3, offset: 1}}>
                            <Input className="contact__form-input" type="email" name="email" id="exampleEmail"/>
                          </Col>
                        </FormGroup>
                        <FormGroup row>
                          <Label className="contact__form-label" for="examplePhone" sm={{size: 2, offset: 3}}>Phone</Label>
                          <Col sm={{size: 3, offset: 1}}>
                            <Input className="contact__form-input" type="phone" name="phone" id="examplePhone"  />
                          </Col>
                        </FormGroup>
                        <FormGroup row>                      
                          <Col sm={{size: 4, offset: 4}}>
                            <Label className="contact__form-label" for="exampleText" sm={12}>Your message<span>*</span></Label>
                            <Input className="contact__form-input contact__form-textarea" type="textarea" name="text" id="exampleText" placeholder="Tell us..."/>
                          </Col>
                        </FormGroup>
                        <FormGroup check row>
                          <Col sm={{size: 2, offset: 5}}>
                            <button>Send us</button>
                          </Col>
                        </FormGroup>
                    </Form>
                </Container>
            </section>
          </>
        )
    }
}