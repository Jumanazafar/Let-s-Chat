
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyAJZVqblJ-iDDFprtMSjGR9M2Rb_YAvQDs",
      authDomain: "let-s-chat-2a6cb.firebaseapp.com",
      databaseURL: "https://let-s-chat-2a6cb-default-rtdb.firebaseio.com",
      projectId: "let-s-chat-2a6cb",
      storageBucket: "let-s-chat-2a6cb.appspot.com",
      messagingSenderId: "746762685955",
      appId: "1:746762685955:web:89f74ea59feed7cc458836"
    };
    
    // Initialize Firebase
firebase.initializeApp(firebaseConfig);
    
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
