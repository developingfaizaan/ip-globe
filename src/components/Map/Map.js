import { useEffect, useState } from "react";
import ReactMapGL, { Marker, FlyToInterpolator } from "react-map-gl";
// Context
import { useIpDetail } from "../../contexts/IpContext";
// Component
import CustomMarker from "./Marker";

// added the following lines to fix mapbox transpilation error.
import mapboxgl from "mapbox-gl";
// The following is required to stop "npm build" from transpiling mapbox code.
// notice the exclamation point in the import.
// eslint-disable-next-line import/no-webpack-loader-syntax, import/no-unresolved
mapboxgl.workerClass = require("worker-loader!mapbox-gl/dist/mapbox-gl-csp-worker").default;

// Mapbox Access Token - API KEY
const TOKEN = process.env.REACT_APP_MAPBOX_ACCESS_TOKEN;

const Map = () => {
  const { currentIpDetail } = useIpDetail();
  const [lng, setLng] = useState(72.8777); // longitude
  const [lat, setLat] = useState(19.076); // latitude
  const [viewport, setViewport] = useState({
    // camera angle
    longitude: lng,
    latitude: lat,
    zoom: 9,
    // pitch: 60, bearing: -60, // For map angles
  });

  useEffect(() => {
    // Getting lon, lat from api response
    const { longitude, latitude } = currentIpDetail;

    if (!longitude && !latitude) return;

    // Updating the state for the marker on the map by longitude and lotitude
    setLng(longitude);
    setLat(latitude);

    // To set the camera angle of the map
    setViewport({
      ...viewport,
      longitude: longitude, // API Response longitude
      latitude: latitude, // API Response latitude
      zoom: 10,
      transitionDuration: 5000,
      transitionInterpolator: new FlyToInterpolator(),
    });
  }, [currentIpDetail]); // eslint-disable-line react-hooks/exhaustive-deps

  // custom variable for responsive Map
  const mapHeight = window.innerWidth > 1080 ? "100vh" : "80vh";

  return (
    <ReactMapGL
      {...viewport}
      width="100%"
      height={mapHeight} // custom variable for responsive map
      mapStyle="mapbox://styles/mapbox/dark-v8"
      onViewportChange={(viewport) => setViewport(viewport)}
      onViewStateChange={(viewport) => setViewport(viewport)}
      attributionControl={false}
      mapboxApiAccessToken={TOKEN}
    >
      <Marker latitude={lat} longitude={lng} offsetLeft={-20} offsetTop={-10}>
        <CustomMarker />
      </Marker>
    </ReactMapGL>
  );
};

export default Map;
