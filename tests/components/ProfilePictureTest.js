import React from 'react';
import {expect} from 'chai';
import {shallow, mount, render} from 'enzyme';
import ConnectedProfilePicture, {ProfilePicture} from '../../src/components/ProfilePicture';

describe('Component: ProfilePicture', () => {
    let component;

    before(() => {
        component = mount(
            <ProfilePicture
                name="Gino Wu"
                title="Web Developer"
                src="https://avatars0.githubusercontent.com/u/9994905?v=3&s=460"
            />
        );
    });

    describe('div element', () => {
        it('should have a div element', () => {
            expect(component.find('div')).to.have.length(4);
        });

        it('should have a correct css class', () => {
            expect(component.find('div.profile-picture').length).to.equal(1);
        });

        describe('img element', () => {
            it('should have a img element', () => {
                expect(component.find('div > img')).to.have.length(1);
            });

            it('should have property src', () => {
                expect(component.find('div > img').props().src).to.equal("https://avatars0.githubusercontent.com/u/9994905?v=3&s=460");
            });

            it('should have property name', () => {
                expect(component.find('div h3').text()).to.equal("Gino Wu");
            });
        });
    });
});