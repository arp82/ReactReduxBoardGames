export default function (state = null, action) {
    var updatedState = state;
    switch(action.type) {
        case 'BOARD_GAME_SELECTED':
            updatedState = action.payload;
            break;
        default:
    }
    return updatedState;
}