"use client";

import TripPostSelect from "./trip-post-select";
import TripPostCards from "./trip-post-cards";
import { useState } from "react";

const TripPosts = () => {
  const [country, setCountry] = useState("");

  return (
    <>
      <div className="my-[18px]">
        <TripPostSelect setCountry={setCountry} />
      </div>
      <div className="flex items-center gap-x-[18px] w-full flex-wrap gap-y-[24px]">
        <TripPostCards country={country} />
      </div>
    </>
  );
};

export default TripPosts;
