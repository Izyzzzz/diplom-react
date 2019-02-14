import React, {Component} from 'react';
import {Container, Col, Row, Form, FormGroup, Label, Input, Button } from 'reactstrap';
import Menu from '../menu';
import InputMask from 'react-input-mask';
import Spinner from '../spinner';
import ErrorMessage from '../errorMessage';

export default class Contact extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            phone: '',
            text: '',
            redInput: '',
            textInput: '',
            isEdit: true,
            loading: false,
            error: false,
            status: null
        }
    }

    componentDidCatch() {
      this.setState({
          error: true
      })
    }

    heandleSubmit = (event) => {
        event.preventDefault();
        if(this.state.name.length < 2 || this.state.name.length > 20) {
          this.setState ({
            redInput: 'contact__form-input-red'
          })
        } else { if (this.state.text.length === 0) {
          this.setState ({
            redInput: '',
            textInput: 'contact__form-input-red'
          })
        } else {
          this.setState ({
            loading: true
          })
          let uploadOb  = {name: this.state.name,
                          email: this.state.email,
                          phone: this.state.phone,
                          text: this.state.text};
          this.postResource("http://localhost:3001/cosntacts", uploadOb)
              .then(this.setState ({            
                textInput: '',
                isEdit: false,
                loading: false
              }))
              .catch(this.onError);
        }}
    }
    onError = (err) => {
      this.setState({
          error: true,
          status: err.status
      });
    }
    handleNameChange = (e) =>{
      this.setState({name: e.target.value});
    }
    handleEmailChange = (e) =>{
      this.setState({email: e.target.value});
    }
    handlePhoneChange = (e) =>{
      this.setState({phone: e.target.value});
    }
    handleTextChange = (e) =>{
      this.setState({text: e.target.value});
    }
    postResource = async (url, body) => {
      const res = await fetch(url,
      {
          method: 'POST',
          body: JSON.stringify(body),
          headers: {
              'Content-Type': 'application/json'
          }
        
      });

      if (!res.ok) {
          throw new Error(`status: ${res.status}`)
      }
      return await res.json();
    
    }
    onThank = () => {
        this.setState({
            isEdit: !this.state.isEdit,
        });
    }

    render() {
      const {redInput, textInput, isEdit, loading, error, status} = this.state;      
      const errorMessage = error ? <ErrorMessage status={status}/> : null;
        const spinner = (loading && !error) ? <Spinner /> : null;
      if (this.state.error) {
        return <ErrorMessage />
      }
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
                    {isEdit ?
                    <Form className="contact__form" onSubmit={this.heandleSubmit}>
                        <FormGroup row >
                          <Label className="contact__form-label" for="exampleName" sm={{size: 2, offset: 3}}>Names<span>*</span></Label>
                          <Col sm={{size: 3, offset: 1}}>
                            <Input
                              required 
                              className={`contact__form-input ${redInput}`}
                              type="text" 
                              name="name" 
                              id="exampleName"
                              onChange={this.handleNameChange}/>
                          </Col>
                        </FormGroup>
                        <FormGroup row>
                          <Label className="contact__form-label" for="exampleEmail" sm={{size: 2, offset: 3}}>Email<span>*</span></Label>
                          <Col sm={{size: 3, offset: 1}}>
                            <Input
                              required 
                              className="contact__form-input" 
                              type="email" 
                              name="email" 
                              id="exampleEmail"
                              onChange={this.handleEmailChange}/>
                          </Col>
                        </FormGroup>
                        <FormGroup row>
                          <Label className="contact__form-label" for="examplePhone" sm={{size: 2, offset: 3}}>Phone</Label>
                          <Col sm={{size: 3, offset: 1}}>
                            <InputMask
                              mask="+7 (999) 999-99-99"
                              className="contact__form-input" 
                              type="phone" 
                              name="phone" 
                              id="examplePhone"
                              placeholder="+7 (___) ___-__-__"
                              onChange={this.handlePhoneChange}/>
                          </Col>
                        </FormGroup>
                        <FormGroup row>                      
                          <Col sm={{size: 4, offset: 4}}>
                            <Label className="contact__form-label" for="exampleText" sm={12}>Your message<span>*</span></Label>
                            <Input 
                              required
                              className={`contact__form-input contact__form-textarea ${textInput}`}
                              type="textarea" 
                              name="text" 
                              id="exampleText" 
                              placeholder="Tell us..."
                              onChange={this.handleTextChange}/>
                          </Col>
                        </FormGroup>
                        <FormGroup check row>
                          <Col sm={{size: 2, offset: 5}}>
                            <Button id="btnSubmin" outline color="secondary">Send us</Button>
                            {errorMessage}
                            {spinner}
                          </Col>
                        </FormGroup>
                    </Form>                
                  :
                  <Container>
                    <Row>
                      <Col sm={{size: 8, offset: 2}}>
                        <div className="title-thank">Thank you so much{'\n'}{'\n'} We contact you as soon as posible</div>
                        <div className="contact-img">
                          <img src="img/group.png" alt="group"/>
                        </div>
                        <Row>
                          <Col sm={{size: 2, offset: 5}}>
                            <button className="btnAnother" onClick={this.onThank}>Another ? <img src="img/back-arrow.png" alt="group"/></button>
                          </Col>
                        </Row>
                      </Col>
                    </Row>
                  </Container>}
                </Container>
            </section>
          </>
        )
    }
}