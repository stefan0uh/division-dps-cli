document.getElementById('firearms').addEventListener('input', function () { getFirearms(this.value) });
document.getElementById('stamina').addEventListener('input', function () { getHealth(this.value) });
document.getElementById('electronic').addEventListener('input', function () { getSkillpower(this.value) });
document.getElementById('armor').addEventListener('input', function () { getArmorPercent(this.value) });
document.getElementById('stamina').addEventListener('input', getEffectivHealth);
document.getElementById('armor').addEventListener('input', getEffectivHealth);


function getHealth(stamina) {
    function calcHealth() {
        return stamina * 30
    }
    document.getElementById('health').value = calcHealth()
}

var maxAmorCap = 65

function getArmorPercent(armor) {
    function calcArmor() {
        return Math.min(Math.max(armor * 0.0140), maxAmorCap)
    }
    document.getElementById('armorPercent').value = calcArmor()
}

function getEffectivHealth() {
    if (document.getElementById('stamina').value && document.getElementById('armor').value)
        function calcEffectivHealth(stamina, armor) {
            return Math.round((stamina * 30) / (1 - armor * 0.00014 / (1 + armor * 0.00014)))
        }
    var stamina = document.getElementById('stamina').value
    var armor = document.getElementById('armor').value
    document.getElementById('effectivHealth').value = calcEffectivHealth(stamina, armor)
}

function getSkillpower(electronic) {
    function calcSkillpower() {
        return electronic * 10
    }
    document.getElementById('skillpower').value = calcSkillpower()
}

function getFirearms(firearms) {
    function calcFirearms() {
        return firearms
    }
    document.getElementById('damagePercent').value = calcFirearms()
}


