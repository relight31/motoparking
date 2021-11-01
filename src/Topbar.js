import React, { useState, useEffect } from "react";
import "./Topbar.css";

export default function Topbar() {
  const url =
    "https://api.countapi.xyz/update/motoparkwhere.netlify.com/f76337e3-51bc-46cc-806f-82a0be244031?amount=1";
  const [visits, setVisits] = useState(0);
  useEffect(() => {
    fetch(url)
      .then((resp) => {
        if (resp.ok) {
          return resp.json();
        }
      })
      .then((counter) => {
        const { value } = counter;
        setVisits(value);
      });
  }, []);
  return (
    <div>
      <h1>MotoParkWhere</h1>
      <p>
        Enter your address into the search bar to the top-left of the map.
        <br />
        HDB carparks are in green, other carparks are in blue.
        <br />
        This site has been viewed {visits} times.
      </p>
    </div>
  );
}
