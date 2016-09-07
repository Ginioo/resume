import {EXECUTE_COMMAND} from '../actions/index';

const initState = {
  commands: []
};

export default function(state = initState, action) {
  switch(action.type) {
    case EXECUTE_COMMAND:
      const display = (action.payload.toLowerCase() == 'profile') ? 'block' : 'none';

      return {
        commands: [...state.commands,action.payload],
        show: display
      };

    default:
      return state;
  }
}