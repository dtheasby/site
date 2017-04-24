import Action from '../actions/action'
import {SetActiveTab, TabVisibility } from '../actions/TabVisibility'


export function setActiveTab(activeTab: string): Action<TabVisibility> {
    console.log("activeTab: " + activeTab);
    return {
        type: SetActiveTab,
        payload: { activeTab }
    }
}