
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {fetchBoardGames} from '../actions/index';

class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchTerm: ''
        };
        this.onSearchTermChange = this.onSearchTermChange.bind(this);
    }

    onSearchTermChange(event) {
        this.setState({searchTerm: event.target.value});
    }

    onSubmit(event) {
        event.preventDefault();
        this.props.fetchBoardGames(this.state.searchTerm);
        this.setState({searchTerm: ''});
    }

    render() {
        return (
            <div className="row">
                <div className="col-sm-12">
                    <form className="input-group"
                        onSubmit={(event) => this.onSubmit(event)}>
                        <label className="input-group-addon">Boardgame title: </label>
                        <input className="form-control"
                            placeholder="input value to filter by"
                            value={this.state.searchTerm}
                            onChange={this.onSearchTermChange} />
                        <span className="input-group-btn">
                            <button className="btn btn-primary">Search</button>
                        </span>
                    </form>
                </div>
            </div>
        );
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({fetchBoardGames}, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchBar);