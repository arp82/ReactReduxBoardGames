import axios from 'axios';

const PORT = 3007;
const GET_BOARD_GAMES_ENDPOINT = 'boardgames';
const ROOT_URL = `http://localhost:${PORT}`;

export const BOARD_GAME_SELECTED = 'BOARD_GAME_SELECTED';
export const FETCH_BOARD_GAMES = 'FETCH_BOARD_GAMES';

export function selectBoardGame(boardGame) {
    return {
        type: BOARD_GAME_SELECTED,
        payload: boardGame
    };
}

export function fetchBoardGames(filterQuery) {
    const url = `${ROOT_URL}/${GET_BOARD_GAMES_ENDPOINT}`;
    const promise = axios.get(url).then((response) => {
        const boardGames = response.data;
        const filteredBoardGames = boardGames.filter(boardGame => {
            return !filterQuery || boardGame.title.toUpperCase().includes(filterQuery.toUpperCase());
        });
        return filteredBoardGames;
    });
    return {
        type: FETCH_BOARD_GAMES,
        payload: promise
    };
}