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

    static auth() {
        return firebase.auth;
    }

    static authSignOut() {
        return firebase.auth().signOut();
    }

    static submitLog(workoutLog) {

        const addLogs = (previousLog, workoutLog) => {
            return previousLog.map((i) => {
                return previousLog[i] + workoutLog[i]
            })
        }

        let user = firebase.auth().currentUser;
        let workoutLogUpdated = [...workoutLog];
        console.log("Inside the submit log");
        console.log(user);
        console.log(user.email);
        let previousLog = "";
        let f = "";

 /*       if (user && user.uid) {

            const promise1 = new Promise((resolve, reject) => {
                firebase
                    .database()
                    .ref(`users/${user.uid}`)
                    .on('value', function (snapshot) {
                        let resolvedValues = [];
                        resolvedValues.push(snapshot.val());

                        resolve(resolvedValues).then((va) => {
                            console.log("resolved values");

                            console.log(va);
                        });

                    });
            });


            previousLog = promise1.then(function (value) {
                return value
            })

            console.log("previousLog");
            console.log(previousLog);

            workoutLogUpdated = addLogs(previousLog, workoutLog);
        }*/

        return new Promise((resolve, reject) => {
            firebase
                .database()
                .ref("users").child(user.uid).update(workoutLog, (error) => {
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
                    resolve(resolvedValues)
                });
        })
    }
}
export default FirebaseTrigger;


