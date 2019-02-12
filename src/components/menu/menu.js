import React, {Component} from 'react';
import './menu.sass';
import {Link} from 'react-router-dom';


export default class Menu extends Component {
    render() {
        const {prefix, prefixImg} = this.props;
        return (
            <ul className={prefix}>
                <li className={`${prefix}__item`}>
                    <Link to='/'>
                        <img src={`../logo/Logo${prefixImg}.svg`} alt="logo"/>
                    </Link>
                </li>
                <li className={`${prefix}__item`}>
                    <Link to='/ourcoffee'>Our coffee</Link>
                </li>
                <li className={`${prefix}__item`}>
                    <Link to='/pleasure'>For your pleasure</Link>
                </li>
                <li className={`${prefix}__item`}>
                    <Link to='/contact'>Contact us</Link>
                </li>
            </ul>
        );
    }
};