import firebase from 'firebase'



var config = {
  apiKey: "AIzaSyBvkdl6fg_sezl6fwAF5DxBC1fq5p3csXw",
  authDomain: "hacktiv-overflow-8e507.firebaseapp.com",
  databaseURL: "https://hacktiv-overflow-8e507.firebaseio.com",
  projectId: "hacktiv-overflow-8e507",
  storageBucket: "hacktiv-overflow-8e507.appspot.com",
  messagingSenderId: "583961032134"
};
firebase.initializeApp(config);

const providerFB = new firebase.auth.FacebookAuthProvider()
providerFB.addScope('email')

export { firebase, providerFB }

