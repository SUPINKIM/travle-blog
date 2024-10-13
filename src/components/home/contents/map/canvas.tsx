"use client";

import { FC, useCallback, useState } from "react";
import { Countries } from "../types";

import { GoogleMap, useJsApiLoader } from "@react-google-maps/api";

interface MapCanvasProps {
  selectedCountry?: Countries;
}

const containerStyle = {
  width: "100%",
  height: "50%",
};

const center = {
  lat: -33.8688,
  lng: 151.2093,
};

const hongkong = {
  lat: 22.3964,
  lng: 114.1095,
};

const MapCanvas: FC<MapCanvasProps> = ({ selectedCountry }) => {
  const { isLoaded } = useJsApiLoader({
    id: "travle-blog",
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || "",
  });

  const [map, setMap] = useState(null);

  const onLoad = useCallback(function callback(map) {
    // This is just an example of getting and using the map instance!!! don't just blindly copy!
    const bounds = new window.google.maps.LatLngBounds(hongkong, center);
    map.fitBounds(bounds);

    console.log(map);

    setMap(map);
  }, []);

  const onUnmount = useCallback(function callback(map) {
    setMap(null);
  }, []);

  return isLoaded ? (
    <div className="w-full h-[500px] px-[16px] sm:h-[800px]">
      <GoogleMap
        mapContainerClassName="w-full h-full"
        center={center}
        zoom={6}
        onLoad={onLoad}
        onUnmount={onUnmount}
      ></GoogleMap>
    </div>
  ) : (
    <div>loading...</div>
  );
};

export default MapCanvas;
