"use client";

import { FC, useCallback, useState } from "react";
import { Countries } from "../types";

import { GoogleMap, Marker, useJsApiLoader } from "@react-google-maps/api";
import { location, locationTitle } from "./types";

interface MapCanvasProps {
  selectedCountry?: Countries;
}

const MapCanvas: FC<MapCanvasProps> = ({ selectedCountry }) => {
  const { isLoaded } = useJsApiLoader({
    id: "travle-blog",
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || "",
  });

  const [map, setMap] = useState(null);

  const onLoad = useCallback(function callback(map: any) {
    // This is just an example of getting and using the map instance!!! don't just blindly copy!
    const bounds = new window.google.maps.LatLngBounds(
      location.Australia,
      location.France
    );
    map.fitBounds(bounds);

    setMap(map);
  }, []);

  const onUnmount = useCallback(function callback(map: any) {
    setMap(null);
  }, []);

  return isLoaded ? (
    <div className="w-full bg-transparent h-[500px] px-[16px] sm:h-[680px]">
      <GoogleMap
        mapContainerStyle={{ height: "100%", width: "100%" }}
        mapContainerClassName="h-full"
        center={
          selectedCountry ? location[selectedCountry] : location.Australia
        }
        zoom={2}
        onLoad={onLoad}
        onUnmount={onUnmount}
      >
        {selectedCountry && (
          <Marker
            position={location[selectedCountry]}
            title={locationTitle[selectedCountry]}
          ></Marker>
        )}
      </GoogleMap>
    </div>
  ) : (
    <div>loading...</div>
  );
};

export default MapCanvas;
