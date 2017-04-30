import * as React from "react";
import TabContainer from "../Containers/TabContainer";
import tabData from "../data/tabs";
import "./sidebar.scss"

export default () => {
    console.log("render sidebar");
return (

         <div className="sidebar">
            <TabContainer filter="Home">First Link</TabContainer>
            <TabContainer filter="Second">Second Link</TabContainer>
            <TabContainer filter="Third">Third Link</TabContainer>
        </div>
)};
 