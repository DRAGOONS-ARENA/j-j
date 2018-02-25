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

/*login.addEventListener('click', e => {
firebase.auth().signInWithRedirect(provider);
firebase.auth().getRedirectResult()
               .then(function (user) {
               console.log(user);
               })
               .catch(function (err) {
               console.log(err.message)
               });
});*/

window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier(login , {
  'size': 'invisible',
  'callback': function(response) {
  console.log('solved')
    // reCAPTCHA solved, allow signInWithPhoneNumber.
    onSignInSubmit();
  }
});

var phoneNumber = '+917209674167';
var appVerifier = window.recaptchaVerifier;
firebase.auth().signInWithPhoneNumber(phoneNumber, appVerifier)
    .then(function (confirmationResult) {
      // SMS sent. Prompt user to type the code from the message, then sign the
      // user in with confirmationResult.confirm(code).
      window.confirmationResult = confirmationResult;
    }).catch(function (error) {
      // Error; SMS not sent
      // ...
    });