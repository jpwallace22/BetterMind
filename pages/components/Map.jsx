import React from "react";
import GoogleMapReact from "google-map-react";
import { FaMapMarkerAlt } from "react-icons/fa";

function Map() {
  const location = {
    address: "516 Mission Ave, San Diego, CA 92116",
    lat: 32.75738,
    lng: -117.145968,
  };
  return (
    <div className="map">
      <div className="google-map">
        <GoogleMapReact
          bootstrapURLKeys={{ key: process.env.MAPS_API }}
          defaultCenter={location}
          defaultZoom={15}
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
}

const LocationPin = ({ text }) => (
  <>
    <div className="pin">
      <FaMapMarkerAlt />
    </div>
    <p className="pin-text">{text}</p>
  </>
);

export default Map;
