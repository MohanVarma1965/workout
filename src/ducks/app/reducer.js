import {DO_SOMETHING} from './actions'
//import {submitLog} from './actions'

import initialState from "./initialState";

export default (state = initialState, action) => {
    if (action.type === "USER_LOGGED") {
        return {
            ...state,
            didDoSomething: "true"
        }
    }
    if (action.type === "PREVIOUS_LOGS") {
        return Object.assign({}, state, {
             previousLogs: action.payload.previousLogs
        });
    } else {
        return initialState
    }
}



