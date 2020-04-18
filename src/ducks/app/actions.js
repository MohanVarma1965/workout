import firebaseTrigger from '../../firebaseTrigger';


export const DO_SOMETHING = 'DO_SOMETHING'
/*export const doSomething = someVar => ({
    type: DO_SOMETHING,
    payload: {
        someVar
    }
})*/


export function submitLog(workoutLog) {
    /*return (dispatch) => {
        /!*dispatch(beginAjaxCall());*!/
        dispatch({
            type: DO_SOMETHING,
            payload: {
                val: "val"
            }
        })*/

        return firebaseTrigger.submitLog(workoutLog)
            .then((result) => {
                //dispatch(notify('Your quiz has been submitted successfully'));
                //dispatch(push('/login'));
            })
            .catch(error => {
                // dispatch(loginCallError(error));
                // console.log(error);
            });
    };

