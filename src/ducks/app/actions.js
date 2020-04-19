import firebaseTrigger from '../../firebaseTrigger';
export const DO_SOMETHING = 'DO_SOMETHING'


export function submitLog(workoutLog, previousLogs) {

    return (dispatch) => {
        return firebaseTrigger.submitLog(workoutLog, previousLogs)
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

