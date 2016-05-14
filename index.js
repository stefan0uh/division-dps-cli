#!/usr/bin/env node
/*
 *
 */


var jsonfile = require('jsonfile')
var path = require('path')

var char = jsonfile.readFileSync(path.join(__dirname, 'gear.json'))

var firearms = 535,
  stamina = 535,
  electronic = 535,
  armor = 0,
  crit = 0,
  critDMG = 0

for (i = 0; i < 6; i++) {
  // Main Stats
  if (char.equip[i].stats.firearms) {
    firearms += char.equip[i].stats.firearms
  }
  if (char.equip[i].stats.stamina) {
    stamina += char.equip[i].stats.stamina
  }
  if (char.equip[i].stats.electronic) {
    electronic += char.equip[i].stats.electronic
  }
  if (char.equip[i].armor) {
    armor += char.equip[i].armor
  }
  // Major Stats
  if (char.equip[i].crit) {
    crit += char.equip[i].crit
  }
  if (char.equip[i].critDMG) {
    critDMG += char.equip[i].critDMG
  }
}

// Berechnungen

var maxAmorCap = 65

var health = stamina * 30
var armorReductionPercent = Math.min(Math.max(parseInt(armor * 0.0140), 1), maxAmorCap)
var effectivHealth = Math.round(health / (1 - armorReductionPercent / (1 + armorReductionPercent)))

var skillpower = electronic * 10


console.log('\n-- Main Stats -------')
console.log('Firearms:', firearms)
console.log('Stamina:', stamina)
console.log(' > Health:', health)
console.log(' + Effectiv Health:', effectivHealth)
console.log(' > Armor:', armor, '(' + armorReductionPercent + '%)')
console.log('\nElectronic:', electronic)
console.log(' > Skillpower:', skillpower)

console.log('\n-- Major Stats ------')
console.log('Crit Chance:', crit + '%')
console.log('Crit Damage:', critDMG + '%')

console.log("\n-- Weapon's ---------")
console.log('Primary Weapon:', char.weapon.primary.name)
console.log(' > Magazin:', char.weapon.primary.mag, '(' + round2two((60 / char.weapon.primary.rof) * char.weapon.primary.mag) + 'sec)')
console.log(' > Weapon Damage (PVE):', char.weapon.primary.currentDamage)
console.log(' > Weapon Damage (PVP):', Math.round(char.weapon.primary.currentDamage * 0.4))

console.log('\nSecondary Weapon:', char.weapon.secondary.name)
console.log(' > Magazin:', char.weapon.secondary.mag, '(' + round2two((60 / char.weapon.secondary.rof) * char.weapon.secondary.mag) + 'sec)')
console.log(' > Weapon Damage (PVE):', char.weapon.secondary.currentDamage)
console.log(' > Weapon Damage (PVP):', Math.round(char.weapon.secondary.currentDamage * 0.4))

console.log('\nSidearm Weapon:', char.weapon.sidearm.name)
console.log(' > Magazin:', char.weapon.sidearm.mag, '(' + round2two((60 / char.weapon.sidearm.rof) * char.weapon.sidearm.mag) + 'sec)')
console.log(' > Weapon Damage (PVE):', char.weapon.sidearm.currentDamage)
console.log(' > Weapon Damage (PVP):', Math.round(char.weapon.sidearm.currentDamage * 0.4))

function round2two (x) { Ergebnis = Math.round(x * 100) / 100 ; return Ergebnis; }
