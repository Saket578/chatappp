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
  
  username = localStorage.getItem("username");
  document.getElementById("user").innerHTML = "Welcome " + username + "!";
  
  function addRoom()
  {
    roomname = document.getElementById("rooms").value;
  
    firebase.database().ref("/").child(roomname).update({
      purpose : "adding room name"
    });
  
      localStorage.setItem("roomname", roomname);
      
      window.location = "page.html";
  }
  
  function getData() {  firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("room_display").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
         Room_names = childKey;
         console.log("Room Name - " + Room_names);
        row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
        document.getElementById("room_display").innerHTML += row;
      });
    });
  
  }
  
  getData();
  
  function redirectToRoomName(name)
  {
    console.log(name);
    localStorage.setItem("roomname", name);
      window.location = "page.html";
  }
  
  function logout() {
  localStorage.removeItem("username");
  localStorage.removeItem("roomname");
      window.location = "index.html";
  }