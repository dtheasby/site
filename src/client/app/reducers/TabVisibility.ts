import Action from '../actions/action';
import { SetActiveTab, TabVisibility } from '../actions/TabVisibility';
import * as _ from "lodash";

const initialState: TabVisibility = { activeTab: "Home"};

export const tabVisibility = (state: TabVisibility = initialState, action: Action<TabVisibility>) => {
    switch (action.type) {
        case SetActiveTab:
            console.log("1");
            return action.payload;
        default: 
            return state;
    }
}

