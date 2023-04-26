
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyCKeo6WUve3XkEDKvo-tEbEop4tvrekWxM",
      authDomain: "fight-523d1.firebaseapp.com",
      databaseURL: "https://fight-523d1-default-rtdb.firebaseio.com",
      projectId: "fight-523d1",
      storageBucket: "fight-523d1.appspot.com",
      messagingSenderId: "356690850577",
      appId: "1:356690850577:web:b5f9a85bb04f0d867592b0"
    };
    
    // Initialize Firebase
     firebase.initializeApp(firebaseConfig);
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
 
      console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();
user_name=localStorage.getItem("username");
document.getElementById("User").innerHTML="Welcome"+user_name+"!";
function addroom(){

      room_name=document.getElementById("roomnum").value;
      firebase.database().ref("/").child(room_name).update({
            purpose:"Addingroomname"
      });
localStorage.setItem( "roomnum",room_name);
      window.location="kwitter_page.html";


}
function redirectToRoomName(name)
{
  console.log(name);
  localStorage.setItem("room_name", name);
    window.location = "kwitter_page.html";
}
function logout(){
      localStorage.removeItem("username");
      localStorage.removeItem("roomnum");
      window.location="index.html";
}


