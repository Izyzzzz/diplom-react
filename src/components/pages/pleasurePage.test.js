import React from 'react';
import PleasurePage from './pleasurePage';
import {shallow} from 'enzyme';

describe('Testing <PleasurePage/>', () => {
    const ourCoffee = shallow(<PleasurePage/>);
    describe('Testing snap & state', () => {
        it('PleasurePage have rendered correctly', () => {        
            expect(ourCoffee).toMatchSnapshot();
        });
        it('PleasurePage state "newBase" is emty object', () => {
            expect(ourCoffee.state().newBase).toBeNil();
        });
        it('PleasurePage state "error" is false', () => {
            expect(ourCoffee.state().error).toBeFalsy();
        });
        it('PleasurePage state "status" is emty object', () => {
            expect(ourCoffee.state().status).toBeNil();
        });
    });
});