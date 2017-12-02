import firebase from 'firebase';

const config = {
  apiKey: "AIzaSyBAxGENjzmO4fD0pCPCLNHfaGHNqJhKfPE",
  authDomain: "groceries-and-reminders.firebaseapp.com",
  databaseURL: "https://groceries-and-reminders.firebaseio.com",
  projectId: "groceries-and-reminders",
  storageBucket: "groceries-and-reminders.appspot.com",
  messagingSenderId: "637783528843"
};

const fire = firebase.initializeApp(config);
export default fire;
