import React, {Component} from 'react';
import {connect} from 'react-redux';

class BoardGameDetails extends Component {
    render() {
        if (!this.props.boardGame) {
            return (
                <div>
                    <h3>Board Game Details: </h3>
                    <div>
                        Please, select a board game first.
                    </div>
                </div>
            );
        }

        return (
            <div>
                <h3>Board Game Details: </h3>
                <div>
                    Title: {this.props.boardGame.title}
                </div>
                <div>
                    Players: {this.props.boardGame.players}
                </div>
                <div>
                    <img src={this.props.boardGame.imageUrl} />
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