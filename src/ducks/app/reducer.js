import {DO_SOMETHING} from './actions'
//import {submitLog} from './actions'

import initialState from "./initialState";

export default (state = initialState, action) => {
    if (action.type === "USER_LOGGED") {
        return Object.assign({}, state);
    }
    if (action.type === "STORY_BOARD") {
        return Object.assign({}, state, {
            storyBoard: action.payload.storyBoard
        });
    }
    if (action.type === "PREVIOUS_LOGS") {

        let points = 0;
        if(action.payload.previousLogs && action.payload.previousLogs[0]  && action.payload.previousLogs[0]['points']){
            points = action.payload.previousLogs[0]['points'];
        }
        return Object.assign({}, state, {
             previousLogs: points, displayName:action.payload.displayName
        });
    } else {
        return state
    }
}



