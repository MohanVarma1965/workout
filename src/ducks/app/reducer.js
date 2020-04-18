import {DO_SOMETHING} from './actions'
//import {submitLog} from './actions'

import initialState from "./initialState";

export default (state = initialState, action) => {
    if (action.type === "USER_LOGGED") {
        return {
            ...state,
            didDoSomething: "true"
        }
    } else {
        return initialState
    }
}



