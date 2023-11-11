const firebaseConfig = {
    apiKey: "AIzaSyAVqSI7iDqDr7JSr8Eyxta7tuuemVpBauA",
    authDomain: "chat-250ca.firebaseapp.com",
    databaseURL: "https://chat-250ca-default-rtdb.firebaseio.com",
    projectId: "chat-250ca",
    storageBucket: "chat-250ca.appspot.com",
    messagingSenderId: "902858978305",
    appId: "1:902858978305:web:560746d6cf505232d0fc00",
    measurementId: "G-X6SGF1PB8P"
  };
firebase.initializeApp(firebaseConfig);



document.getElementById("room_heading").innerHTML="You are in room no."+localStorage.getItem("roomname");
username = localStorage.getItem("username");
roomname = localStorage.getItem("roomname");

function send(){
    data = document.getElementById("msg").value;
    if(!data == ""){
    firebase.database().ref(roomname).push({
        name:username,
        message:data,
        like:0
    });
    document.getElementById("msg").innerHTML="";

    document.getElementById("chat").innerHTML="";
    a = "<label style='font-size:13px;'>"+username+"</label>";
    b = "<label style='font-size:25px;'>"+data+"</label>"
    c = "<button>"+Like+"</button>";
}
}
//getData

function getData() { firebase.database().ref("/"+roomname).on('value', function(snapshot) { document.getElementById("chat").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
    firebase_message_id = childKey;
    message_data = childData;
    console.log(firebase_message_id);
      console.log(message_data);
      name = message_data['name'];
      message = message_data['message'];
    like = message_data['like'];
    name_with_tag = "<h4> "+ name +"<img class='user_tick' src='tick.png'></h4>";
    message_with_tag = "<h4 class='message_h4'>" + message + "</h4>";
like_button ="<button class='btn btn-warning' id="+firebase_message_id+" value="+like+" onclick='updateLike(this.id)'>";
    span_with_tag = "<span class='glyphicon glyphicon-thumbs-up'>Like: "+ like +"</span></button><hr>";

   row = name_with_tag + message_with_tag +like_button + span_with_tag;       
   document.getElementById("chat").innerHTML += row;
}})})}
getData()