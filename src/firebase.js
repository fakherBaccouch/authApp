import firebase from 'firebase/app';
import 'firebase/auth';
 const app = firebase.initializeApp(
     {
        apiKey: "AIzaSyBJsbv_smF6Wb37tKKsQNiLKLulJazIhWY",
        authDomain: "auth-dev-e236f.firebaseapp.com",
        databaseURL: "https://auth-dev-e236f.firebaseio.com",
        projectId: "auth-dev-e236f",
        storageBucket: "auth-dev-e236f.appspot.com",
        messagingSenderId: "966012881522",
        appId: "1:966012881522:web:df6964fc307a66263f10eb"

     }
 )
 export const auth = app.auth()
 export default app
 