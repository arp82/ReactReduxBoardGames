import React from 'react';
import BoardGameStats from './board-game-stats';
import GoogleMap from './google-map';

const BoardGameOwnerAndStats = (props) => {
    return (
        <div className="row">
            <div className="col-md-6">
                <div className="input-group">
                    <div className="input-group-addon">Owner: </div>
                    <input className="form-control" value={props.boardGame.owner.name} type="text" disabled />
                </div>
                <div className="input-group vertical-offset">
                    <div className="input-group-addon">Location: </div>
                    <input className="form-control" value={props.boardGame.owner.location.name} type="text" disabled />
                </div>
                <GoogleMap lon={props.boardGame.owner.location.lon} lat={props.boardGame.owner.location.lat} />
            </div>
            <div className="col-md-6">
                <BoardGameStats boardGame={props.boardGame}/>
            </div>
        </div>
    );
};

export default BoardGameOwnerAndStats;