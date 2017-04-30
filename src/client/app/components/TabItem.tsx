import * as React from "react";
import "./tabitem.scss"

const TabItem = (props: any) => {
    const { children, active, onClick } = props;
    let showing = (active) ? "active" : "";
    
    console.log("render tabitem");
    return (<div className="link">
            <a href="#" className={showing} onClick={e => {
                e.preventDefault()
                onClick()
            }}>{children}</a>
        </div>
        )
}




export default TabItem;