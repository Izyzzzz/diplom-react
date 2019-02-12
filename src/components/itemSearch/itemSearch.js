import React, {Component} from 'react';
import {Col} from 'reactstrap';

export default class ItemFilter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            term: ''
        }
    }
    onUpdateSearch = (e) => {
        const term = e.target.value.toLowerCase();
        this.setState({term});
        this.props.onUpdateSearch(term);
    }
    render() {
        return (
            <Col lg={{size: 4, offset: 2}}>
                <form action="#" className="shop__search">
                    <label className="shop__search-label" htmlFor="filter">Looking for</label>
                    <input 
                        id="filter" 
                        type="text" 
                        placeholder="start typing here..." 
                        className="shop__search-input"
                        onChange={this.onUpdateSearch}
                    />
                </form>
            </Col>
        );
    }
};
