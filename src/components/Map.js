import React from 'react'
import './Map.css'
import { Map, Marker, Popup, TileLayer, LayersControl, GeoJSON } from 'react-leaflet'
import mapData from './../data/countries.json'

const { BaseLayer } = LayersControl

const position = [28.3949, 84.1240]
class Mapdata extends React.Component {

  state = { color: "#ffff00" };

  colors = ["green", "blue", "yellow", "orange", "grey"];

  countryStyle={
    fillColor: "Yellow",
    fillOpacity: 1,
    color: "black",
    weight: 2
  };

  changeCountryColor = (event) => {
    event.target.setStyle({
      color: "green",
      fillColor: this.state.color,
      fillOpacity: 1,
    });
  };

  onEachFeature = (country, layer) => {
    const countryName = country.properties.ADMIN;
    layer.bindPopup(countryName);
    layer.options.fillOpacity = Math.random(); 
    layer.on({
      click: this.changeCountryColor,
    });
  }

  colorChange = (event) => {
    this.setState({ color: event.target.value });
  };

  inputStyle = {
    'zIndex': 10000,
    position: 'absolute',
    left: '5%',
    bottom: '5%',
  }

  render() {
    return (
      <>
      <Map center={position} zoom={7}>
        <LayersControl position="topright">
          <BaseLayer checked name="osm">
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
            />
          </BaseLayer>
          <BaseLayer name="Steam Terrain">
            <TileLayer
              url='https://stamen-tiles-{s}.a.ssl.fastly.net/terrain/{z}/{x}/{y}{r}.{ext}'
              attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
              ext='png'
            />
          </BaseLayer>
        </LayersControl>
        <Marker position={position}>
          <Popup>Nepal<br />A country of brave gorkha.</Popup>
        </Marker>
        <GeoJSON
         data={mapData.features} 
         style={this.countryStyle}
         onEachFeature={this.onEachFeature}/>
         <input
          style={this.inputStyle}
          type="color"
          value={this.state.color}
          onChange={this.colorChange}
        />
      </Map>
      </>
    );
  }
}

export default Mapdata;