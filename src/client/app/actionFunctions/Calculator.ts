import Action from "../actions/action"
import {ADD, MINUS, OPTION,  operationAction, optionAction }from "../actions/Calculator"

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

export function option(option: string): Action<optionAction> {
    return {
        type: OPTION,
        payload: {
            newOption: option
        }
    }
}
