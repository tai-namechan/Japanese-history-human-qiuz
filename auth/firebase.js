import firebase from 'firebase';

var firebaseConfig = {
  // 各自生成された値を入れる
  apiKey: "AIzaSyDr1rqtIwynxlItQpfcYCf_bwn_velxlrI",
  authDomain: "japanese-history-quiz-518c2.firebaseapp.com",
  databaseURL: "https://japanese-history-quiz-518c2-default-rtdb.firebaseio.com/",
  projectId: "japanese-history-quiz-518c2",
  storageBucket: "japanese-history-quiz-518c2.appspot.com",
  messagingSenderId: "833552253127",
  appId: "1:833552253127:web:9371bd16b0047699fb3ee2"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const signUp = (mailAddress, password) => {
  // Authenticationにユーザの情報を登録
  firebase
    .auth()
    .createUserWithEmailAndPassword(mailAddress, password)
    .then((user) => {
      if (user) {
        console.log('Authentication Create Success');
      }
    })
    .catch((error) => {
      console.log(error);
    });

    if (!firebase.apps.length) { // これをいれないとエラーになったのでいれてます。
        firebase.initializeApp(firebaseConfig);
      }
      // firestoreにユーザー情報を登録
      firebase
      .firestore()
      .collection('nicknameuser')
      .add({
        // DBに登録したい情報
        username,
        email,
        password,
        
      })
      .then(() => {
        console.log('Add Firestore Success');
      })
      .catch((error) => {
        console.log(error);
      });
};

// メールとパスワードでログイン
export const login = (mailAddress, password) => {
  firebase
    .auth()
    .signInWithEmailAndPassword(mailAddress, password)
    .then(() => {
      alert('Login Success!');
    })
    .catch((error) => {
      alert(error.message);
    });
};

export default firebase;