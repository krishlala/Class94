
var firebaseConfig = {
    apiKey: "AIzaSyDyC545eHD6mJbhl58f2L9u9SQRpajfgGA",
    authDomain: "kwitter-68077.firebaseapp.com",
    projectId: "kwitter-68077",
    storageBucket: "kwitter-68077.appspot.com",
    messagingSenderId: "243452173023",
    appId: "1:243452173023:web:ad761df00fa6e77c53676a"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

function addUser()
{
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose : "adding user"
    });
}