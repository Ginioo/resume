import {EXECUTE_COMMAND} from '../actions/index';

const initState = {
    display: "none"
};

export default function (state = initState, action) {
    switch (action.type) {
        case EXECUTE_COMMAND:
            let display = (action.payload && action.payload.toLowerCase() === 'profile') ? 'block' : 'none';

            return {
                display: display
            };

        default:
            return state;
    }
}