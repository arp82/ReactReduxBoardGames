import {FETCH_BOARD_GAMES} from '../actions/index'

export default function(state = [], action) {
    console.log(action.payload);
    switch(action.type) {
        case FETCH_BOARD_GAMES:
            return action.payload;
            break;
        default:
            return state;
            break;
    }
};