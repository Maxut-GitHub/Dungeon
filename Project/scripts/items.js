"use strict";

// ОРУЖИТЕ ----------------------------------------------------------------------
// массив всего оружия
let weaponArray = [];

const Sword = {
	name: `Меч`,
	damage: 0.6,
	range: 10,
	view: `url(SVGLibrary/weapon/Sword.svg)`,
	playerView: `url(SVGLibrary/player/playerSword.svg)`,
}
weaponArray.push(Sword)

const Spear = {
	name: `Копье`,
	damage: 0.5,
	range: 20,
	view: `url(SVGLibrary/weapon/Spear.svg)`,
	playerView: `url(SVGLibrary/player/playerSpear.svg)`,
}
weaponArray.push(Spear)

const Hammer = {
	name: `Молот`,
	damage: 0.8,
	range: 10,
	moveSpeed: -0.1,
	view: `url(SVGLibrary/weapon/Hammer.svg)`,
	playerView: `url(SVGLibrary/player/playerHammer.svg)`,
}
weaponArray.push(Hammer)

const Bow = {
	name: `Лук`,
	damage: 0.3,
	range: 50,
	moveSpeed: -0.2,
	view: `url(SVGLibrary/weapon/Bow.svg)`,
	playerView: `url(SVGLibrary/player/playerBow.svg)`,
}
weaponArray.push(Bow)

const OnehandedAx = {
	name: `Одноручный топор`,
	damage: 0.5,
	range: 5,
	view: `url(SVGLibrary/weapon/OnehandedAx.svg)`,
	playerView: `url(SVGLibrary/player/playerOnehandedAx.svg)`,
}
weaponArray.push(OnehandedAx)

const TwohandedAx = {
	name: `Двуручный топор`,
	damage: 0.9,
	range: 10,
	moveSpeed: -0.1,
	view: `url(SVGLibrary/weapon/TwohandedAx.svg)`,
	playerView: `url(SVGLibrary/player/playerTwohandedAx.svg)`,
}
weaponArray.push(TwohandedAx)

const SwordWithShield = {
	name: `Меч и щит`,
	damage: 0.6,
	range: 10,
	armor: 500,
	view: `url(SVGLibrary/weapon/SwordWithShield.svg)`,
	playerView: `url(SVGLibrary/player/playerSwordWithShield.svg)`,
}
weaponArray.push(SwordWithShield)

const Crossbow = {
	name: `Арбалет`,
	damage: 0.6,
	range: 60,
	moveSpeed: -0.4,
	view: `url(SVGLibrary/weapon/Crossbow.svg)`,
	playerView: `url(SVGLibrary/player/playerCrossbow.svg)`,
}
weaponArray.push(Crossbow)

const Sai = {
	name: `Саи`,
	damage: 0.7,
	range: 5,
	moveSpeed: 0.2,
	view: `url(SVGLibrary/weapon/Sai.svg)`,
	playerView: `url(SVGLibrary/player/playerSai.svg)`,
}
weaponArray.push(Sai)

const Katana = {
	name: `Катана`,
	damage: 1,
	range: 15,
	view: `url(SVGLibrary/weapon/Katana.svg)`,
	playerView: `url(SVGLibrary/player/playerKatana.svg)`,
}
weaponArray.push(Katana)

const OnehandedMace = {
	name: `Одноручная булава`,
	damage: 0.4,
	range: 10,
	view: `url(SVGLibrary/weapon/OnehandedMace.svg)`,
	playerView: `url(SVGLibrary/player/playerOnehandedMace.svg)`,
}
weaponArray.push(OnehandedMace)

const TwohandedMace = {
	name: `Двуручная булава`,
	damage: 0.7,
	range: 10,
	moveSpeed: -0.1,
	view: `url(SVGLibrary/weapon/TwohandedMace.svg)`,
	playerView: `url(SVGLibrary/player/playerTwohandedMace.svg)`,
}
weaponArray.push(TwohandedMace)

const Stick = {
	name: `Палка`,
	damage: 0,
	range: 5,
	view: `url(SVGLibrary/weapon/Stick.svg)`,
	playerView: `url(SVGLibrary/player/playerStick.svg)`,
}
weaponArray.push(Stick)

const LongStick = {
	name: `Длинная палка`,
	range: 10,
	view: `url(SVGLibrary/weapon/LongStick.svg)`,
	playerView: `url(SVGLibrary/player/playerLongStick.svg)`,
}
weaponArray.push(LongStick)

// ДОСПЕХИ ----------------------------------------------------------------------
//массив всех элементов доспехов

//массив всех сапог
let bootsArray = [];
// Сапоги
const LeatherBoots = {
	name: `Кожанные ботинки`,
	armor: 5,
	moveSpeed: 0.3,
	view: `url(SVGLibrary/boots/leatherBoots.svg)`,
}
bootsArray.push(LeatherBoots)

const IronBoots_lowQuality = {
	name: `Некачественные Железные ботинки`,
	armor: 50,
	moveSpeed: 0.2,
	view: `url(SVGLibrary/boots/IronBoots_lowQuality.svg)`,
}
bootsArray.push(IronBoots_lowQuality)

const IronBoots_awerageQuality = {
	name: `Железные ботинки`,
	armor: 100,
	moveSpeed: 0.2,
	view: `url(SVGLibrary/boots/IronBoots_awerageQuality.svg)`,
}
bootsArray.push(IronBoots_awerageQuality)

const IronBoots_highQuality = {
	name: `Высококачественные Железные ботинки`,
	armor: 150,
	moveSpeed: 0.3,
	view: `url(SVGLibrary/boots/IronBoots_highQuality.svg)`,
}
bootsArray.push(IronBoots_highQuality)

const IronBoots_PerfectQuality = {
	name: `Идельные Железные ботинки`,
	armor: 200,
	moveSpeed: 0.4,
	view: `url(SVGLibrary/boots/IronBoots_PerfectQuality.svg)`,
}
bootsArray.push(IronBoots_PerfectQuality)

const SpikedBoots = {
	name: `Шипастые ботинки`,
	armor: -600,
	moveSpeed: 1,
	view: `url(SVGLibrary/boots/SpikedBoots.svg)`,
}
bootsArray.push(SpikedBoots)

//массив всех нагрудных доспехов
let bodyArmorArray = [];
// Нагрудный доспех
const LeatherBodyArmor = {
	name: `Кожанный Нагрудный доспех`,
	armor: 30,
	view: `url(SVGLibrary/bodyArmor/LeatherBodyArmor.svg)`,
}
bodyArmorArray.push(LeatherBodyArmor)

const IronBodyArmor_lowQuality = {
	name: `Некачественный Железный нагрудник`,
	armor: 150,
	view: `url(SVGLibrary/bodyArmor/IronBodyArmor_lowQuality.svg)`,
}
bodyArmorArray.push(IronBodyArmor_lowQuality)

const IronBodyArmor_awerageQuality = {
	name: `Железный нагрудник`,
	armor: 350,
	view: `url(SVGLibrary/bodyArmor/IronBodyArmor_awerageQuality.svg)`,
}
bodyArmorArray.push(IronBodyArmor_awerageQuality)

const IronBodyArmor_highQuality = {
	name: `Высококачественный Железный нагрудник`,
	armor: 500,
	view: `url(SVGLibrary/bodyArmor/IronBodyArmor_highQuality.svg)`,
}
bodyArmorArray.push(IronBodyArmor_highQuality)

const IronBodyArmor_PerfectQuality = {
	name: `Идеальный Железный нагрудник`,
	armor: 800,
	view: `url(SVGLibrary/bodyArmor/IronBodyArmor_PerfectQuality.svg)`,
}
bodyArmorArray.push(IronBodyArmor_PerfectQuality)

//массив всех шлемов
let helmetArray = [];
// Шлем
const LeatherHelmet = {
	name: `Кожанный шлем`,
	armor: 10,
	view: `url(SVGLibrary/helmet/LeatherHelmet.svg)`,
}
helmetArray.push(LeatherHelmet)

const IronHelmet_lowQuality = {
	name: `Некачественный Железный шлем`,
	armor: 100,
	view: `url(SVGLibrary/helmet/IronHelmet_lowQuality.svg)`,
}
helmetArray.push(IronHelmet_lowQuality)

const IronHelmet_awerageQuality = {
	name: `Железный шлем`,
	armor: 150,
	view: `url(SVGLibrary/helmet/IronHelmet_awerageQuality.svg)`,
}
helmetArray.push(IronHelmet_awerageQuality)

const IronHelmet_highQuality = {
	name: `Высококачественный Железный шлем`,
	armor: 250,
	view: `url(SVGLibrary/helmet/IronHelmet_highQuality.svg)`,
}
helmetArray.push(IronHelmet_highQuality)

const IronHelmet_PerfectQuality = {
	name: `Идеальный Железный шлем`,
	armor: 350,
	view: `url(SVGLibrary/helmet/IronHelmet_PerfectQuality.svg)`,
}
helmetArray.push(IronHelmet_PerfectQuality)

const FormidableHelmet = {
	name: `Грозный шлем`,
	armor: 150,
	damage: 0.2,
	view: `url(SVGLibrary/helmet/FormidableHelmet.svg)`,
}
helmetArray.push(FormidableHelmet)

const HeavyHelmet = {
	name: `Тяжелый шлем`,
	armor: 600,
	moveSpeed: -0.2,
	view: `url(SVGLibrary/helmet/HeavyHelmet.svg)`,
}
helmetArray.push(HeavyHelmet)

let allItemsArray = [];
allItemsArray.push(bootsArray);
allItemsArray.push(bodyArmorArray);
allItemsArray.push(helmetArray);
allItemsArray.push(weaponArray);

//экспорт массива всех объектов 
export default allItemsArray;