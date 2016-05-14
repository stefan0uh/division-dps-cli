#!/usr/bin/env node

/**
 * Created by Stefan Mairbaeurl
 */
var jsonfile = require('jsonfile')
var path = require('path')

var char = jsonfile.readFileSync(path.join(__dirname, 'gear.json'))

var firearms = 535,
  stamina = 535,
  electronic = 535

for (i = 0; i < 6; i++) {
  if (char.equip[i].firearms) {
    firearms += char.equip[i].firearms
  }
  if (char.equip[i].stamina) {
    stamina += char.equip[i].stamina
  }
  if (char.equip[i].electronic) {
    electronic += char.equip[i].electronic
  }
}

console.log(firearms)
console.log(stamina)
console.log(electronic)

// var powerlevelCalc = ((weaponBullet * 100) / weaponBasicDmg - firearms) / weaponCondition
