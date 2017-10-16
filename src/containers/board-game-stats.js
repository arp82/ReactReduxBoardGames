import React, {Component} from 'react';
import {connect} from 'react-redux';

class BoardGameStats extends Component {
    renderBoardGame(boardGameStatsData) {
        return (
            <tr key={boardGameStatsData.metric}>
                <td>{boardGameStatsData.metric}</td>
                <td>{boardGameStatsData.values}</td>
            </tr>
        );
    }

    render() {
        return (
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>Indicator</th>
                        <th>Chart</th>
                    </tr>
                </thead>
                <tbody>
                    {/* {this.props.activeBoardGame.stats.map(this.renderStatsData)} */}
                    <tr><td col-span="2">Work In Progress</td></tr>
                </tbody>
            </table>
        );
    }
}

function mapStateToProps({activeBoardGame}) {
    return { activeBoardGame };
}

export default connect(mapStateToProps)(BoardGameStats);