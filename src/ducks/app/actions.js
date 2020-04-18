import firebaseTrigger from '../../firebaseTrigger';


export const DO_SOMETHING = 'DO_SOMETHING'

/*export const doSomething = someVar => ({
    type: DO_SOMETHING,
    payload: {
        someVar
    }
})*/


export function submitLog(workoutLog) {

    return (dispatch) => {
        return firebaseTrigger.submitLog(workoutLog)
            .then((result) => {
                //dispatch(notify('Your quiz has been submitted successfully'));
                dispatch({
                    type: "USER_LOGGED",
                    payload: {
                        val: "val"
                    }
                });
            })
            .catch(error => {
                // dispatch(loginCallError(error));
                console.log(error);
            });
    }
}

export function getPreviousLogs() {
    return (dispatch) => {
        return firebaseTrigger.getPreviousLogs()
            .then((result) => {
                //dispatch(notify('Your quiz has been submitted successfully'));
                dispatch({
                    type: "PREVIOUS_LOGS",
                    payload: {
                        previousLogs: result
                    }
                });
            })
            .catch(error => {
                // dispatch(loginCallError(error));
                console.log(error);
            });
    }
}

