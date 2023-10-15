import React from "react";
import GoogleMapReact from "google-map-react";

const LocationPin = ({ text }) => (
  <div className="pin">
    {text}
  </div>
);

const Map = ({ location, zoomLevel }) => (
  <div className="map">
    <h2 className="map-h2">Puedes visitarnos en</h2>
    <div className="google-map">
      <GoogleMapReact
        bootstrapURLKeys={{ key: '' }}//aqui va la api de google
        defaultCenter={location}
        defaultZoom={zoomLevel}
      >
        <LocationPin
          lat={location.lat}
          lng={location.lng}
          text={location.address}
        />
      </GoogleMapReact>
    </div>
  </div>
);

export default Map;
