import React from "react";
import ReactDOM from "react-dom";
import { useLocation } from "react-router-dom";

export function LocationDisplay() {
  let location = useLocation();
  React.useEffect(() => {
    console.log(location);
    // ga.send(["pageview", location.pathname]);
  }, [location]);
}
