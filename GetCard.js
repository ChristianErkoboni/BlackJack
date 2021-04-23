var suit = ["Hearts", "Spades", "Diamonds", "Clubs"];
var number = ["2", "3", "4", "5", "6", "7", "8", "9", "10"];

/*var randomSuit = suit[Math.floor(Math.random() * suit.length)];
var randomNumber = number[Math.floor(Math.random() * number.length)];
var cardNumber = Number(randomNumber);*/
var firstCardNumber;
var secondCardNumber;



      function getfirstCard(){
        var randomSuit = suit[Math.floor(Math.random() * suit.length)];
        var randomNumber = number[Math.floor(Math.random() * number.length)];
        var cardNumber = Number(randomNumber);
        document.getElementById("firstCard").innerHTML = cardNumber + " " + "of" + " " + randomSuit;
        firstCardNumber = cardNumber;
        document.getElementById("startButton").disabled = true;
      }

       function getsecondCard(){
        var randomSuit = suit[Math.floor(Math.random() * suit.length)];
        var randomNumber = number[Math.floor(Math.random() * number.length)];
        var cardNumber = Number(randomNumber);
        document.getElementById("secondCard").innerHTML = cardNumber + " " + "of" + " " + randomSuit;
        secondCardNumber = cardNumber;
      }
      
      function addCards(){ 
        var totalCount;   
        totalCount = firstCardNumber + secondCardNumber;
          document.getElementById("firstAdd").innerHTML = totalCount;
      }
      
      function resetGame(){
         document.getElementById("startButton").disabled = false; 
         document.getElementById("hitButton").disabled = false;
         document.getElementById("firstCard").innerHTML = " "
         document.getElementById("secondCard").innerHTML = " "
         document.getElementById("firstAdd").innerHTML = " "

      }
    
      function stayPlayerGame(){
          document.getElementById("hitButton").disabled = true;
      }