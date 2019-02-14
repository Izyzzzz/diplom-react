import React from 'react';
import ItemSearch from './itemSearch';
import {shallow} from 'enzyme';

describe('Testing <ItemSearch/>', () => {
    const search = shallow(<ItemSearch/>);
    describe('Testing snap & state', () => {
        it('ItemFilter have rendered correctly', () => {        
            expect(search).toMatchSnapshot();
        });
        it('ItemFilter state "term" is emty object', () => {
            expect(search.state().term).toBeString();
        });
    });
});
