import Image from "next/image";
import { FC } from "react";
import { Countries } from "../types";

interface MapBackgroundProps {
  selectedCountry?: Countries;
}

const MapBackground: FC<MapBackgroundProps> = ({ selectedCountry }) => {
  return (
    <div className="relative">
      <Image
        src="/world.png"
        alt="world-map-image"
        width={1200}
        height={800}
        useMap="#main_map"
      />
    </div>
  );
};

export default MapBackground;
