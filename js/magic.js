var provider = new firebase.auth.GoogleAuthProvider();





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

var login= document.getElementById('login');

login.addEventListener('click', e => {
firebase.auth().signInWithRedirect(provider);
firebase.auth().getRedirectResult()
               .then(function (user) {
               console.log(user);
               })
               .catch(function (err) {
               console.log(err.message)
               });
});