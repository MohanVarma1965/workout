
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

        let user = firebase.auth().currentUser;

        console.log("Inside the submit log");
        console.log(user);
        console.log(user.email);

        return new Promise((resolve, reject) => {
            firebase
                .database()
                .ref("users").child(user.uid).set(workoutLog, (error) => {
                    if (error) {
                        console.log("error");
                        console.log(error);
                        reject(error);
                    } else {
                        console.log("data set correctly");
                        resolve("success");
                    }
                });
        });
    }

 /*   static createRoom(classRoom) {
        let user = firebase.auth().currentUser;
        let valuemod = {
            RoomValue: classRoom,
            owner: user.uid,
            saved: false,
            hosted: false,
            endHostedQuiz: false,
            questions: [],
            studentIDs: []
        };

        return new Promise((resolve, reject) => {
            firebase
                .database()
                .ref('users/classRooms').child(classRoom)
                .set(valuemod, (error) => {
                    if (error) {
                        // console.log(error);
                        reject(error);
                    } else {
                        resolve(classRoom);
                    }
                });
        });
    }*/
}

export default FirebaseTrigger;

