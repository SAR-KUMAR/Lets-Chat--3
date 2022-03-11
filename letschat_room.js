const firebaseConfig = {
    apiKey: "AIzaSyBjQ5uvQ3LOwCXVAEeruIzJo_R4rmG6feY",
    authDomain: "deductive-wares-310407.firebaseapp.com",
    projectId: "deductive-wares-310407",
    storageBucket: "deductive-wares-310407.appspot.com",
    messagingSenderId: "1244603439",
    appId: "1:1244603439:web:f8ceebf5f1e297801ad2da"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  user_name=localStorage.getItem("user_name");
  document.getElementById("user_name").innerHTML = 'Welcome' + user_name + '!';
  
   function addUser()
   {
         room_name=document.getElementById("room_name").value;
  
         firebase.database().ref("/").child(user_name).update({
              pupose:"adding user"
          });
  
          localStorage.setItem("room_name",room_name);
  
          window.location="Letschat_page.html";
  } 
  
  function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
         Room_names = childKey;
        console.log("Room Names -"+Room_names);
        row="<div class='room_name' id="+Room_names+"onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";
        document.getElementById("output").innerHTML +=row;
        });});}
  getData();
  
  function redirectToRoomName(name)
  {
        console.log(name);
        localStorage.setItem("room_name",name);
        window.location="Letschat_page.html";
  }
  
  function logout()
  {
        localStorage.removeItem("user_name");
        localStorage.removeItem("room_name");
        window.location = "index.html";
  }