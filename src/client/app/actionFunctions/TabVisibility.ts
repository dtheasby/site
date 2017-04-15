import Action from '../actions/action'
import {SetActiveTab, TabVisibility } from '../actions/TabVisibility'


export function setActiveTab(activeTab: string): Action<TabVisibility> {
    return {
        type: SetActiveTab,
        payload: { activeTab }
    }
}