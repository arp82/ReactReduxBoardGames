import React, {Component} from 'react';
import BarChart from './bar-chart';
import _ from 'lodash';

export default class BoardGameStats extends Component {
    constructor(props) {
        super(props);
    }
    
    renderStatsData(boardGameStatsData) {
        const metric = _.keys(boardGameStatsData)[0];
        const values = [...boardGameStatsData[metric], 0];
        const style = {fill: 'orange', strokeWidth: 1, marginWidth: 1};
        if (metric === 'ratings') {
            style.fill = 'blue';
        }
        return (
            <tr key={metric}>
                <td>{metric}</td>
                <td className="absorbing-column">
                    <BarChart style={style} values={values} />
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
                    {this.props.boardGame && this.props.boardGame.stats.map(this.renderStatsData)}
                </tbody>
            </table>
        );
    }
}