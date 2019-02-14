import React from 'react';
import OurCoffeePage from './ourCoffeePage';
import {shallow} from 'enzyme';

describe('Testing <OurCoffeePage/>', () => {
    const ourCoffee = shallow(<OurCoffeePage/>);
    describe('Testing snap & state', () => {
        it('OurCoffeePage have rendered correctly', () => {        
            expect(ourCoffee).toMatchSnapshot();
        });
        it('OurCoffeePage state "newBase" is emty object', () => {
            expect(ourCoffee.state().newBase).toBeNil();
        });
        it('OurCoffeePage state "term" is true', () => {
            expect(ourCoffee.state().term).toBeString();
        });
        it('OurCoffeePage state "filter" is true', () => {
            expect(ourCoffee.state().filter).toBeString();
        });
        it('OurCoffeePage state "error" is false', () => {
            expect(ourCoffee.state().error).toBeFalsy();
        });
        it('OurCoffeePage state "status" is emty object', () => {
            expect(ourCoffee.state().status).toBeNil();
        });
    });
});