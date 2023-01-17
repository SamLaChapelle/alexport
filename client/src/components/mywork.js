import React from "react";
import "../css/mywork.css";
import iphone from "../assets/iphonewrapper.png";

//2-3 top tier images for each service & link instagram to see more

function MyWork() {
  return (
    <div id="myWork">
      <div id="iphoneWork">
        {" "}
        <img src={iphone} alt="IPhone 14 outline" />
      </div>
    </div>
  );
}

export default MyWork;
