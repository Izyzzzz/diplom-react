import React, {Component} from 'react';
import {Col} from 'reactstrap';

export default class ItemFilter extends Component {
    constructor(props){
        super(props);
        this.buttons = [
            {name: 'Brazil', label: 'Brazil'},
            {name: 'Kenya', label: 'Kenya'},
            {name: 'Columbia', label: 'Columbia'}
        ]
    }
    render() {
        const buttons = this.buttons.map(({name, label}) => {
            const active = this.props.filter === name;
            const clazz = active ? 'shop__filter-btn-active' : ''
            return (
                <button 
                    key={name} 
                    className={`shop__filter-btn ${clazz}`}
                    onClick={()=> this.props.onFilterSelect(name)}>{label}</button>
            )
        })
        return (
            <Col lg="4">
                <div className="shop__filter">
                    <div className="shop__filter-label">
                        Or filter
                    </div>
                    <div className="shop__filter-group">
                        {buttons}
                    </div>
                </div>
            </Col>
        );
    }
};
