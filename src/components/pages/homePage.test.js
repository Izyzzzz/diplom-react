import React from 'react';
import HomePage from './homePage';
import {shallow} from 'enzyme';

describe('Testing <HomePage/>', () => {
    const home = shallow(<HomePage/>);
    describe('Testing snap & state', () => {
        it('HomePage have rendered correctly', () => {        
            expect(home).toMatchSnapshot();
        });
        it('HomePage state "newBase" is emty object', () => {
            expect(home.state().newBase).toBeNil();
        });
        it('HomePage state "status" is true', () => {
            expect(home.state().status).toBeNil();
        });
        it('HomePage state "error" is false', () => {
            expect(home.state().error).toBeFalsy();
        });
    });
    describe('Handlers tests', () => {
        it('testing componentDidCatch', () => {
            home.instance().componentDidCatch();
            expect(home.state().error).toBeTruthy();
        });
    });
});