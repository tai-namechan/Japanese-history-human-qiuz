import React, { createContext, useState, useContext, useEffect } from 'react';
import { auth } from '../firebase/firebase';
import firebase from 'firebase/compat';

const AuthContext = createContext();

export function useAuthContext() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [user, setUser] = useState('');
  const [loginUserData, setLoginUserData] = useState('');
  // console.log("あああ：",loginUserData);
  const [updating, setUpdating] = useState(false);

  const value = {
    user,
		loginUserData,
    setUpdating
  };

  useEffect(() => {
		// ユーザーのログイン・ログアウトを監視
    const unsubscribe = auth.onAuthStateChanged((user) => {
				setUser(user);
				// ログインユーザーのuidを元にデータを取得
        const userInfomation = firebase.firestore().collection('nicknameuser').doc(user.uid);
        userInfomation.get().then((doc) => {
					const data = doc.data();
					setLoginUserData(data);
				});
        setUpdating(false)
      });
      return () => unsubscribe();
    }, [updating]);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}