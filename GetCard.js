var suit = ["Hearts", "Spades", "Diamonds", "Clubs"];
var number = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "11"];
var faceCardandTens = ["10", "Jack", "Queen", "King"];
var aces = ["Ace"];

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
var dealerNewCard = 0;

      function getfirstCard(){
        var randomSuit = suit[Math.floor(Math.random() * suit.length)];
        var randomNumber = number[Math.floor(Math.random() * number.length)];
        var cardNumber = Number(randomNumber);
        //document.getElementById("firstCard").innerHTML = cardNumber + " " + "of" + " " + randomSuit;
        firstCardNumber = cardNumber;
        totalCardNumber.push(firstCardNumber);
        document.getElementById("startButton").disabled = true;
        document.getElementById("hitButton").disabled = false;
        document.getElementById("stayButton").disabled = false;
        if (firstCardNumber === 11){
          document.getElementById("firstCard").innerHTML = "Ace" + " " + "of" + " " + randomSuit;
        } else if (firstCardNumber === 10){
          var randomFaceCard = faceCardandTens[Math.floor(Math.random() * faceCardandTens.length)];
          document.getElementById("firstCard").innerHTML = randomFaceCard + " " + "of" + " " + randomSuit;
        } else {
          document.getElementById("firstCard").innerHTML = firstCardNumber + " " + "of" + " " + randomSuit;
        }
      }

       function getsecondCard(){
        var randomSuit = suit[Math.floor(Math.random() * suit.length)];
        var randomNumber = number[Math.floor(Math.random() * number.length)];
        var cardNumber = Number(randomNumber);
        //document.getElementById("secondCard").innerHTML = cardNumber + " " + "of" + " " + randomSuit;
        secondCardNumber = cardNumber;
        totalCardNumber.push(secondCardNumber);
        if (secondCardNumber === 11){
          document.getElementById("secondCard").innerHTML = "Ace" + " " + "of" + " " + randomSuit;
        } else if (secondCardNumber === 10){
          var randomFaceCard = faceCardandTens[Math.floor(Math.random() * faceCardandTens.length)];
          document.getElementById("secondCard").innerHTML = randomFaceCard + " " + "of" + " " + randomSuit;
        } else {
          document.getElementById("secondCard").innerHTML = secondCardNumber + " " + "of" + " " + randomSuit;
        }
        var sumOfCards = totalCardNumber.reduce(function(a, b){
          return a + b;
        }, 0);
        document.getElementById("firstAdd").innerHTML = sumOfCards;
        if (sumOfCards === 21){
          document.getElementById("message").innerHTML = "You Got BlackJack! You Win."
          document.getElementById("hitButton").disabled = true;
          document.getElementById("stayButton").disabled = true;
        } else if (sumOfCards > 21){
          var index = totalCardNumber.indexOf(11);
            if (index !== -1){
              totalCardNumber[index] = 1;
              var sumOfCards = totalCardNumber.reduce(function(a, b){
                return a + b;
              }, 0);
              document.getElementById("firstAdd").innerHTML = sumOfCards;
            }
        }
      }
      
      function hitCard(){
        var p = document.createElement("P");
        var randomSuit = suit[Math.floor(Math.random() * suit.length)];
        var randomNumber = number[Math.floor(Math.random() * number.length)];
        var cardNumber = Number(randomNumber);
        totalCardNumber.push(cardNumber);
        if (cardNumber === 11){
          document.getElementById("thirdCard").innerHTML = "Ace" + " " + "of" + " " + randomSuit;
        } else if (cardNumber === 10){
          var randomFaceCard = faceCardandTens[Math.floor(Math.random() * faceCardandTens.length)];
          var textNode = document.createTextNode(randomFaceCard + " " + "of" + " " + randomSuit);
        p.appendChild(textNode);
        document.getElementById("thirdCard").appendChild(p);
        } else {
          var textNode = document.createTextNode(cardNumber + " " + "of" + " " + randomSuit);
        p.appendChild(textNode);
        document.getElementById("thirdCard").appendChild(p);
        }
        /*var textNode = document.createTextNode(cardNumber + " " + "of" + " " + randomSuit);
        p.appendChild(textNode);
        document.getElementById("thirdCard").appendChild(p); */
        //totalCardNumber.push(cardNumber);
        var sumOfCards = totalCardNumber.reduce(function(a, b){
          return a + b;
        }, 0);
        document.getElementById("firstAdd").innerHTML = sumOfCards;

        if (sumOfCards > 21){
          var index = totalCardNumber.indexOf(11);
            if (index !== -1){
              totalCardNumber[index] = 1;
              var sumOfCards = totalCardNumber.reduce(function(a, b){
                return a + b;
              }, 0);
              document.getElementById("firstAdd").innerHTML = sumOfCards;
            } else {
              document.getElementById("lostMessage").innerHTML = "You Went Over 21! Try Again.";
              document.getElementById("hitButton").disabled = true;
              document.getElementById("stayButton").disabled = true;
            }
        }
      }
      
      function stayPlayerGame(){
          document.getElementById("hitButton").disabled = true;
          document.getElementById("stayButton").disabled = true;
          var randomSuit = suit[Math.floor(Math.random() * suit.length)];
          //document.getElementById("dealersSecondCard").innerHTML = dealerSecondCardNumber + " " + "of" + " " + randomSuit;
          if (dealerSecondCardNumber === 11){
            document.getElementById("dealersSecondCard").innerHTML = "Ace" + " " + "of" + " " + randomSuit;
          } else if (dealerSecondCardNumber === 10){
            var randomFaceCard = faceCardandTens[Math.floor(Math.random() * faceCardandTens.length)];
            document.getElementById("dealersSecondCard").innerHTML = randomFaceCard + " " + "of" + " " + randomSuit;
          } else {
            document.getElementById("dealersSecondCard").innerHTML = dealerSecondCardNumber + " " + "of" + " " + randomSuit;
          }
          var sumOfCards = totalCardNumber.reduce(function(a, b){
            return a + b;
          }, 0);
          document.getElementById("firstAdd").innerHTML = sumOfCards;
          
          if (sumOfDealerCards > 21){
            var index = dealerTotal.indexOf(11);
              if (index !== -1){
                dealerTotal[index] = 1;
                var sumOfDealerCards = dealerTotal.reduce(function(a, b){
                  return a + b;
                }, 0);
                document.getElementById("dealersAdd").innerHTML = sumOfDealerCards;
              } 
          }
      }

      
      
      
      function dealersFirstCard(){
        var randomSuit = suit[Math.floor(Math.random() * suit.length)];
        var randomNumber = number[Math.floor(Math.random() * number.length)];
        var cardNumber = Number(randomNumber);
        //document.getElementById("dealersFirstCard").innerHTML = cardNumber + " " + "of" + " " + randomSuit;
        dealerFirstCardNumber = cardNumber;
        dealerTotal.push(dealerFirstCardNumber);
        if (dealerFirstCardNumber === 11){
          document.getElementById("dealersFirstCard").innerHTML = "Ace" + " " + "of" + " " + randomSuit;
        } else if (dealerFirstCardNumber === 10){
          var randomFaceCard = faceCardandTens[Math.floor(Math.random() * faceCardandTens.length)];
          document.getElementById("dealersFirstCard").innerHTML = randomFaceCard + " " + "of" + " " + randomSuit;
        } else {
          document.getElementById("dealersFirstCard").innerHTML = dealerFirstCardNumber + " " + "of" + " " + randomSuit;
        }
      }

      
      function dealersSecondCard(){
        var randomNumber = number[Math.floor(Math.random() * number.length)];
        var cardNumber = Number(randomNumber);
        dealerSecondCardNumber = cardNumber;
        dealerTotal.push(dealerSecondCardNumber);
        var sumOfCards = totalCardNumber.reduce(function(a, b){
          return a + b;
        }, 0);
        var sumOfDealerCards = dealerTotal.reduce(function(a, b){
          return a + b;
        }, 0);
        if (sumOfDealerCards === 21 && sumOfCards === 21){
          document.getElementById("message") = "You and the Dealer Both have BlackJack!"
          document.getElementById("hitButton").disabled = true;
          document.getElementById("stayButton").disabled = true;
        } else if (sumOfCards === 21){
          document.getElementById("message") = "You have BlackJack!"
          document.getElementById("hitButton").disabled = true;
          document.getElementById("stayButton").disabled = true;
        } else if (sumOfDealerCards === 21){
          document.getElementById("message") = "The Dealer has BlackJack! You Lose."
          document.getElementById("stayButton").disabled = true;
          document.getElementById("hitButton").disabled = true;
        }
      }

      
      function dealerHit(){
        var p = document.createElement("P");
        var randomSuit = suit[Math.floor(Math.random() * suit.length)];
        var randomNumber = number[Math.floor(Math.random() * number.length)];
        var cardNumber = Number(randomNumber);
        dealerNewCard = cardNumber;
        dealerTotal.push(dealerNewCard);
        if (cardNumber === 11){
          document.getElementById("dealersHitCard").innerHTML = "Ace" + " " + "of" + " " + randomSuit;
        } else if (dealerNewCard === 10){
          var randomFaceCard = faceCardandTens[Math.floor(Math.random() * faceCardandTens.length)];
          var textNode = document.createTextNode(randomFaceCard + " " + "of" + " " + randomSuit);
        p.appendChild(textNode);
        document.getElementById("dealersHitCard").appendChild(p);
        } else {
          var textNode = document.createTextNode(dealerNewCard + " " + "of" + " " + randomSuit);
        p.appendChild(textNode);
        document.getElementById("dealersHitCard").appendChild(p);
        }
        var sumOfDealerCards = dealerTotal.reduce(function(a, b){
          return a + b;
        }, 0);
       
        document.getElementById("dealersAdd").innerHTML = sumOfDealerCards;

        if (sumOfDealerCards > 21){
          var index = dealerTotal.indexOf(11);
            if (index !== -1){
              dealerTotal[index] = 1;
              var sumOfDealerCards = dealerTotal.reduce(function(a, b){
                return a + b;
              }, 0);
              document.getElementById("dealersAdd").innerHTML = sumOfDealerCards;
            } else {
              document.getElementById("dealerLostMessage").innerHTML = "Dealer Went Over 21! You Win! Play Again";
            }
        }
    }

      
      
      function dealerTotalCard(){
        var sumOfDealerCards = dealerTotal.reduce(function(a, b){
          return a + b;
        }, 0);
       
        document.getElementById("dealersAdd").innerHTML = sumOfDealerCards;
      
      
        while (sumOfDealerCards < 17){
          dealerHit();
          var sumOfDealerCards = dealerTotal.reduce(function(a, b){
            return a + b;
          }, 0);
          document.getElementById("dealersAdd").innerHTML = sumOfDealerCards;
        }
        if (sumOfDealerCards >= 17 && sumOfDealerCards < 22){
          compareTotalCards();
        }
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