import firebase from 'firebase';

try {
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyBNAUoza_QB9F-OmM4hO2Lze7K2s3_7T3o",
    authDomain: "gd-todo-app.firebaseapp.com",
    databaseURL: "https://gd-todo-app.firebaseio.com",
    storageBucket: "gd-todo-app.appspot.com",
    messagingSenderId: "1037265767093"
  };
  firebase.initializeApp(config);
} catch (e) {

}

export var firebaseRef = firebase.database().ref();
export default firebase;
