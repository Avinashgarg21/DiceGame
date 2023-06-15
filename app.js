let randomnumber1 = Math.floor(Math.random()*6) + 1;

// https://raw.githubusercontent.com/isaacattuah/DiceGame/master/images/dice6.png

// https://raw.githubusercontent.com/isaacattuah/DiceGame/master/images/dice4.png


let randomDiceImage = "https://raw.githubusercontent.com/isaacattuah/DiceGame/master/images/dice" + randomnumber1 + ".png";

document.querySelectorAll('img')[0].setAttribute("src", randomDiceImage);


let randomnumber2 = Math.floor(Math.random()*6) + 1;

let randomDiceImage2 = "https://raw.githubusercontent.com/isaacattuah/DiceGame/master/images/dice" + randomnumber2 + ".png";

document.querySelectorAll('img')[1].setAttribute("src", randomDiceImage2);


if(randomnumber1 > randomnumber2) { 
    document.querySelectorAll('h1')[1].innerHTML = "Player 1 wins!";
}
else if(randomnumber1 < randomnumber2){
    document.querySelectorAll('h1')[1].innerHTML = "Player 2 wins!";
}
else{
    document.querySelectorAll('h1')[1].innerHTML = "Draw!";
}