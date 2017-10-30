import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

class BoardGameDetails extends Component {
    render() {
        if (!this.props.boardGame) {
            return (
                <div className="container">
                    <h3>Board Game Details: </h3>
                    <div>
                        Please, select a board game first.
                    </div>
                </div>
            );
        }

        return (
            <div className="container">
                <h3>Board Game Details: </h3>
                <div className="row">
                    Title: {this.props.boardGame.title}
                </div>
                <div className="row">
                    Players: {this.props.boardGame.players}
                </div>
                <div className="row">
                    <img src={this.props.boardGame.imageUrl} />
                </div>
                <div className="row vertical-offset">
                    <Link to={`/boardGame/${this.props.boardGame.id}`} className="btn btn-primary">Go to Board Game data page</Link>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        boardGame: state.activeBoardGame
    };
}

export default connect(mapStateToProps)(BoardGameDetails);