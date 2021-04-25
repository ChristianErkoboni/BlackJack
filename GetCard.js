var suit = ["Hearts", "Spades", "Diamonds", "Clubs"];
var number = ["2", "3", "4", "5", "6", "7", "8", "9", "10"];

/*var randomSuit = suit[Math.floor(Math.random() * suit.length)];
var randomNumber = number[Math.floor(Math.random() * number.length)];
var cardNumber = Number(randomNumber);*/
var firstCardNumber;
var secondCardNumber;
var newCard = 0;
var startButton = document.getElementById("startButton");
var totalCount = 0;

      function getfirstCard(){
        var randomSuit = suit[Math.floor(Math.random() * suit.length)];
        var randomNumber = number[Math.floor(Math.random() * number.length)];
        var cardNumber = Number(randomNumber);
        document.getElementById("firstCard").innerHTML = cardNumber + " " + "of" + " " + randomSuit;
        firstCardNumber = cardNumber;
        document.getElementById("startButton").disabled = true;
        document.getElementById("hitButton").disabled = false;
        document.getElementById("totalButton").disabled = false;
        document.getElementById("stayButton").disabled = false;
      }

       function getsecondCard(){
        var randomSuit = suit[Math.floor(Math.random() * suit.length)];
        var randomNumber = number[Math.floor(Math.random() * number.length)];
        var cardNumber = Number(randomNumber);
        document.getElementById("secondCard").innerHTML = cardNumber + " " + "of" + " " + randomSuit;
        secondCardNumber = cardNumber;
      }
      
      function addCards(){    
        totalCount = firstCardNumber + secondCardNumber + newCard;
        document.getElementById("firstAdd").innerHTML = totalCount;
         /* totalCount += newCard;
          document.getElementById("firstAdd").innerHTML = totalCount
          */
      }

      function hitCard(){
        var randomSuit = suit[Math.floor(Math.random() * suit.length)];
        var randomNumber = number[Math.floor(Math.random() * number.length)];
        var cardNumber = Number(randomNumber);
        document.getElementById("thirdCard").innerHTML = cardNumber + " " + "of" + " " + randomSuit;
        newCard = cardNumber;

      }
      
      function resetGame(){
         document.getElementById("startButton").disabled = false; 
         document.getElementById("hitButton").disabled = true;
         document.getElementById("totalButton").disabled = true;
         document.getElementById("stayButton").disabled = true;
         document.getElementById("firstCard").innerHTML = " "
         document.getElementById("secondCard").innerHTML = " "
         document.getElementById("thirdCard").innerHTML = " "
         document.getElementById("firstAdd").innerHTML = " "
         totalCount = 0;
         newCard = 0;

      }
    
      function stayPlayerGame(){
          document.getElementById("hitButton").disabled = true;
      }

    
    /*if (startButton.click === false){
        document.getElementById("hitButton").disabled = true;
    }
    */
    /*function reloadGame(){
        location.reload;
    }
    */
