import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import BoardGameList from '../containers/board-games-list';
import BoardGameDetails from '../containers/board-game-details';
import SearchBar from '../containers/search-bar';

export default class App extends Component {
    render() {
        return (
            <div>
                <div className="row vertical-offset">
                    <SearchBar />
                </div>
                <div className="row vertical-offset">
                    <div className="col-md-4">
                        <BoardGameList />
                    </div>
                    <div className="col-md-8">
                        <BoardGameDetails />
                        <br />
                        <Link to='/newBoardGame' className="btn btn-success">Create New Boardgame</Link>
                    </div>
                </div>
            </div>
        );
    }
}
