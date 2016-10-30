import React from 'react';
import {expect} from 'chai';
import {shallow, mount, render} from 'enzyme';
import ConnectedMailButton, {MailButton} from '../../src/components/MailButton';

describe('Component: MailButton', () => {
    let component;

    before(() => {
        component = mount(<MailButton />);
    });

    describe('div element', () => {
        it('should have a div element', () => {
            expect(component.find('div')).to.have.length(2);
        });

        it('should have a correct css class', () => {
            expect(component.find('div.mail-box').length).to.equal(1);
        });

        describe('span element', () => {
            it('should have a span element', () => {
                expect(component.find('a > span')).to.have.length(2);
            });

            it('should have a correct css class', () => {
                expect(component.find('a > span.glyphicon.glyphicon-envelope').length).to.equal(1);
            });
        });
    });
});