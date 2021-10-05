//import app from "firebase/app";
import app from "firebase/compat/app";
import "firebase/compat/auth";
const config = {
    apiKey: "AIzaSyA6WZDMyxRUqL7-YCBC4LRaodL2aEl4OvI",
    authDomain: "marvel-quiz-f733d.firebaseapp.com",
    projectId: "marvel-quiz-f733d",
    storageBucket: "marvel-quiz-f733d.appspot.com",
    messagingSenderId: "454956740764",
    appId: "1:454956740764:web:fe4ede8bb0d1ae5d9a7d59",
};
class Firebase {
    constructor() {
        app.initializeApp(config);
        this.auth = app.auth();
    }

    // inscription
    signupuser = (email, password) => {
        this.auth.createUserWithEmailAndPassword(email, password);
    };
    // connexion
    loginuser = (email, password) => {
        this.auth.signInWithEmailAndPassword(email, password);
    };
    // Deconnexion
    signoutUser = () => {
        this.auth.signOut();
    };
}

export default Firebase;