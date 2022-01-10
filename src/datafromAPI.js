import React, { useEffect, useState } from "react";
import axios from "axios";
import proj4 from "proj4";

let api_token = `https://data.gov.sg/api/action/datastore_search?resource_id=139a3035-e624-4f56-b63f-89ae28d4ae4c&limit=2200`;

export function GetData() {
  const [hdbcarparks, setHdbcarparks] = useState([]);

  useEffect(() => {
    axios.get(api_token).then((res) => {
      const carparks = res.data;
      setHdbcarparks(carparks.result.records);
    });
  }, []);

  let parsed_carparks = [];

  parsed_carparks = hdbcarparks.map((park) => {
    let input_proj =
      "+proj=tmerc +lat_0=1.366666666666667 +lon_0=103.8333333333333 +k=1 +x_0=28001.642 +y_0=38744.572 +ellps=WGS84 +units=m +no_defs";
    let output_proj = "+proj=longlat +datum=WGS84 +no_defs";
    let name = park.address;
    let coords = proj4(input_proj, output_proj, [
      parseFloat(park.x_coord),
      parseFloat(park.y_coord),
    ]);
    return { name: name, coords: [coords[1], coords[0]] };
  });

  return parsed_carparks;
}
