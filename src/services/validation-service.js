export function validateBoardGameForm(values) {
    const errors = {};
    if (!values.title) {
        errors.title = 'Please, enter a title';
    }
    if (!values.players) {
        errors.players = 'Please, specify the number of players';
    }
    if (!values.imageurl) {
        errors.imageurl = 'Please, provide a link to the board games\' front';
    }
    const ratingsFailedValidation = validateRatings(values.ratings);
    if (ratingsFailedValidation) {
        errors.ratings = ratingsFailedValidation;
    }
    const winLossTieRatioFailedValidation = validatewinLossTieRatio(values.winLossTieRatio);
    if (winLossTieRatioFailedValidation) {
        errors.winLossTieRatio = winLossTieRatioFailedValidation;
    }
    if (!values.owner) {
        errors.owner = 'Please, provide a name for the board game owner';
    }
    if (!values.location) {
        errors.location = 'Please, enter a name for the board game owner main location';
    }
    if (!values.latitude || Number(values.latitude) === Number.NaN) {
        errors.latitude = 'Please, enter a valid numeric value';
    }
    if (!values.longitude || Number(values.longitude) === Number.NaN) {
        errors.longitude = 'Please, enter a valid numeric value';
    }
    return errors;
}

function validateRatings(ratings) {
    if (!ratings) {
        return 'Please, add the number of ratings in the form N1, N2 ..., N10';
    }
    const ratingsList = _.map(ratings.split(','), (rating) => rating.trim());
    if (ratingsList.length !== 10) {
        return 'Please, provide exactly 10 ratings';
    }
    const wrongRating = _.find(ratingsList, rating => Number.isNaN(Number(rating)) || !Number.isInteger(Number(rating)) || Number(rating) < 0);
    if (wrongRating || Number.isNaN(wrongRating)) {
        return `${wrongRating} is not a valid natural number`;
    } else {
        return '';
    }
}

function validatewinLossTieRatio(winLossTieRatio) {
    if (!winLossTieRatio) {
        return 'Please, provide a win-loss-draw ratio';
    }
    const winLossTieRatioList = _.map(winLossTieRatio.split('-'), (value) => value.trim());
    if (winLossTieRatioList.length !== 3) {
        return 'Please, provide exactly 3 values with the format "win-loss-draw"';
    }
    const wrongValue = _.find(winLossTieRatioList, value => {
        return Number.isNaN(Number(value));
    });
    if (wrongValue) {
        return `${wrongValue} is not a valid percentual value`;
    } else if (Number(winLossTieRatioList[0]) + Number(winLossTieRatioList[1]) + Number(winLossTieRatioList[2]) !== 100) {
        return 'The 3 values added must be equal to 100';
    } else {
        return '';
    }
}