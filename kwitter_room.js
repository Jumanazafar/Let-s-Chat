
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
    
username=localStorage.getItem("username");
document.getElementById("username").innerHTML="Welcome "+username+" !";

function addroom(){
      roomname=document.getElementById("roomname").value;
      firebase.database().ref("/").child(roomname).update({
            purpose:"addingroomname"
      });
      localStorage.setItem("roomname",roomname);
      window.location="kwitter_page.html";

}
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML+=row;

      //End code
      });});}
getData();

function redirectToRoomName(name){
      console.log(name);
      localStorage.setItem("roomname",name);
      window.location="kwitter_page.html";
}
function logout(){
      localStorage.removeItem("username");
      
            localStorage.removeItem("roomname");
             window.location="index.html";
}