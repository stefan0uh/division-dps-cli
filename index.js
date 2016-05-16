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
  critChance = 0,
  critDMG = 0,
  bonusHealth = 0

for (i = 0; i < 6; i++) {
  // Main Stats
  if ('firearms' in char.equip[i].stats) {
    firearms += char.equip[i].stats.firearms
  }
  if ('stamina' in char.equip[i].stats) {
    stamina += char.equip[i].stats.stamina
  }
  if ('electronic' in char.equip[i].stats) {
    electronic += char.equip[i].stats.electronic
  }
  if ('armor' in char.equip[i]) {
    armor += char.equip[i].armor
  }
}

/*
 Berechnungen

*/

var maxAmorCap = 65

var health = stamina * 30
var armorMaxReductionPercent = Math.min(Math.max(armor * 0.0140), maxAmorCap)
var armorCurrentReductionPercent = armor * 0.0140
var effectivHealth = Math.round(health / (1 - armor * 0.00014 / (1 + armor * 0.00014)))

var skillpower = electronic * 10

console.log('\n-- Main Stats -------')
console.log('Firearms:', firearms)
console.log('Stamina:', stamina)
console.log(' > Health:', health)
console.log(' + Effectiv Health:', effectivHealth)
console.log(' > Armor:', armor, '(' + armorMaxReductionPercent + '%', armorCurrentReductionPercent + '%)')
console.log('\nElectronic:', electronic)
console.log(' > Skillpower:', skillpower)
console.log()
