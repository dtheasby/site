import Action from "../actions/action"
import {ADD, MINUS, operationAction }from "../actions/Calculator"

export function add(valueOne: number, valueTwo: number): Action<operationAction> {
    return {
        type: ADD,
        payload: {
            valueOne: valueOne,
            valueTwo: valueTwo
        }
    }
}

export function minus(valueOne: number, valueTwo: number): Action<operationAction> {
    return {
        type: MINUS,
        payload: {
            valueOne: valueOne,
            valueTwo: valueTwo
        }
    }
}
