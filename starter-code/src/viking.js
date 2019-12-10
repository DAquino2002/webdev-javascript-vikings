// Soldier
class Soldier {
    constructor(health, strength){
        this.health = health;
        this.strength = strength;
    }
    attack(){
        return this.strength;
    }
    receiveDamage(damage){
        this.health = this.health - damage;
    }
}

// Viking
class Viking extends Soldier{
    constructor(name, health, strength){
       super(health, strength);
       this.name = name;
}
    receiveDamage(damage){
        this.health = this.health - damage;
        if(this.health > 0){
            return (this.name + " has received " + damage + " points of damage");
        }
        else{
            return (this.name + " has died in act of combat");
        }
    }
    battleCry(){
        return "Odin Owns You All!"
    }
}

// Saxon
class Saxon extends Soldier{
    constructor(health, strength){
        super(health, strength);
    }
    receiveDamage(damage){
        this.health = this.health - damage;
         if(this.health > 0){
            return ("A Saxon has received " + damage + " points of damage");
        }
        else{
            return ("A Saxon has died in combat");
        }
    }
}

// War
class War {
    constructor(){
        this.vikingArmy = [];
        this.saxonArmy = [];
    }
    addViking(viking){
        this.vikingArmy.push(viking);
    }
    addSaxon(saxon){
        this.saxonArmy.push(saxon);
    }
    vikingAttack(){
        let aViking = this.vikingArmy[Math.floor(Math.random()*this.vikingArmy.length)];
        let aSaxon = this.saxonArmy[Math.floor(Math.random()*this.saxonArmy.length)];
        aSaxon.receiveDamage(aViking.strength);

        if(aSaxon.health <= 0){
            this.saxonArmy.splice(this.saxonArmy.indexOf(aSaxon));
            return "A Saxon has died in combat";
        }
        else{
            return ("A Saxon has received " + aViking.strength + " points of damage");
        }
        
    }
    saxonAttack(){
        let aViking = this.vikingArmy[Math.floor(Math.random()*this.vikingArmy.length)];
        let aSaxon = this.saxonArmy[Math.floor(Math.random()*this.saxonArmy.length)];
        aViking.receiveDamage(aSaxon.strength);

        if(aViking.health <= 0){
            this.vikingArmy.splice(this.vikingArmy.indexOf(aViking));
            return (aViking.name + " has died in act of combat");
            
        }
        else{
            return (aViking.name + " has received " + aSaxon.strength + " points of damage");
        }
        
        
    }
    showStatus(){
        if(this.saxonArmy.length == 0){
            return "Vikings have won the war of the century!";
        }
        else if(this.vikingArmy.length == 0){
            return "Saxons have fought for their lives and survive another day...";
        }
        else{
            return "Vikings and Saxons are still in the thick of battle."
        }
    }
}
