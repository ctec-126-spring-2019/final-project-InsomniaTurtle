//Script Location: Dice Rollers, Dice Functions, and more

// Dice roller for stats (Soak and HP Not included)
function rollemStats() {
    var die1 = document.getElementById('die1');
    var die2 = document.getElementById('die2');
    var diceView = document.getElementById('diceView');
    var roll1 = Math.floor(Math.random() * 6) + 1;
    var roll2 = Math.floor(Math.random() * 6) + 1;
    var rollTotal = roll1 + roll2;
    die1.innerHTML = roll1  
    die2.innerHTML = roll2
    rollView.innerHTML = 'You got an'+rollTotal+'!'
    // Cascade die roll, whenever you roll a 6 you get to roll again and add that to the total
    if(roll1 == 6 || roll2 == 6) {
        rollView.innerHTML += 'You got a cascade, roll again!'
    };   
}
// Dice roller for attacks (four unique attacks per each stat, its just a different kind of thing per roll not a function... so like chutzpah is an insult, brawn is a round house kick, etc)
function rollemAttack() {
    var die4 = document.getElementById('die4');
    var die5 = document.getElementById('die5');
    var die6 = document.getElementById('die6');
    var diceView2 = document.getElementById('diceView');
    var roll4 = Math.floor(Math.random() * 6) + 1;
    var roll5 = Math.floor(Math.random() * 6) + 1;
    var roll6 = Math.floor(Math.random() * 6) + 1;
    var rollTotal = roll4 + roll5 + roll6;
    die4.innerHTML = roll4  
    die5.innerHTML = roll5
    die6.innerHTML = roll6
    rollView.innerHTML = 'You got an'+rollTotal+'!'
    // Cascade die roll, whenever you roll a 6 you get to roll again and add that to the total
    if(roll4 == 6 || roll5 == 6 || roll6 == 6) {
        rollView.innerHTML += 'You got a cascade, roll again!'
    };   
}

// roll total for rollemAttack will be applied against health in functions below
// health bar will change colors in an if function

function playerHealth() {

    if(playerHP == 100) {
        $('#playerHealth').css('color','green');
    }

    if(playerHP <= 75) {
        $('#playerHealth').css('color','yellow');
    }

    if(playerHP <= 50) {
        $('#playerHealth').css('color','orange');
    }

    else(playerHP <= 25); {
        $('#playerHealth').css('color','red');
    }
};

function bossHealth() {

    if(bossHP == 1000) {
        $('#bossHP').css('color','green');
    }

    if(bossHP <= 750) {
        $('#bossHP').css('color','yellow');
    }

    if(bossHP <= 500) {
        $('#bossHP').css('color','orange');
    }

    else(bossHP <= 250); {
        $('#bossHP').css('color','red');
    }
};