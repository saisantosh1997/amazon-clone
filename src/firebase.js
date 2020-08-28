import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyCk1FDxAmT2qYOf3YXQzrXJ92SHGIkouSs",
  authDomain: "clone-ef8f5.firebaseapp.com",
  databaseURL: "https://clone-ef8f5.firebaseio.com",
  projectId: "clone-ef8f5",
  storageBucket: "clone-ef8f5.appspot.com",
  messagingSenderId: "623191348385",
  appId: "1:623191348385:web:a25029dbc555ca62604ce0",
  measurementId: "G-P7FLLM913N",
});

const auth = firebase.auth();

export { auth };
