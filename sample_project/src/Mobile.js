import React, { useState } from "react";

function Mobile() {
  const [mobile, setMobile] = useState({
    Name: "oneplus",
    Os: "Android",
    Price: "50000",
    LaunchDate: "nov 2022"
  });
  const updateMobile = () => {
    setMobile({
      Name: "Motorola",
      Os: "Android",
      Price: "40000",
      LaunchDate: "Oct 2023"
    });
  };
  return (
    <div>
      <p>Mobile</p>
      <p>Name:{mobile.Name}</p>
      <p>Os:{mobile.Os}</p>
      <p>Price:{mobile.Price}</p>
      <p>LaunchDate:{mobile.LaunchDate}</p>
      <button onClick={updateMobile}>Update mobile</button>
    </div>
  );
}

export default Mobile;

