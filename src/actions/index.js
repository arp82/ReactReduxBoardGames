import axios from 'axios';

const PORT = 3007;
const BOARD_GAMES_ENDPOINT = 'boardgames';
const ROOT_URL = `http://localhost:${PORT}`;

export const BOARD_GAME_SELECTED = 'BOARD_GAME_SELECTED';
export const FETCH_BOARD_GAMES = 'FETCH_BOARD_GAMES';
export const POST_BOARD_GAME = 'POST_BOARD_GAME';
export const UPDATE_BOARD_GAME = 'UPDATE_BOARD_GAME';
export const FETCH_BOARD_GAME = 'FETCH_BOARD_GAME';
export const DELETE_BOARD_GAME = 'DELETE_BOARD_GAME';

export function selectBoardGame(boardGame) {
    return {
        type: BOARD_GAME_SELECTED,
        payload: boardGame,
    };
}

export function fetchBoardGames(filterQuery) {
    const url = `${ROOT_URL}/${BOARD_GAMES_ENDPOINT}`;
    const promise = axios.get(url).then((response) => {
        const boardGames = response.data;
        const filteredBoardGames = boardGames.filter(boardGame => {
            return !filterQuery || boardGame.title.toUpperCase().includes(filterQuery.toUpperCase());
        });
        return filteredBoardGames;
    });
    return {
        type: FETCH_BOARD_GAMES,
        payload: promise,
    };
}

export function postBoardGame(boardGame, onSuccessCallback) {
    const url = `${ROOT_URL}/${BOARD_GAMES_ENDPOINT}`;
    const promise = axios.post(url, boardGame).then(onSuccessCallback);

    return {
        type: POST_BOARD_GAME,
        payload: promise,
    };
}

export function updateBoardGame(id, boardGame) {
    const url = `${ROOT_URL}/${BOARD_GAMES_ENDPOINT}/${id}`;
    const promise = axios.put(url, boardGame).then(()=>{
        const updatedBoardGame = boardGame;
        updateBoardGame.id = id;
        return updatedBoardGame;
    });

    return {
        type: UPDATE_BOARD_GAME,
        payload: promise,
    };
}

export function fetchBoardGame(id) {
    const url = `${ROOT_URL}/${BOARD_GAMES_ENDPOINT}/${id}`;
    const promise = axios.get(url);

    return {
        type: FETCH_BOARD_GAME,
        payload: promise,
    };
}

export function deleteBoardGame(id, onSuccessCallback) {
    const url = `${ROOT_URL}/${BOARD_GAMES_ENDPOINT}/${id}`;
    const promise = axios.delete(url).then(() => {
        onSuccessCallback();
        return id;
    });

    return {
        type: DELETE_BOARD_GAME,
        payload: promise,
    };
}