import {EXECUTE_COMMAND} from '../actions/index';

const initState = {
    commands: []
};

export default function (state = initState, action) {
    switch (action.type) {
        case EXECUTE_COMMAND:
            return {
                commands: [...state.commands, action.payload]
            };

        default:
            return {
                commands: [...state.commands]
            };
    }
}