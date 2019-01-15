// JavaScript eller jQuery
//1. Skapa en button för login


    // Create text with jQuery
  var button = document.createElement("button");
    $("body").append(button);
    var click = document.createTextNode("Click");
    button.appendChild(click);
    button.setAttribute("id","knapp");


/*2. När användaren klickar på button ska följande skapas:
a. Wrapper som har en valfri bakgrundsfärg
i. Den ska vara minst 300px bred
b. En rubrik som skriver ut ”Login” och är centrerat i mitten horizontellt
(text-align:center)
c. Två input rutor för användarnamn och lösenord som täcker hela
bredden av loginwrappern
d. En submit knapp
document.getElementById("uppg8").addEventListener("click", function(){
  console.log("Clicket funkar");
})*/
document.getElementById("knapp").addEventListener("click", function(){
  var logIn = document.createElement("div");
    $("body").append(logIn);
    logIn.setAttribute("id","logIn");
    $("#logIn").css({"width": "500px", "height": "300px", "background-color": "deeppink"});

    var rubrik = $("<h2></h2>").text("LOG IN");

    var input1 = $("<input></input>").text("Text.");

    var input2 = $("<input></input>").text("Text.");

    $("#logIn").append(rubrik, input1, input2);
    $("h2").css({"text-align": "center", "color": "aqua", "padding-top": "25px"});
    $("input").css({"width": "100%", "margin-bottom": "20px"});

    var submit = $("<button></button>").text("Submit");

    $("#logIn").append(submit);
    $("button").css({"width": "100%", "margin-bottom": "20px"});
});

  /*var username = $(document).val(function(){

  });*/
    //var password =
    //var a = document.getElementsByTagName(”div”);

    /*if (input1 === "Steve" && input2 === "123") {
      $("button").click(function (){
        alert("JAAAAAAAAAAAAAAAAAAAAA");
      });
    } else {
      alert("Oh, no! Försök igen!");
    }





/*var rubrik = document.createElement("h1");
var h2 = document.createTextNode("Log In");
rubrik.setAttribute("id","rubrik");
rubrik.append(h2);*/
/*
3. När användaren klickar på submit knappen ska en alert komma upp med
valfri text.
Väl Godkänd
4. Se till att submitknappen endast tar användaren vidare om denne skriver in
”Steve” som användare och 123 som lösenord.
a. Se till att ett felmeddelande kommer upp om man skrivit in fel
användarnamn eller lösenord (”oops fel, try again”).
5. Hämta albumdata från API:et JsonPlaceHolder -> user -> och dess email.
a. Skriv ut emailet för albumdatan på webbplatsen med en lämplig
rubrik som säger ”email: ” och sen [emailet från jsonPlaceHolder*/
