function login(){
    localStorage.setItem("username", document.getElementById("username").value);
    console.log(localStorage.getItem("username"));
    window.location = "room.html";
}