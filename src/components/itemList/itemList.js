import React, {Component} from 'react';
import getService from '../../services/getService';
export default class ItemList extends Component {

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
                    newBase: res
                }
            });
        })
    }
    
    newBase = () => {
        let elements = [];
        if (this.state.newBase) {
            const items = this.state.newBase.bestsellers.map((item) => {
                return (
                    <div className="best__item" key={item.name}>
                         <img src={item.url} alt="coffee" />
                         <div className="best__item-title">
                            {item.name}
                         </div>
                         <div className="shop__item-country">{item.country}</div>
                         <div className="best__item-price">{item.price}</div>
                    </div>
                )
            });
            elements.push(items);
        }
        return elements;
    }

    render() {
        return (
            <div className="best__wrapper">   
                {this.newBase()}
            </div>
        );
    }
}