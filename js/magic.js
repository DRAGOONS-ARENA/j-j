//////////////////// Elements \\\\\\\\\\\\\\\\\\\\

const name = document.getElementById("name");
const setting = document.getElementById("setting");
const list = document.getElementById("list");
const extra = document.getElementById("extra");
const textarea = document.getElementById("textarea");
const send = document.getElementById("send");

/////////////////// \\\\\\\\\\\\\\\\\\\\


var provider = new firebase.auth.GoogleAuthProvider();




////////////////////Firebase\\\\\\\\\\\\\\\\\\\\

// Initialize Firebase
var config = {
  apiKey: "AIzaSyCcYtYWs3RUM750MrlzMadIbFtA4pl3WcI",
  authDomain: "chat-b8836.firebaseapp.com",
  databaseURL: "https://chat-b8836.firebaseio.com",
  projectId: "chat-b8836",
  storageBucket: "chat-b8836.appspot.com",
  messagingSenderId: "245357354817"
};
firebase.initializeApp(config);

var Auth = firebase.auth();

//////////////////// \\\\\\\\\\\\\\\\\\\\


//////////////////// Event Listeners \\\\\\\\\\\\\\\\\\\\

login.addEventListener('click', e => login() );

//////////////////// \\\\\\\\\\\\\\\\\\\\

//////////////////// Functions \\\\\\\\\\\\\\\\\\\\

function login() {

Auth.signInWithRedirect (provider);

Auth.getRedirectResult()
      .then(function (result) {});
      .catch(function (error) {});

}

/////////////////// \\\\\\\\\\\\\\\\\\\\