import * as firebase from 'firebase';
import {config} from './firebase';

class FirebaseTrigger {

    static initAuth() {
        firebase.initializeApp(config);
        return new Promise((resolve, reject) => {
            const unsub = firebase.auth().onAuthStateChanged(
                user => {
                    unsub();
                    resolve(user);
                },

                error => reject(error)
            );
        });
    }

    static submitLog(workoutLog, previousLogs) {

        const addLogs = () => {

            if(previousLogs) {
                let sum = workoutLogUpdated.map((num, i) => {
                    return  parseInt(num) + parseInt(previousLogs[i])
                })

                return sum;
            }
            else {
                return workoutLog
            }
        }

        let user = firebase.auth().currentUser;
        let workoutLogUpdated = [...workoutLog];
        console.log("Inside the submit log");
        console.log(user);
        console.log(user.email);

        let finalLogs = addLogs();


        return new Promise((resolve, reject) => {
            firebase
                .database()
                .ref("users").child(user.uid).update(finalLogs, (error) => {
                if (error) {
                    reject(error);
                } else {
                    console.log("data set correctly");
                    resolve("success");
                }
            });
        });
    }

    static getPreviousLogs(workoutLog) {
        let user = firebase.auth().currentUser;
        console.log(user);
        return new Promise((resolve, reject) => {
            firebase.database().ref(`users/${user.uid}`)
                .on('value', function (snapshot) {
                    let resolvedValues = [];
                    resolvedValues.push(snapshot.val());
                    resolvedValues.push(user.displayName)
                    resolve(resolvedValues)
                });
        })
    }
}
export default FirebaseTrigger;

/*

static auth() {
    return firebase.auth;
}

static authSignOut() {
    return firebase.auth().signOut();
}
*/

