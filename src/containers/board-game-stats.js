import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Sparklines, SparklinesLine} from 'react-sparklines';
import _ from 'lodash';

class BoardGameStats extends Component {
    renderStatsData(boardGameStatsData) {
        const metric = _.keys(boardGameStatsData)[0];
        const values = boardGameStatsData[metric];
        return (
            <tr key={metric}>
                <td>{metric}</td>
                <td>
                    <Sparklines height={140} width={200} data={values}>
                        <SparklinesLine color="blue"/>
                    </Sparklines>
                </td>
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
                    {this.props.activeBoardGame && this.props.activeBoardGame.stats.map(this.renderStatsData)}
                </tbody>
            </table>
        );
    }
}

function mapStateToProps({activeBoardGame}) {
    return { activeBoardGame };
}

export default connect(mapStateToProps)(BoardGameStats);