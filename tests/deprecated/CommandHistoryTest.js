import { renderComponent, expect } from '../test_helper';
import CommandHistory from '../../src/components/CommandHistory';

describe('CommandHistory', () => {
  let component;

  beforeEach(() => {
    component = renderComponent(CommandHistory);
  });

  it('has the correct class', () => {
    expect(component).to.have.class('command-history');
  });

  it('has a ul element', () => {
    expect(component.find('span')).to.exist;
  });
});