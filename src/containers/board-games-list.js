import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as ActionCreators from '../actions/index';

class BoardGamesList extends Component {
    renderList() {
        return this.props.boardGames.map((boardGame) => {
            return (
                <li key={boardGame.title}
                    className="list-group-item"
                    onClick={() => this.props.selectBoardGame(boardGame)}>
                    {boardGame.title}
                </li>
            );
        });
    }

    render() {
        return (
            <ul className="list-group col-sm-4">
                {this.renderList()}
            </ul>
        );
    }
}

function mapStateToProps(state) {
    return {
        boardGames: state.boardGames
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({selectBoardGame: ActionCreators.selectBoardGame}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(BoardGamesList);