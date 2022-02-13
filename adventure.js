console.log ( " i am connected ") ; 

// hero class 
class Hero {
    constructor (name) {
      this.name = name; 
      this.health = 100;
      this.weapons = {
          sprinkleSpray : 5,
          sugarShock : 10
      }
      this.catchPhrases = ['i \' m fresher than day old pizza','you can\'t count my calories']
    }

    talkSass () {
        return this.catchPhrases[Math.floor (Math.random() + 0.5)]
    }

    announceHealth () {
        return this.health;
    }

    fight (enemy) {
        enemy.health -= this.weapons.sprinkleSpray;
        return ("attack with sprinkle spray : " + this.weapons.sprinkleSpray)
    }
}

// create dougie the donut 

const Dougie = new Hero ("Dougie");

// console.log ( Dougie.talkSass()) ;
// console.log (Dougie.announceHealth()); 
// console.log (Dougie.fight())
// console.log (Dougie.weapons);

// enemy class 

class Enemy {
    constructor (name) {
        this.name = name; 
        this.health = 100;
        this.weapons = {
            pepperoniStars : 5,
            cheeseGrease : 10 
        }
        this.catchPhrases = ["i'm youtube famous" , "i'm more dangerous than an uncovered sewer"] ;
    }

    talkSmack () {
        return this.catchPhrases[Math.floor (Math.random () + 0.5)] ;
    }

    announceHealth () {
        return this.health; 
    }

    fight (enemy) {
        enemy.health -= this.weapons.cheeseGrease;
        return "attack with cheese grease : " + this.weapons.cheeseGrease ; 

    }
 }

 // creat pizza  rat enemy 

 const PizzaRat = new Enemy ("Pizza rat");
//  console.log (PizzaRat.name)
//  console.log (PizzaRat.weapons);
//  console.log (PizzaRat.talkSmack());


 // Walking Down the Street

 console.log (

  "Dougie the Donut : ",'\n',
  Dougie.talkSass(),'\n','\n',
  "Pizza rat : ",'\n',
  PizzaRat.talkSmack(),'\n','\n',
  "Dougie the Donut anouncing his health :",'\n',
  Dougie.announceHealth(),'\n',
  "Pizza Rat anouncing his health :", '\n',
  PizzaRat.announceHealth()
  )

  // the fight  starts 
  console.log("the fight starts now !!!!! panic zone ===>");

  // Dougie got hit by pizza rat :
  console.log ("pizza rat attacks : ") 
  console.log (PizzaRat.fight(Dougie) );
  console.log ("Dougie health  is : " + Dougie.health) ; 

  // Dougie fight back 
  console.log ("Dougie attacks :  ") ;
  console.log (Dougie.fight (PizzaRat));
  console.log ("pizza rat health is " + PizzaRat.health);
 



 



