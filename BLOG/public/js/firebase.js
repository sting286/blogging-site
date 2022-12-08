let firebaseConfig = {
    apiKey: "AIzaSyBzoUB0xEa0T-eXamKi6ms5R9dpPXZvto4",
    authDomain: "blog-website-4f165.firebaseapp.com",
    projectId: "blog-website-4f165",
    storageBucket: "blog-website-4f165.appspot.com",
    messagingSenderId: "899846157700",
    appId: "1:899846157700:web:0c66ba63071e5438c599d1",
    measurementId: "G-N9TRF4Y4KP"
};

firebase.initializeApp(firebaseConfig);

let db = firebase.firestore();