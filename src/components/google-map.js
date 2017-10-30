import React, {Component} from 'react';

class GoogleMap extends Component {
    componentDidMount() {
        new google.maps.Map(this.refs.map, {
            zoom: 12,
            center: {
                lat: Number(this.props.lat),
                lng: Number(this.props.lon)
            }
        });
    }

    render() {
        return (
            <div className="map-responsive vertical-offset">
                <div className="google-map" ref="map"></div>
            </div>
        );
    }
}

export default GoogleMap;