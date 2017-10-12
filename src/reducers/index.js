import {combineReducers} from 'redux';
import BoardGamesReducer from './board-games';
import ActiveBoardGame from './active-board-game';

const rootReducer = combineReducers({
    boardGames: BoardGamesReducer,
    activeBoardGame: ActiveBoardGame
});

export default rootReducer;