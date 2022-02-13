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

    fight () {
        return ("i'm ready to rumble")
    }
}

// create dougie the donut 

const Dougie = new Hero ("Dougie");

console.log ( Dougie.talkSass()) ;
console.log (Dougie.announceHealth()); 
console.log (Dougie.fight())
console.log (Dougie.weapons);

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

    fight () {
        return "i'm flatten you like a slice of pepperoni !"
    }
 }

 // creat pizza  rat enemy 
 const PizzaRat = new Enemy ("Pizza rat");
 console.log (PizzaRat.name)
 console.log (PizzaRat.weapons);
 console.log (PizzaRat.talkSmack());



