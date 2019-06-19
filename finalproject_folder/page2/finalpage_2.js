//Script Location: Dice Rollers, Dice Functions, and more
alert('For this portion of the final, get out a pencil and paper. And please write down your and the bosses new health totals after you roll the dice, dont forget to add your stats dice to this! If you rolled above 5 its a flat amount, 10 is doubled, 15 is trippled, 20 is multiplied by 4, and if you get about 25+ then multiply the total by 5. If you are still confused please ask questions since this is still a tabletop to digital game conversion which may need some translating on my part.')
// Dice roller for stats and is shown in various spots on the page
function rollemStats() {
    var die1 = document.getElementById('die1');
    var die2 = document.getElementById('die2');
    var diceView = document.getElementById('diceView');
    var stats = document.getElementById('stat');
    var roll1a = Math.floor(Math.random() * 6) + 1;
    var roll2a = Math.floor(Math.random() * 6) + 1;
    var rollTotala = roll1a + roll2a;
    die1.innerHTML = roll1a  
    die2.innerHTML = roll2a
    diceView.innerHTML = 'You got a '+'~'+rollTotala+'!'
    var roll1b = Math.floor(Math.random() * 6) + 1;
    var roll2b = Math.floor(Math.random() * 6) + 1;
    var rollTotalb = roll1b + roll2b;
    die1.innerHTML = roll1b  
    die2.innerHTML = roll2b
    diceView2.innerHTML = 'You got a '+'~'+rollTotalb+'!'
    var roll1c = Math.floor(Math.random() * 6) + 1;
    var roll2c = Math.floor(Math.random() * 6) + 1;
    var rollTotalc = roll1c + roll2c;
    die1.innerHTML = roll1c  
    die2.innerHTML = roll2c
    diceView3.innerHTML = 'You got a '+'~'+rollTotalc+'!'
    var roll1d = Math.floor(Math.random() * 6) + 1;
    var roll2d = Math.floor(Math.random() * 6) + 1;
    var rollTotald = roll1d + roll2d;
    die1.innerHTML = roll1d  
    die2.innerHTML = roll2d
    diceView4.innerHTML = 'You got a '+'~'+rollTotald+'!'
    roll1 = [roll1a, roll1b, roll1c, roll1d]
    roll2 = [roll2a, roll2b, roll2c, roll2d]
    rollTotal = [rollTotala, rollTotalb, rollTotalc, rollTotald]
    // Cascade die roll, whenever you roll a 6 you get to roll again and add that to the total
    if(roll1 == 6 || roll2 == 6 || rollX == 6) {
        var rollX = Math.floor(Math.random() * 6) + 1;
        rollTotal += rollTotal + rollX
        diceView.innerHTML = 'You have cascaded your total is '+''+rollTotal+'!'
    };
    const statTotal = [rollTotala, rollTotalb, rollTotalc,rollTotald]
    stats.innerHTML = 'Your stats are'+'~'+statTotal+'.'
}
// Dice roller for attacks (four unique attacks per each stat, its just a different kind of thing per roll not a function... so like chutzpah is an insult, brawn is a round house kick, etc)
function rollemAttack(rollTotala, rollTotalb, rollTotalc, rollTotald, playerHealth, bossHealth) {
    var die4 = document.getElementById('die4');
    var die5 = document.getElementById('die5');
    var die6 = document.getElementById('die6');
    var diceView2 = document.getElementById('diceView5');
    var diceView2 = document.getElementById('diceView6');
    var diceView2 = document.getElementById('diceView7');
    var diceView2 = document.getElementById('diceView8');
    var roll4 = Math.floor(Math.random() * 6) + 1;
    var roll5 = Math.floor(Math.random() * 6) + 1;
    var roll6 = Math.floor(Math.random() * 6) + 1;
    var rollTotal2 = roll4 + roll5 + roll6;
    die4.innerHTML = roll4  
    die5.innerHTML = roll5
    die6.innerHTML = roll6
    diceView2.innerHTML = 'You got a '+'~'+rollTotal2+'!'
    // Cascade die roll, whenever you roll a 6 you get to roll again and add that to the total
    if(roll4 == 6 || roll5 == 6 || roll6 == 6 || rollX == 6) {
        var rollX = Math.floor(Math.random() * 6) + 1;
        rollTotal2 += rollTotal2 + rollX
        diceView2.innerHTML = 'You have cascaded your total is '+rollTotal2+'!'+''
    };   
// Bill section
    var diceviewBill = document.getElementById('diceviewBill');
    var rollBill = Math.floor(Math.random() * 100) + 1;
    var deathToll = rollBill
    diceviewBill.innerHTML = 'Bill slams you for '+deathToll+' damage, your end is near!'
// Bills cascade
    if(deathToll == 25 || deathToll == 50 || deathToll == 75 || deathToll == 100) {
        var rollBillx = Math.floor(Math.random() * 100) + 1;
        deathToll += deathToll + rollBillx
        diceviewBill.innerHTML = 'Bill has cascaded for '+deathToll+' you were never prepared for this.'
    };
//  Stop here for working code, due to time constraints i have no more time to fix it... so be prepared for some audiance participation :)
 
    // health bars for both player and bill
//  playerHealth = 0
//  bossHealth = 0
 
//  // Bill just rolls straight damage
//  bossDamage = deathToll
//  // var healthChange = document.getElementById('lifeChange');
//  // healthChange.innerHTML = 'You have been damaged, your hp is now, ' + playerHealth;
//  // Player rolls damage in tiers based on what they roll
//  if(rollTotal2 == 5) {
//      playerDamage = (rollTotala || rollTotalb || rollTotalc || rollTotald) + rollTotal2
//  };
//  if(rollTotal2 == 10) {
//      playerDamage = ((rollTotala || rollTotalb || rollTotalc || rollTotald) + rollTotal2) * 2
//  };
//  if(rollTotal2 == 15) {
//      playerDamage = ((rollTotala || rollTotalb || rollTotalc || rollTotald) + rollTotal2) * 3
//  };
//  if(rollTotal2 == 20) {
//      playerDamage = ((rollTotala || rollTotalb || rollTotalc || rollTotald) + rollTotal2) * 4
//  }
//  else(rollTotal2 > 20); {
//      playerDamage = ((rollTotala || rollTotalb || rollTotalc || rollTotald) + rollTotal2) * 5
//  };
 
//  while(playerHealth < 9999 && bossHealth < 100000) {
//      playerHealth += playerHealth + bossDamage
//      bossHealth += bossHealth + playerDamage
     
//      // var healthChange = document.getElementById('lifeChange').innerHTML = 'Round one, your hp is now, '+playerHealth+'and bill has '+bossHealth;
//      alert('Round one, your and bills hp is now!');
//      alert(playerHealth);
//      alert('and');
//      alert(bossHealth);
//  };
//  if(playerHealth >= 9999) {
//      alert('You have lost the battle');
//  };
//  if(bossHealth >= 100000) {
//      alert('You have won the battle, PACHOOOOOOOOOOOOOOOOOOOOOOOOOOOOO            O!');
//  };
    
};
// test area
// function Damage(deathToll,rollTotal2,rollTotala, rollTotalb, rollTotalc, rollTotald) {
//         // health bars for both player and bill
//         playerHealth = 0
//         bossHealth = 0
        
//         // Bill just rolls straight damage
//         bossDamage = deathToll
//         // var healthChange = document.getElementById('lifeChange');
//         // healthChange.innerHTML = 'You have been damaged, your hp is now, ' + playerHealth;
//         // Player rolls damage in tiers based on what they roll
//         if(rollTotal2 == 5) {
//             playerDamage = (rollTotala || rollTotalb || rollTotalc || rollTotald) + rollTotal2
//         };
//         if(rollTotal2 == 10) {
//             playerDamage = ((rollTotala || rollTotalb || rollTotalc || rollTotald) + rollTotal2) * 2
//         };
//         if(rollTotal2 == 15) {
//             playerDamage = ((rollTotala || rollTotalb || rollTotalc || rollTotald) + rollTotal2) * 3
//         };
//         if(rollTotal2 == 20) {
//             playerDamage = ((rollTotala || rollTotalb || rollTotalc || rollTotald) + rollTotal2) * 4
//         }
//         else(rollTotal2 > 20); {
//             playerDamage = ((rollTotala || rollTotalb || rollTotalc || rollTotald) + rollTotal2) * 5
//         };
        
//         while(playerHealth < 9999 && bossHealth < 100000) {
//             playerHealth += playerHealth + bossDamage
//             bossHealth += bossHealth + playerDamage
            
//             // var healthChange = document.getElementById('lifeChange').innerHTML = 'Round one, your hp is now, '+playerHealth+'and bill has '+bossHealth;
//             alert('Round one, your hp is now, '+playerHealth+'and bill has '+bossHealth);
//         };
//         if(playerHealth >= 9999) {
//             alert('You have lost the battle');
//         };
//         if(bossHealth >= 100000) {
//             alert('You have won the battle, PACHOOOOOOOOOOOOOOOOOOOOOOOOOOOOO            O!');
//         };
// };

// Damage();

// testing code
// console.log(bossHealth);