import firebase from "firebase/app";
import "firebase/app";
import "firebase/database";

const config = {
  apiKey: "AIzaSyC9x8WVK10rafMlrhrRwF7jQfq-yT1QLiI",
  authDomain: "m-city-c637c.firebaseapp.com",
  databaseURL: "https://m-city-c637c.firebaseio.com",
  projectId: "m-city-c637c",
  storageBucket: "m-city-c637c.appspot.com",
  messagingSenderId: "45217300454",
};

firebase.initializeApp(config);

const firebaseDB = firebase.database();
const firebaseMatches = firebaseDB.ref("matches");

export { firebaseDB, firebaseMatches };

// firebaseDB
//   .ref("matches")
//   .once("value")
//   .then(snapshot => {
//     console.log(snapshot.val());
//   });
