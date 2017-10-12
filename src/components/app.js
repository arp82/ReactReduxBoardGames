import React, { Component } from 'react';
import BoardGameList from '../containers/board-games-list';
import BoardGameDetails from '../containers/board-game-details';
import SearchBar from '../containers/search-bar';
import BoardGameStats from '../containers/board-game-stats';

export default class App extends Component {
    render() {
        return (
            <div>
                <div className="row">
                    <SearchBar />
                </div>
                <div className="row vertical-offset">
                    <BoardGameList />
                    <BoardGameDetails />
                </div>
                <div className="row vertical-offset">
                    <div className="row">
                        <div className="col-sm-12">
                            <h4>Playing statistics</h4>
                            <BoardGameStats />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
