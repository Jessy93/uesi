import * as firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyC2LaFgVH0oj3sEni7d77I0pTwEeh9Rofs",
    authDomain: "crm-budget-9d90e.firebaseapp.com",
    databaseURL: "https://crm-budget-9d90e-default-rtdb.firebaseio.com",
    projectId: "crm-budget-9d90e",
    storageBucket: "crm-budget-9d90e.appspot.com",
    messagingSenderId: "445182632123",
    appId: "1:445182632123:web:1f9623d44c1c17b7aa099e",
    measurementId: "G-78J7K2YV5K"
  };
firebase.initializeApp(firebaseConfig);

export default firebase;