import React from 'react';
import Menu from './menu';
import {shallow} from 'enzyme';

describe('Testing <Menu/>', () => {
    it('Header have rendered correctly', () => {
        const header = shallow(<Menu/>);
        expect(header).toMatchSnapshot();
    })
});