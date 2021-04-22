var suit = ["Hearts", "Spades", "Diamonds", "Clubs"];
var number = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "Jack", "Queen", "King", "Ace"];

var randomSuit = suit[Math.floor(Math.random() * suit.length)];
var randomNumber = number[Math.floor(Math.random() * number.length)];
var cardNumber = Number(randomNumber);
      function getwholeCard(){
        document.getElementById("suit").innerHTML = cardNumber + " " + "of" + " " + randomSuit;
      }