import React, { Component } from 'react';
import './map.css';
import L from 'leaflet';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';

var myIcon = L.icon({
    iconUrl: 'https://www.casitamagica.com.ar/blog/wp-content/uploads/2018/11/3440906-direction-location-map-marker-navigation-pin_107531.png',
    iconSize: [64, 64],
    iconAnchor: [22, 60],
    popupAnchor: [20, -76],
});

export default class GdlMap extends Component {
    state = {
        lat: 20.67490815,
        lng: -103.3930154409845,
        zoom: 8,
    }
    render() {
        const position = [this.state.lat, this.state.lng]
        return (
            <Map className='map' center={position} zoom={this.state.zoom}>

                <TileLayer
                    attribution='&amp;copy <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url='https://stamen-tiles-{s}.a.ssl.fastly.net/toner/{z}/{x}/{y}{r}.png'
                />
                <Marker
                position={position}
                icon={myIcon}
                autoPan='true'>
                    <Popup>
                        <h3>I'm right here!</h3>
                        <p>Guadalajara, Jalisco</p>
                    </Popup>
                </Marker>
            </Map>
        )
    }
}

