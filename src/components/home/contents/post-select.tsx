"use client";
import { useRef } from "react";
import {
  Select,
  SelectTrigger,
  SelectItem,
  SelectValue,
  SelectContent,
} from "../../ui/select";

enum Countries {
  KOTA_KINABALU = "Kota Kinabalu",
  HONG_KONG = "HongKong",
  JAPAN = "Japan",
  ENGLAND = "England",
  FRANCE = "France",
  SINGAPORE = "Singapore",
  VIETNAM = "Vietnam",
}

const PostSelect = () => {
  const selectNewCountry = (value: Countries) => {
    console.log(value);
  };

  return (
    <Select onValueChange={selectNewCountry}>
      <SelectTrigger className="max-w-[200px]">
        <SelectValue placeholder="country" />
      </SelectTrigger>
      <SelectContent>
        {Object.values(Countries).map((country) => (
          <SelectItem key={country} value={country}>
            {country}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};

export default PostSelect;
