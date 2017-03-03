import Action from "../actions/action"
import {ADD, MINUS, operationAction }from "../actions/Calculator"
import * as _ from "lodash"
const initialState = {
            "valueOne": 0,
            "valueTwo": 0,
            "result": 0
};

function calculatorReducer(state = initialState, action: Action<operationAction>) {
    var newResult: number;
    var newState: {};
    switch(action.type) {
        case ADD:
            newResult = action.payload.valueOne + action.payload.valueTwo;
            newState = _.assign({}, state, {result: newResult});
        case MINUS:
            newResult = action.payload.valueOne - action.payload.valueTwo;
            newState = _.assign({}, state, {result: newResult});
        default:
        return state
    }
}




export default calculatorReducer;