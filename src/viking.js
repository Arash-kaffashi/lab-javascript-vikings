// Soldier
class Soldier {
	constructor(health, strength) {
		this.health = health;
		this.strength = strength;
	}
	attack() {
		return this.strength;
	}
	receiveDamage(damage) {
		this.health -= damage;
	}
}

// Viking
class Viking extends Soldier {
	constructor(name, health, strength) {
		super(health, strength);
		this.name = name;
	}
	receiveDamage(damage) {
		this.health -= damage;
		if (this.health > 0) {
			return `${this.name} has received ${damage} points of damage`;
		}
		return `${this.name} has died in act of combat`;
	}
	battleCry() {
		return "Odin Owns You All!";
	}
}

// Saxon
class Saxon extends Soldier {
	receiveDamage(damage) {
		this.health -= damage;
		if (this.health > 0) return `A Saxon has received ${damage} points of damage`;
		return "A Saxon has died in combat";
	}
}

function random(array) {
	let rnd = Math.floor(Math.random() * array.length);
	return [array[rnd], rnd];
}

// War
class War {
	constructor() {
		this.vikingArmy = [];
		this.saxonArmy = [];
	}
	addViking(viking) {
		this.vikingArmy.push(viking);
	}
	addSaxon(saxon) {
		this.saxonArmy.push(saxon);
	}
	vikingAttack() {
		let [vik] = random(this.vikingArmy);
		let [sax, sax_idx] = random(this.saxonArmy);
		let res = sax.receiveDamage(vik.attack());

		if (sax.health <= 0) this.saxonArmy.splice(sax_idx, 1);

		return res;
	}
	saxonAttack() {
		let [sax] = random(this.saxonArmy);
		let [vik, vik_idx] = random(this.vikingArmy);
		let res = vik.receiveDamage(sax.attack());

		if (vik.health <= 0) this.vikingArmy.splice(vik_idx, 1);

		return res;
	}
}
