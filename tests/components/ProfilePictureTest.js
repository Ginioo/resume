import React from 'react';
import {expect} from 'chai';
import {shallow, mount, render} from 'enzyme';
import ConnectedProfilePicture, {ProfilePicture} from '../../src/components/ProfilePicture';

describe('ProfilePicture', () => {
    let component;

    beforeEach(() => {
        component = mount(<ProfilePicture />);
    });

    describe('img element', () => {
        it('should have a img element', () => {
            expect(component.find('img')).to.have.length(1);
        });

        // it('has a ul element', () => {
        //     // expect(component.find('span')).to.exist;
        // });
    });
});