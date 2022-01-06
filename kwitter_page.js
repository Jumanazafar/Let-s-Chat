//YOUR FIREBASE LINKS
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
    room_name=localStorage.getItem("roomname");
    document.getElementById("room").innerHTML="Roomname: "+room_name+" !";

    function send(){
          msg=document.getElementById("msg").value;
          firebase.database().ref(room_name).push({
                name:username,
                message:msg,
                like:0
          });
          document.getElementById("msg").value="";
    }
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
name=message_data['name'];
message=message_data['message'];
like=message_data['like'];
name_with_tag = "<h4> "+ name +"<img class='user_tick' src='tick.png'>";
message_with_tag = "<h4 class='message_h4'>" + message + "</h4>";
like_button ="<button class='btn btn-warning' id="+firebase_message_id+" value="+like+" onclick='updateLike(this.id)'>";
span_with_tag = "<span class='glyphicon glyphicon-thumbs-up'>Like: "+ like +"</span></button><hr>";
row=name_with_tag+message_with_tag+like_button+span_with_tag;
document.getElementById("output").innerHTML+=row;
//End code
      } });  }); }
getData();
function updateLike(message_id){
      button_id=message_id;
      like=document.getElementById(button_id).value;
      updatedlike=Number(likes)+1;
      firebase.database().ref(room_name).child(message_id).update({
            like:updatedlike
      });

}
function logout(){
      localStorage.removeItem("username");
      
            localStorage.removeItem("roomname");
             window.location="index.html";
}

