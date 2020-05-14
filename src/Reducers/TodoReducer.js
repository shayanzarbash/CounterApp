import { ADD, EDIT, REMOVE } from './actionTypes';

let init = [];

export default (state = init, action) => {
    switch (action.type) {
        case ADD:
        case EDIT:
        case REMOVE:

        default:
            return state;
    }
}