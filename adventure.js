console.log ( " i am connected ") ; 

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



