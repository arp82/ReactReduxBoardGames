import React, {Component} from 'react';
import {Field, reduxForm} from 'redux-form';
import {connect} from 'react-redux';
import _ from 'lodash';
import {validateBoardGameForm} from '../services/validation-service';

class BoardGameForm extends Component {
    onSubmit(values) {
        
        const boardGame = {
            title: values.title,
            players: values.players,
            imageUrl: values.imageurl,
            stats: [
                {
                    ratings: values.ratings.split(',').map(Number),
                },
                {
                    winLossTieRatio: values.winLossTieRatio.split('-').map(Number),
                },
            ],
            owner: {
                name: values.owner,
                location: {
                    name: values.location,
                    lat: values.latitude,
                    lon: values.longitude,
                },
            },
        };

        this.props.onBoardGameSubmitted(boardGame);
    }

    renderField = (field) => {
        const {meta: {touched, error}} = field;
        const className = `form-group ${touched && error ? 'has-danger' : ''}`;
        if (field.hidden) {
            return <div></div>
        } else {
            return (
                <div className={className}>
                    <label>{field.label}</label>
                    <input className="form-control" type="text" disabled={!field.editing} {...field.input} />
                    <div className="text-help">
                        {touched && field.editing ? error : ""}
                    </div>
                </div>
            );
        }
    }

    renderSubmitButton = () => {
        if (this.props.editing) {
            return (
                <div className="text-xs-right">
                    <button type="submit" className="btn btn-primary">Save</button>
                </div>
            );
        } else {
            return <div></div>
        }
    }

    render() {
        const {handleSubmit} = this.props;

        return (
            <form className="vertical-offset"
                onSubmit={handleSubmit(this.onSubmit.bind(this))}>
                <Field
                    label="Title"
                    name="title"
                    component={this.renderField}
                    placeholder="Enter title for game"
                    editing={this.props.editing}
                />
                <Field
                    label="Number of Players"
                    name="players"
                    component={this.renderField}
                    placeholder="Min-max number of players"
                    editing={this.props.editing}
                />
                <Field
                    label="Image url"
                    name="imageurl"
                    component={this.renderField}
                    placeholder="Link to front image"
                    hidden={this.props.editing ? false : true}
                    editing={this.props.editing}
                />
                <Field
                    label="Ratings"
                    name="ratings"
                    component={this.renderField}
                    placeholder="Number of rates (N1, N2, ..., N10) for each grade (1, 2, ..., 10)"
                    hidden={this.props.editing ? false : true}
                    editing={this.props.editing}
                />
                <Field
                    label="Win-Loss-Tie ratio"
                    name="winLossTieRatio"
                    component={this.renderField}
                    placeholder="Win-Loss-Tie ratio"
                    hidden={this.props.editing ? false : true}
                    editing={this.props.editing}
                />
                <Field
                    label="Owner Name"
                    name="owner"
                    component={this.renderField}
                    placeholder="Owner Name"
                    hidden={this.props.editing ? false : true}
                    editing={this.props.editing}
                />
                <Field
                    label="Owner Location"
                    name="location"
                    component={this.renderField}
                    placeholder="Owner Location"
                    hidden={this.props.editing ? false : true}
                    editing={this.props.editing}
                />
                <Field
                    label="Latitude"
                    name="latitude"
                    component={this.renderField}
                    placeholder="Latitude"
                    hidden={this.props.editing ? false : true}
                    editing={this.props.editing}
                />
                <Field
                    label="Longitude"
                    name="longitude"
                    component={this.renderField}
                    placeholder="Longitude"
                    hidden={this.props.editing ? false : true}
                    editing={this.props.editing}
                />
                {this.renderSubmitButton()}
            </form>
        );
    }
}

function validate(values) {
    return validateBoardGameForm(values);
}

export default reduxForm({
    validate,
    form: "BoardGameEditForm"
})(connect(null)(BoardGameForm));