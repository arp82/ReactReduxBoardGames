import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {Link} from 'react-router-dom';
import {fetchBoardGame, updateBoardGame, deleteBoardGame} from '../actions';
import BoardGameOwnerAndStats from '../components/board-game-owner-and-stats';
import BoardGameForm from './board-game-form';

class BoardGame extends Component {
    constructor(props) {
        super(props);
        this.state = {
            editing: false,
        };
    }

    componentDidMount() {
        const {id} = this.props.match.params;
        if (!this.props.boardGame) {
            this.props.fetchBoardGame(id);
        }
    }

    getBoardGameFormInitialValues(boardGame) {
        return {
            title: boardGame.title,
            players: boardGame.players,
            imageurl: boardGame.imageUrl,
            ratings: boardGame.stats[0].ratings.toString(),
            winLossTieRatio: boardGame.stats[1].winLossTieRatio.toString().replace(/,/g,'-'),
            owner: boardGame.owner.name,
            location: boardGame.owner.location.name,
            latitude: boardGame.owner.location.lat,
            longitude: boardGame.owner.location.lon,
        }
    }

    saveBoardGameChangesInDataBase = (boardGame) => {
        const {id} = this.props.match.params;
        this.props.updateBoardGame(id, boardGame);
    }

    deleteBoardGame = () => {
        const {id} = this.props.match.params;
        this.props.deleteBoardGame(id, () => {
            this.props.history.push('/');
        });
    }

    renderBoardGameControl = () => {
        return (
            <div className="pull-xs-right">
                <Link to="/" className="btn btn-warning">
                    Back to Boardgame Selection
                </Link>
                <button
                    className="btn btn-secondary button-margin"
                    onClick={() => {
                        this.setState({ editing: !this.state.editing });
                    }}>
                    {this.state.editing ? 'Stop Edit' : 'Edit Boardgame'}
                </button>
                <button
                    onClick={this.deleteBoardGame}
                    className="btn btn-danger">
                    Delete Boardgame
                </button>
            </div>
        );
    }

    render() {
        const {boardGame} = this.props;

        if (boardGame) {
            return (
                <div className="container vertical-offset">
                    <div className="row">
                        <h1>{boardGame.title}</h1>
                    </div>
                    <div className="row">
                        {this.renderBoardGameControl()}
                    </div>
                    <div className="row">
                        <BoardGameForm
                            initialValues={this.getBoardGameFormInitialValues(boardGame)}
                            editing={this.state.editing}
                            onBoardGameSubmitted={this.saveBoardGameChangesInDataBase}
                        />
                    </div>
                    <div className="row">
                        <div className="vertical-offset">
                            <BoardGameOwnerAndStats boardGame={boardGame} />
                        </div>
                    </div>
                </div>
            );
        } else {
            return <div>Loading...</div>;
        }
    }
}

function mapStateToProps({boardGames}, ownProps) {
    return {
        boardGame: boardGames[ownProps.match.params.id],
    };
}

// Changing to shortcut notation, keeping this code commented for reference
// -
// function mapDispatchToProps(dispatch) {
//     return bindActionCreators({
//             updateBoardGame: updateBoardGame,
//             fetchBoardGame: fetchBoardGame,
//             deleteBoardGame: deleteBoardGame,
//         }, dispatch);
// }

export default connect(mapStateToProps, {updateBoardGame, fetchBoardGame, deleteBoardGame})(BoardGame);