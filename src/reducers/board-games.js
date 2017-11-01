import {FETCH_BOARD_GAMES, FETCH_BOARD_GAME, DELETE_BOARD_GAME, UPDATE_BOARD_GAME} from '../actions/index';
import _ from 'lodash';

export default function(state = {}, action) {
    switch(action.type) {
        case FETCH_BOARD_GAMES:
            return _.mapKeys(action.payload, 'id');
            break;
        case FETCH_BOARD_GAME:
            return {...state, [action.payload.data.id]: action.payload.data};
            break;
        case DELETE_BOARD_GAME:
            return _.omit(state, action.payload);
            break;
        case UPDATE_BOARD_GAME:
            return {...state, [action.payload.id]: action.payload};
            break;
        default:
            return state;
            break;
    }
};