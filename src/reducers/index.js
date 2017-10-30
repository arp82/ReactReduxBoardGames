import {combineReducers} from 'redux';
import { reducer as formReducer } from "redux-form";
import BoardGamesReducer from './board-games';
import ActiveBoardGameReducer from './active-board-game';

const rootReducer = combineReducers({
    boardGames: BoardGamesReducer,
    activeBoardGame: ActiveBoardGameReducer,
    form: formReducer,
});

export default rootReducer;