import { renderComponent, expect } from '../test_helper';
import CommandBox from '../../src/components/CommandBox';

describe('CommandBox', () => {
  let component;

  beforeEach(() => {
    component = renderComponent(CommandBox);
  });

  it('has the correct class', () => {
    expect(component).to.have.class('command-box');
  });

  it('has a input field', () => {
    expect(component.find('input')).to.exist;
  });

  it('has a span', () => {
    expect(component.find('span')).to.exist;
  });

  describe('entering some text', () => {
    beforeEach(() => {
      component.find('input').simulate('change', 'profile');
    });

    it('shows text that in the input field', () => {
      expect(component.find('input')).to.have.value('profile');
    });

    // it('when submitted, clears the input', () => {
    //   component.simulate('submit');
    //   expect(component.find('input')).to.have.value('');
    // });
  });
});