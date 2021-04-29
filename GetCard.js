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
var firstCount = 0;
var totalCardNumber = [];
var dealerTotal = [];
var dealerFirstCardNumber = 0;
var dealerSecondCardNumber = 0;

      function getfirstCard(){
        var randomSuit = suit[Math.floor(Math.random() * suit.length)];
        var randomNumber = number[Math.floor(Math.random() * number.length)];
        var cardNumber = Number(randomNumber);
        document.getElementById("firstCard").innerHTML = cardNumber + " " + "of" + " " + randomSuit;
        firstCardNumber = cardNumber;
        totalCardNumber.push(firstCardNumber);
        document.getElementById("startButton").disabled = true;
        document.getElementById("hitButton").disabled = false;
        //document.getElementById("totalButton").disabled = false;
        document.getElementById("stayButton").disabled = false;
      }

       function getsecondCard(){
        var randomSuit = suit[Math.floor(Math.random() * suit.length)];
        var randomNumber = number[Math.floor(Math.random() * number.length)];
        var cardNumber = Number(randomNumber);
        document.getElementById("secondCard").innerHTML = cardNumber + " " + "of" + " " + randomSuit;
        secondCardNumber = cardNumber;
        totalCardNumber.push(secondCardNumber);
      }
      
      /*function addCards(){   
        var sumOfCards = totalCardNumber.reduce(function(a, b){
          return a + b;
        }, 0);
        //firstCount = firstCardNumber + secondCardNumber;
        //totalCount = firstCount + newCard; 
        document.getElementById("firstAdd").innerHTML = sumOfCards;
          totalCount += newCard;
          document.getElementById("firstAdd").innerHTML = totalCount
          
      }
      */
      function hitCard(){
        var p = document.createElement("P");
        var randomSuit = suit[Math.floor(Math.random() * suit.length)];
        var randomNumber = number[Math.floor(Math.random() * number.length)];
        var cardNumber = Number(randomNumber);
        var textNode = document.createTextNode(cardNumber + " " + "of" + " " + randomSuit);
        p.appendChild(textNode);
        document.getElementById("thirdCard").appendChild(p) //= cardNumber + " " + "of" + " " + randomSuit;
        //newCard = cardNumber;
        totalCardNumber.push(cardNumber);
        var sumOfCards = totalCardNumber.reduce(function(a, b){
          return a + b;
        }, 0);
        document.getElementById("firstAdd").innerHTML = sumOfCards;

        if (sumOfCards >21){
          document.getElementById("lostMessage").innerHTML = "You Went Over 21! Try Again.";
          document.getElementById("hitButton").disabled = true;
        }
      }
      
      function resetGame(){
         document.getElementById("startButton").disabled = false; 
         document.getElementById("hitButton").disabled = true;
         //document.getElementById("totalButton").disabled = true;
         document.getElementById("stayButton").disabled = true;
         document.getElementById("firstCard").innerHTML = " "
         document.getElementById("secondCard").innerHTML = " "
         document.getElementById("thirdCard").innerHTML = " "
         document.getElementById("firstAdd").innerHTML = " "
         document.getElementById("lostMessage").innerHTML = " "
         document.getElementById("dealersFirstCard").innerHTML = " "
         document.getElementById("dealersSecondCard").innerHTML = " "
         document.getElementById("dealersHitCard").innerHTML = " "
         document.getElementById("dealersAdd").innerHTML = " "
         totalCount = 0;
         newCard = 0;
         totalCardNumber.splice(0, totalCardNumber.length);
         dealerTotal.splice(0, dealerTotal.length);


      }
    
      function stayPlayerGame(){
          document.getElementById("hitButton").disabled = true;
          document.getElementById("stayButton").disabled = true;
          var sumOfCards = totalCardNumber.reduce(function(a, b){
            return a + b;
          }, 0);
          document.getElementById("firstAdd").innerHTML = sumOfCards;
      }

      function dealersFirstCard(){
        var randomSuit = suit[Math.floor(Math.random() * suit.length)];
        var randomNumber = number[Math.floor(Math.random() * number.length)];
        var cardNumber = Number(randomNumber);
        document.getElementById("dealersFirstCard").innerHTML = cardNumber + " " + "of" + " " + randomSuit;
        dealerFirstCardNumber = cardNumber;
        dealerTotal.push(dealerFirstCardNumber);
      }

      function dealersSecondCard(){
        var randomSuit = suit[Math.floor(Math.random() * suit.length)];
        var randomNumber = number[Math.floor(Math.random() * number.length)];
        var cardNumber = Number(randomNumber);
        document.getElementById("dealersSecondCard").innerHTML = cardNumber + " " + "of" + " " + randomSuit;
        dealerSecondCardNumber = cardNumber;
        dealerTotal.push(dealerSecondCardNumber);
      }

      function dealerHit(){
        var p = document.createElement("P");
        var randomSuit = suit[Math.floor(Math.random() * suit.length)];
        var randomNumber = number[Math.floor(Math.random() * number.length)];
        var cardNumber = Number(randomNumber);
        var textNode = document.createTextNode(cardNumber + " " + "of" + " " + randomSuit);
        p.appendChild(textNode);
        document.getElementById("dealersHitCard").appendChild(p) //= cardNumber + " " + "of" + " " + randomSuit;
        //newCard = cardNumber;
        dealerTotal.push(cardNumber);
        var sumOfDealerCards = dealerTotal.reduce(function(a, b){
          return a + b;
        }, 0);
        document.getElementById("dealersAdd").innerHTML = sumOfDealerCards;
      }