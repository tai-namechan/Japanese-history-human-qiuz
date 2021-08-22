import React, { Component } from 'react';
import { View, Text, TouchableOpacity, SafeAreaView } from 'react-native';
import firebase from 'firebase';
import LoginForm from '../screens/LoginForm';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Start from '../screens/Start.js';
import { Button, Image, Header, ThemeProvider } from 'react-native-elements';

class App extends Component {
    state = { loggedIn: null };

    componentDidMount() {
        const firebaseConfig = {
            // 各自生成された値を入れる
            apiKey: "AIzaSyDr1rqtIwynxlItQpfcYCf_bwn_velxlrI",
            authDomain: "japanese-history-quiz-518c2.firebaseapp.com",
            databaseURL: "https://japanese-history-quiz-518c2-default-rtdb.firebaseio.com/",
            projectId: "japanese-history-quiz-518c2",
            storageBucket: "japanese-history-quiz-518c2.appspot.com",
            messagingSenderId: "833552253127",
            appId: "1:833552253127:web:9371bd16b0047699fb3ee2"
        }
        if (!firebase.apps.length) { // これをいれないとエラーになったのでいれてます。
            firebase.initializeApp(firebaseConfig);
        }
        // 匿名ログイン
        firebase.auth().onAuthStateChanged(async (user) => {
            // 未ログイン時
            if (!user) {
                // 匿名ログインする
                firebase.auth().signInAnonymously();
            }
            // ログイン時
            else {
                // ログイン済みのユーザー情報があるかをチェック
                // ユーザーのドキュメントを取得して存在チェック
                // まずはユーザーのデータを取得しFirestore からログインしたユーザーに対応するデータを取得.
                var userDoc = await firebase.firestore().collection('users').doc(user.uid).get();
                // 重要なのが doc の key に user.uid を指定していること
                // ユーザーID はユニークであることが Firebase Auth 上で担保されているので, この値を使うことで Firestore 側のデータでもユニーク性を担保できる

                // データの存在チェック 存在する場合は true, 存在しない場合は false
                if (!userDoc.exists) {
                    // Firestore にユーザー用のドキュメントが作られていなければ作る
                    await userDoc.ref.set({
                        screen_name: user.uid,
                        display_name: '名無しさん',
                        // タイムスタンプ Firestore に送るデータに使うことで時間の書き込みをサーバー時間で行ってくれるというスグレモノ
                        created_at: firebase.firestore.FieldValue.serverTimestamp(),
                    });
                }
            }
        });
    }

    renderForm() {
        if (this.state.loggedIn) {
            return (

                <View style={styles.wrap}>
                    {/* ログアウトボタン */}
                    {/* <TouchableOpacity onPress={() => firebase.auth().signOut()} style={styles.button}>
                        <Text style={styles.logout}>ログアウト</Text>
                    </TouchableOpacity> */}
                </View>

            )
        } else {
            return (<LoginForm />)
        }
    }

    render() {
        return (
            <SafeAreaView>
                <View style={styles.container}>
                    <Text style={styles.buttonTitle}>{this.state.loggedIn ? "匿名でログイン中です" : "匿名認証をする"}</Text>
                </View>
                {this.renderForm()}
                <TouchableOpacity style={styles.button2} onPress={() => {
                    this.props.navigation.navigate('Start')
                }}>
                    <Text style={styles.toppagebutton}>
                        Topページに戻る
                    </Text>
                </TouchableOpacity>
            </SafeAreaView>
        )
    }
}

const styles = {
    // スタイルを記述
    container: {
        marginTop: '50%',
        width: '100%',
        padding: 24,
    },
    button: {
        height: 48,
        borderRadius: 4,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#000',
        width: '60%',
        alignSelf: 'center',
    },
    buttonTitle: {
        fontSize: 17,
        marginLeft: '30%',
        marginRight: '25%',
    },
    logout: {
        color: 'white',
    }
}

export default App;