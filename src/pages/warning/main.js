import Vue from 'vue'
import App from './App.vue'
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyAb7dyC4OAKSZaaWHLIS2SlskncyESE6Lg",
  authDomain: "jwatch-8411c.firebaseapp.com",
  databaseURL: "https://jwatch-8411c.firebaseio.com",
  projectId: "jwatch-8411c",
  storageBucket: "jwatch-8411c.appspot.com",
  messagingSenderId: "868452645100",
  appId: "1:868452645100:web:b0ac64ce8f42b75a7dcdc9",
  measurementId: "G-RK4728SNM4"
};
firebase.initializeApp(firebaseConfig);
firebase.analytics();
firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    // ログイン時
    let visitor_name = user.displayName;
    let email = user.email;
    let emailVerified = user.emailVerified;
    let photoURL = user.photoURL;
    let isAnonymous = user.isAnonymous;
    let visior_uid = user.uid;
    let providerData = user.providerData;
    console.log(visitor_name ,email ,emailVerified ,photoURL ,isAnonymous ,visior_uid ,providerData)
  }
})
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')