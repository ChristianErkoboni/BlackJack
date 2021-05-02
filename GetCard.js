var suit = ["Hearts", "Spades", "Diamonds", "Clubs"];
var number = ["2", "3", "4", "5", "6", "7", "8", "9", "10"];


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
      
      function hitCard(){
        var p = document.createElement("P");
        var randomSuit = suit[Math.floor(Math.random() * suit.length)];
        var randomNumber = number[Math.floor(Math.random() * number.length)];
        var cardNumber = Number(randomNumber);
        var textNode = document.createTextNode(cardNumber + " " + "of" + " " + randomSuit);
        p.appendChild(textNode);
        document.getElementById("thirdCard").appendChild(p);
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
         document.getElementById("message").innerHTML = " "
         document.getElementById("dealerLostMessage").innerHTML = " "
         totalCount = 0;
         newCard = 0;
         totalCardNumber.splice(0, totalCardNumber.length);
         dealerTotal.splice(0, dealerTotal.length);


      }
    
      function stayPlayerGame(){
          document.getElementById("hitButton").disabled = true;
          document.getElementById("stayButton").disabled = true;
          var randomSuit = suit[Math.floor(Math.random() * suit.length)];
          document.getElementById("dealersSecondCard").innerHTML = dealerSecondCardNumber + " " + "of" + " " + randomSuit;
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
        var randomNumber = number[Math.floor(Math.random() * number.length)];
        var cardNumber = Number(randomNumber);
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
        document.getElementById("dealersHitCard").appendChild(p);
        dealerTotal.push(cardNumber);
        var sumOfDealerCards = dealerTotal.reduce(function(a, b){
          return a + b;
        }, 0);
        document.getElementById("dealersAdd").innerHTML = sumOfDealerCards;
      }

      function dealerTotalCard(){
        var sumOfDealerCards = dealerTotal.reduce(function(a, b){
          return a + b;
        }, 0);
       
        document.getElementById("dealersAdd").innerHTML = sumOfDealerCards;
      
      
        while (sumOfDealerCards < 16){
          dealerHit();
          var sumOfDealerCards = dealerTotal.reduce(function(a, b){
            return a + b;
          }, 0);
          document.getElementById("dealersAdd").innerHTML = sumOfDealerCards;
        }
        if (sumOfDealerCards > 21){
           document.getElementById("dealerLostMessage").innerHTML = "The Dealer Went Over 21! You Win!";

        } else {
          compareTotalCards();
        }
        
        


        /*var sumOfCards = totalCardNumber.reduce(function(a, b){
          return a + b;
        }, 0);

        if (sumOfCards > sumOfDealerCards);{
          document.getElementById("message").innerHTML = "You Won!";
        } if (sumOfCards = sumOfDealerCards);{
          document.getElementById("message").innerHTML = "You and the Dealer Pushed!";
        } if (sumOfCards < sumOfDealerCards); {
          document.getElementById("message").innerHTML = "You Lost!"
        }
        */
      }

      function compareTotalCards(){
        var sumOfCards = totalCardNumber.reduce(function(a, b){
          return a + b;
        }, 0);
        var sumOfDealerCards = dealerTotal.reduce(function(a, b){
          return a + b;
        }, 0);

        if (sumOfCards > sumOfDealerCards){
          document.getElementById("message").innerHTML = "You Won!"
        } else if (sumOfCards < sumOfDealerCards){
          document.getElementById("message").innerHTML = "You Lose!"
        } else if (sumOfCards === sumOfDealerCards){
          document.getElementById("message").innerHTML = "You and the Dealer Pushed!"
        }

      }
        
      

     
    