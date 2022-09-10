import { getAuth } from 'firebase/auth';
import firebase from 'firebase/compat/app';

const firebaseConfig = {
    apiKey: "AIzaSyB4gb0RQJL824KzTp14-YJv88qKcowYWpw",
    authDomain: "hinako-birthday.firebaseapp.com",
    databaseURL: "https://hinako-birthday-default-rtdb.firebaseio.com",
    projectId: "hinako-birthday",
    storageBucket: "hinako-birthday.appspot.com",
    messagingSenderId: "338098170578",
    appId: "1:338098170578:web:4031fe4ffed2852e845b0b"
  }

const app = firebase.initializeApp(firebaseConfig);

export const auth = getAuth(app);