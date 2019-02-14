import React from 'react';
import ItemFilter from './itemFilter';
import {shallow} from 'enzyme';

describe('Testing <ItemFilter/>', () => {
    const filter = shallow(<ItemFilter/>);
    describe('Testing snap & state', () => {
        it('ItemFilter have rendered correctly', () => {        
            expect(filter).toMatchSnapshot();
        });
        it('ItemFilter state "buttons" is emty object', () => {
            expect(filter.state().buttons).toBeArray();
        });
    });
});
