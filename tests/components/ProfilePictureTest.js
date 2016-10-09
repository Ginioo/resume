import React from 'react';
import {expect} from 'chai';
import {shallow, mount, render} from 'enzyme';
import ConnectedProfilePicture, {ProfilePicture} from '../../src/components/ProfilePicture';

describe('Component: ProfilePicture', () => {
    let component;

    beforeEach(() => {
        component = mount(<ProfilePicture />);
    });

    describe('div element', () => {
        it('should have a div element', () => {
            expect(component.find('div')).to.have.length(1);
        });

        it('should have a correct css class', () => {
            expect(component.find('div.profile-picture').length).to.equal(1);
        });

        describe('img element', () => {
            it('should have a img element', () => {
                expect(component.find('div > img')).to.have.length(1);
            });

            it('should have property src', () => {
                expect(component.find('div > img').props().href).to.equal("");
            });
        });
    });
});