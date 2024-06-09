import React, { useEffect, useState } from "react";

import Top from "./Top";
import Body from "./Body";

const Dashboard = () => {
  const [deviceID, setDeviceID] = useState("");


  useEffect(() => {
    fetch("/player/device", { method: "GET" })
      .then((response) => response.json())
      .then((data) => setDeviceID(data.devices[1].id))
      .catch((error) => console.log(error));
    return (() => {
      console.log("Unmount")
    })
  }, []);

  return (
    <div class="flex-col space-y-28">
      <Top deviceID={deviceID} />
      <Body/>
    </div>
  );
};

export default Dashboard;
