import {EXECUTE_COMMAND} from '../actions/index';

const initState = {
  commands: []
};

export default function(state = initState, action) {
  switch(action.type) {
    case EXECUTE_COMMAND:
      const display = (action.payload.toLowerCase() == 'profile') ? 'block' : 'none';

      if (state.commands.indexOf(action.payload.toLowerCase()) != -1) {
        return {
          commands: [...state.commands, action.payload],
          show: display
        };
      }

      return {
        commands: state.commands,
        show: display
      };

    default:
      return state;
  }
}