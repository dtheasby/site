import * as React from "react";

const TabItem = (props: any) => {
    const { children, active, onClick } = props;

    if (active) {
        return (<div className="link">
            <a href="#" onClick={e => {
                e.preventDefault()
                onClick()
            }}>{children}</a>
        </div>
        )
    } else {
        return (<div className="link">
            <a href="#" onClick={e => {
                e.preventDefault()
                onClick()
            }}>Not Active</a>
        </div>
        )
    }
}

export default TabItem;