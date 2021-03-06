import React, {Component} from 'react';
import './errorMessage.sass';
import img404 from './404.png';
import img408 from './408.jpg';
import img410 from './410.jpg';
import imgError from './error.png';

export default class ErrorMessage extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            img: null
        }
    }

    render() {
        const {status} =this.props;
        switch(status){
            case 404:
                this.img =  img404;
            break;
            case 408:
                this.img =  img408;
            break;
            case 410:
                this.img =  img410;
            break;
            default:
                this.img =  imgError;
                
        }
        return (
            <>
                <img className="img-error d-flex" src={this.img} alt='error'></img>
            </>
        )
    }
    
}