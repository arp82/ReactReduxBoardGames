import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {Link} from 'react-router-dom';
import {postBoardGame} from '../actions';
import BoardGameForm from './board-game-form';

class NewBoardGame extends Component {
    saveNewBoardGameInDataBase = (boardGame) => {
        this.props.postBoardGame(boardGame, () =>{
            this.props.history.push('/');
        });
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="vertical-offset pull-xs-right">
                        <Link to="/" className="btn btn-warning">
                            Back to Boardgame Selection
                        </Link>
                    </div>
                </div>
                <div className="row">
                    <BoardGameForm
                        editing="true"
                        onBoardGameSubmitted={this.saveNewBoardGameInDataBase} />
                </div>
            </div>
        );
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({postBoardGame}, dispatch);
}

export default connect(null, mapDispatchToProps)(NewBoardGame);