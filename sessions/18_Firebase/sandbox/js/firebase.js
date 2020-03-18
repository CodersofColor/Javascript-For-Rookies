// const firebase = require("firebase");
// // Required for side-effects
// require("firebase/firestore");

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: API_KEY,
  authDomain: "test-js-basics.firebaseapp.com",
  databaseURL: "https://test-js-basics.firebaseio.com",
  projectId: "test-js-basics",
  storageBucket: "test-js-basics.appspot.com",
  messagingSenderId: "530471426334",
  appId: "1:530471426334:web:717123dffacc5729f3110f",
  measurementId: "G-3WT5Z3RGWN"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);


//CONNECT TO DB
var db = firebase.firestore();

