import Action from "../actions/action"
import {ADD, MINUS, OPTION, optionAction, operationAction }from "../actions/Calculator"
import * as _ from "lodash"
const initialState = {
            "valueOne": 0,
            "valueTwo": 0,
            "option": "add",
            "result": 0
};

export function operationReducer(state = initialState, action: Action<operationAction>) {
    var newResult: number;
    switch(action.type) {
        case ADD:
            newResult = action.payload.valueOne + action.payload.valueTwo;
            return _.assign({}, state, {result: newResult});
        case MINUS:
            newResult = action.payload.valueOne - action.payload.valueTwo;
            return _.assign({}, state, {result: newResult});
        default:
        return state
    }
}

export function optionReducer(state = initialState, action: Action<optionAction>) {
    return _.assign({}, state, {option: action.payload.newOption})
};


