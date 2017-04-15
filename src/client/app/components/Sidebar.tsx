import * as React from "react";
import TabContainer from "../Containers/TabContainer";
import tabData from "../data/tabs";


class Sidebar extends React.Component<any, {}>{
    constructor(props:any){
        super(props)
    }

    
    render() {
        return <div>
            <TabContainer filter="Home">First Link</TabContainer>
            <TabContainer filter="Second">Second Link</TabContainer>
            <TabContainer filter="Third">Third Link</TabContainer>
        </div>
    }
}
 
export default Sidebar;