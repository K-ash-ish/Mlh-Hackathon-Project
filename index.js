
 // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyDp2F8NfS48hnAqUr6qWwXylbP9TEs6dgk",
    authDomain: "greet-without-meet.firebaseapp.com",
    databaseURL: "https://greet-without-meet-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "greet-without-meet",
    storageBucket: "greet-without-meet.appspot.com",
    messagingSenderId: "436346178021",
    appId: "1:436346178021:web:bdbca224ed7e75b821870c",
    measurementId: "G-Z7CHX34EKL"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();
 

  var messagesRef = firebase.database().ref("messages");


//Listen for form submit
document.getElementById('user-details').addEventListener("submit", submitForm);

// submit form button
function  submitForm(e){
    e.preventDefault();

    var name = getInputValue("name");
    document.getElementById("username").textContent=name;

    var email = getInputValue("email");

    var wish = getInputValue("wish");
    document.getElementById("wishes").textContent=wish;

    var gift = getInputValue("gift");
    document.getElementsByClassName("surprise-message").textContent=gift;

    saveMessage(name, email, wish, gift);
    
    //show alert
    document.querySelector(".alert").style.display="block";

    setTimeout(() => {
        document.querySelector(".alert").style.display="none";
    }, 2000);

    document.getElementById("name-label").value=" ";
}

//function to get form values
function getInputValue(id){
    return document.getElementById(id).value;
}

//save in firebase

function saveMessage(name, email, wish, gift){
    var newMessageRef = messagesRef.push();
    newMessageRef.set({
        name : name,
        email: email,
        wish: wish,
        gift: gift
    });
}



/*
firebase.database().ref('messagesRef').limitToLast(1).once('value')
.then(function(snapshot) {
     snapshot.forEach(function(childSnapshot) {
         console.log(childSnapshot.val());
     });
});





    ////getting data back
    
  firebase.database().ref(messagesRef).limitToLast(1).once('value')
.then(function(snapshot) {
     snapshot.forEach(function(childSnapshot) {
         console.log(childSnapshot.val());
        
        //to change name
        var name = childSnapshot.val().name;
        setName(name);
        var wish = childSnapshot.val().wish;
        console.log(wish);
        setWish(wish);
     });
});

function setName(name){
    
        document.getElementById("username").textContent=name;

}
function setWish(wish){
    
    document.getElementById("wish").textContent=wish;

}
*/
