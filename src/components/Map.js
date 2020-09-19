import React from 'react'
import './Map.css'
import { Map, Marker, Popup, TileLayer, LayersControl } from 'react-leaflet'

const { BaseLayer } = LayersControl

const position = [28.3949, 84.1240]
function Mapdata(){
    return(
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
  </Map>
);
    }

export default Mapdata;