import { player, playerElement, enemyArray, enemyElArray, gameStatus, floor, room, currentLevel, body } from './model.js';

//текущее здоровье (красная полоска)
let healsbarCurrentHP = document.getElementById(`HP`);
//счетчик здоровья(белая цифра в хелсбаре)
let healsbarCountCurrentHP = document.getElementById(`HPcount`);
//текст под полоской здоровья
let lifeText = document.getElementById(`lifeText`);

//обновление позиции игрока
export function playerPositionUpdate() {
	playerElement.style.left = player.posX + `%`;
	playerElement.style.top = player.posY + `%`;
}
//обновление позиции врага (в аргумент передать его id)
export function enemyPositionUpdate(id) {
	enemyElArray[id].style.left = enemyArray[id].posX + `%`;
	enemyElArray[id].style.top = enemyArray[id].posY + `%`;
}

//обновить отображение полоски здоровья
export function changeHealsbar() {
	if (gameStatus === `fight`) {
		if (player.HP > 1000) {
			healsbarCurrentHP.style.backgroundColor = `#3f66d1`
			healsbarCurrentHP.style.width = 100 + `%`;
			healsbarCountCurrentHP.textContent = `1000 + ${(player.HP - 1000).toFixed(0)}`;
			lifeText.innerHTML = `Здоровье + Броня`
		} else {
			healsbarCurrentHP.style.backgroundColor = `rgb(164, 0, 0)`
			healsbarCurrentHP.style.width = `${player.HP / 10}%`;
			healsbarCountCurrentHP.textContent = player.HP.toFixed(0);
			lifeText.innerHTML = `Здоровье`
		}
	}
}

//чтобы полоска остановилась ровно на 0, +обновить внешний вид игрока
export function HealsbarIsZero() {
	healsbarCurrentHP.style.width = `${0}%`;
	healsbarCountCurrentHP.textContent = 0;
	playerElement.style.backgroundImage = `url(SVGLibrary/player/playerCorpse.svg)`;
}

//обновляет внешнее отображение инвентаря и дальности игрока
export function checkViewInventory() {
	playerElement.style.backgroundImage = player.weapon.playerView;
	document.getElementById(`weaponSlot`).style.backgroundImage = player.weapon.view;
	document.getElementById(`helmetSlot`).style.backgroundImage = player.helmet.view;
	document.getElementById(`bootsSlot`).style.backgroundImage = player.boots.view;
	document.getElementById(`bodyArmorSlot`).style.backgroundImage = player.bodyArmor.view;
	checkPlayerDamageRange()
}

//Создать или обновить круг урона игрока (Функция срабатывает при checkInventory())
function checkPlayerDamageRange() {
	let playerDamageRange = document.getElementById(`playerDamageRange`)
	//Удаление старого круга урона, если он есть
	if (playerDamageRange) {
		document.getElementById(`playerDamageRange`).remove();
	}
	playerDamageRange = document.createElementNS("http://www.w3.org/2000/svg", `svg`);
	playerDamageRange.id = `playerDamageRange`;
	playerDamageRange.style.cssText = `position: absolute; left: -${450}%; top: -${450}%; pointer-events: none; z-index: 0`;
	playerDamageRange.setAttribute(`width`, 1000 + `%`);
	playerDamageRange.setAttribute(`height`, 1000 + `%`);
	playerElement.appendChild(playerDamageRange);
	let damageRange = document.createElementNS("http://www.w3.org/2000/svg", `rect`);
	damageRange.id = `damageRange`;
	damageRange.setAttribute(`width`, player.range + `%`);
	damageRange.setAttribute(`height`, player.range + `%`);
	damageRange.setAttribute("stroke", `white`);
	damageRange.setAttribute(`stroke-width`, "0.2vw")
	damageRange.setAttribute("stroke-opacity", `0.2`);
	damageRange.setAttribute("stroke-dasharray", `1vw,1.1vw`);
	damageRange.setAttribute(`fill`, "none")
	damageRange.setAttribute("x", 50 - player.range / 2 + `%`);
	damageRange.setAttribute("y", 50 - player.range / 2 + `%`);
	playerDamageRange.appendChild(damageRange);
}


//стилизовать врага (в аргументах: сам элемент, его id)
export function enemyView(el, id) {
	el.style.cssText = `width: 5vw; height: 5vw; position: absolute; pointer-events: none;
	left: ${enemyArray[id].posX}%; top: ${enemyArray[id].posY}%; z-index: 3`;
	//враг без оружия
	let enemyView = document.createElementNS("http://www.w3.org/2000/svg", `svg`);
	enemyView.setAttributeNS(null, `viewBox`, `0 0 250 250`);
	let path = document.createElementNS("http://www.w3.org/2000/svg", `path`);
	path.setAttributeNS(null, `d`, `m103.59168,67.68819c-5.70343,16.34982 -28.89736,79.46775 -28.89736,79.46775c0,0 12.16731,5.3232 11.99777,5.31568c0.16954,0.00752 19.56119,-50.94309 19.39165,-50.95061c0.16954,0.00752 0.92999,43.7338 0.92999,43.7338c0,0 -22.05325,99.23963 -22.05325,99.23963c0,0 15.96959,3.80228 15.80006,3.79477c0.16954,0.00752 20.32165,-91.24731 20.15211,-91.25483c0.16954,0.00752 26.02507,91.26235 26.02507,91.26235c0,0 15.96959,-4.56274 15.80006,-4.57026c0.16954,0.00752 -26.44646,-95.42982 -26.61599,-95.43735c0.16954,0.00752 -0.21069,-46.00012 -0.38023,-46.00764c0.16954,0.00752 21.84256,50.57791 21.84256,50.57791c0,0 12.92777,-4.94297 12.75823,-4.95049c0.16953,0.00752 -33.29057,-79.46022 -33.46011,-79.46775c0.16954,0.00753 10.81593,-7.21681 10.81593,-7.21681c3.80228,-5.70343 6.08366,-11.02663 6.08366,-11.02663c0,0 3.42206,-11.02663 3.25252,-11.41438c0.16954,0.00753 -1.35138,-10.63887 -1.52091,-10.6464c0.16954,0.00753 -4.39321,-11.39933 -4.39321,-11.39933c-0.38023,0 -9.50571,-8.74525 -9.67525,-8.75278c-6.29435,-3.0343 -10.47686,-4.55521 -10.6464,-4.56274c0.16954,0.00753 -13.51869,-1.89361 -13.68822,-1.90114c0.92999,0.38776 -10.85709,2.66913 -11.02663,2.6616c0.16954,0.00753 -8.95595,6.47141 -9.12548,6.46388c0.16954,0.00753 -6.67457,8.37255 -6.84411,8.36503c0.16954,0.00753 -5.91412,5.71096 -4.3932,18.25849c-0.76046,-8.74525 1.14069,11.40685 0.97115,11.39933c1.69045,5.33073 7.01365,11.41438 7.01365,11.41438c0,0 3.80228,4.18251 9.88594,7.60457z`);
	path.setAttributeNS(null, `fill`, `#ff0000`);
	path.setAttributeNS(null, `id`, `SVGpath${enemyArray[id].id}`);
	enemyView.appendChild(path);
	el.appendChild(enemyView)

	//добавить оружие в руку
	if (enemyArray[id].weapon === `knife`) {
		let path = document.createElementNS("http://www.w3.org/2000/svg", `path`);
		path.setAttributeNS(null, `d`, `m23.76023,124.42687l8.53722,7.49134l58.57716,-58.15388l-51.64868,63.15637l6.29861,6.25312l-4.20956,2.39752l-8.38768,-3.64815l-13.96199,15.11118l-5.93118,-4.26455l14.50527,-15.21142c0.196,-2.92362 -4.99015,-6.37745 -2.75155,-4.5139`);
		path.setAttributeNS(null, `fill`, `#333333`);
		path.setAttributeNS(null, `transform`, `rotate(-92.5157 51.9544 115.399)`);
		enemyView.appendChild(path);
	} else if (enemyArray[id].weapon === `double knives`) {
		let path1 = document.createElementNS("http://www.w3.org/2000/svg", `path`);
		path1.setAttributeNS(null, `d`, `m23.76023,124.42687l8.53722,7.49134l58.57716,-58.15388l-51.64868,63.15637l6.29861,6.25312l-4.20956,2.39752l-8.38768,-3.64815l-13.96199,15.11118l-5.93118,-4.26455l14.50527,-15.21142c0.196,-2.92362 -4.99015,-6.37745 -2.75155,-4.5139`);
		path1.setAttributeNS(null, `fill`, `#333333`);
		path1.setAttributeNS(null, `transform`, `rotate(-92.5157 51.9544 115.399)`);
		enemyView.appendChild(path1);
		let path2 = document.createElementNS("http://www.w3.org/2000/svg", `path`);
		path2.setAttributeNS(null, `d`, `m164.44476,126.70824l8.53722,7.49134l58.57716,-58.15388l-51.64868,63.15637l6.29861,6.25311l-4.20956,2.39753l-8.38768,-3.64816l-13.96199,15.11118l-5.93118,-4.26455l14.50527,-15.21142c0.196,-2.92362 -4.99015,-6.37745 -2.75155,-4.5139`);
		path2.setAttributeNS(null, `fill`, `#333333`);
		path2.setAttributeNS(null, `transform`, `rotate(9.82316 192.639 117.681)`);
		enemyView.appendChild(path2);
	} else if (enemyArray[id].weapon === `two-handed mace`) {
		let path = document.createElementNS("http://www.w3.org/2000/svg", `path`);
		path.setAttributeNS(null, `d`, `m117.02776,35.46935l4.39321,-10.53219l5.3232,10.91427l12.16731,-6.23672l-6.46388,10.91427l9.12548,5.84693l-10.26617,4.28775l2.28137,13.25304l-9.88594,-10.52447l1.90428,195.75735l-5.54204,-13.77942l-3.96681,-182.36773l-9.50571,9.35509l2.28137,-14.03263l-10.26617,-3.50816l10.26617,-5.45713l-3.04183,-10.91427`);
		path.setAttributeNS(null, `fill`, `#333333`);
		path.setAttributeNS(null, `transform`, `rotate(-84.9039 120.09 137.043)`);
		enemyView.appendChild(path);
	} else if (enemyArray[id].weapon === `two hellish staff`) {
		let path1 = document.createElementNS("http://www.w3.org/2000/svg", `path`);
		path1.setAttributeNS(null, `d`, `m158.78,12.97l34.24,60.56l-3.11,-61.78l-31.67,36.02l45.56,-4.44l-25.01,-18.45l-39.86,224.67l48.69,-218.1l-28.84,-18.48z`);
		path1.setAttributeNS(null, `fill`, `#333333`);
		enemyView.appendChild(path1);
		let path2 = document.createElementNS("http://www.w3.org/2000/svg", `path`);
		path2.setAttributeNS(null, `d`, `m70.8,20.15l-25.58,62.93l-4.76,-60.21l35.24,30.91l-44.73,1.4l21.92,-20.99l66.93,212.56l-74.66,-205.09l25.63,-21.5z`);
		path2.setAttributeNS(null, `fill`, `#333333`);
		enemyView.appendChild(path2);
		let circle1 = document.createElementNS("http://www.w3.org/2000/svg", `circle`);
		circle1.setAttributeNS(null, `cx`, `52.14`);
		circle1.setAttributeNS(null, `cy`, `49.56`);
		circle1.setAttributeNS(null, `r`, `49.91`);
		circle1.setAttributeNS(null, `fill`, `url(#svg_1)`);
		enemyView.appendChild(circle1);
		let circle2 = document.createElementNS("http://www.w3.org/2000/svg", `circle`);
		circle2.setAttributeNS(null, `cx`, `182.64`);
		circle2.setAttributeNS(null, `cy`, `40.06`);
		circle2.setAttributeNS(null, `r`, `41.58`);
		circle2.setAttributeNS(null, `fill`, `url(#svg_1)`);
		enemyView.appendChild(circle2);
		let radialGradient = document.createElementNS("http://www.w3.org/2000/svg", `radialGradient`);
		radialGradient.setAttributeNS(null, `id`, `svg_1`);
		let stop1 = document.createElementNS("http://www.w3.org/2000/svg", `stop`);
		stop1.setAttributeNS(null, `id`, `jq_stop_2335`);
		stop1.setAttributeNS(null, `offset`, `0`);
		stop1.setAttributeNS(null, `stop-color`, `#FF0000`);
		radialGradient.appendChild(stop1);
		let stop2 = document.createElementNS("http://www.w3.org/2000/svg", `stop`);
		stop2.setAttributeNS(null, `id`, `jq_stop_4362`);
		stop2.setAttributeNS(null, `offset`, `1`);
		stop2.setAttributeNS(null, `stop-opacity`, `0`);
		radialGradient.appendChild(stop2);
		enemyView.appendChild(radialGradient);
	}
}

//изменение пола и стен в заввисимости от уровня
export function locationView() {
	if (currentLevel >= 1 && currentLevel <= 10) {
		floor.style.backgroundImage = `url(SVGLibrary/room/floor1-10.svg)`;
		room.style.borderImage = `url(SVGLibrary/room/walls1-10.svg) 40 round`;
	} else if (currentLevel >= 11 && currentLevel <= 20) {
		floor.style.backgroundImage = `url(SVGLibrary/room/floor11-20.svg)`;
		room.style.borderImage = `url(SVGLibrary/room/walls11-20.svg) 40 round`;
	} else if (currentLevel >= 21 && currentLevel <= 30) {
		floor.style.backgroundImage = `url(SVGLibrary/room/floor21-30.svg)`;
		room.style.borderImage = `url(SVGLibrary/room/walls21-30.svg) 40 round`;
	}
}

//оповещение Сколько уровней осталось? (после 11 и 21 уровня)
export function levelsLeft() {
	if (currentLevel === 10 || currentLevel === 20) {
		let message = document.createElement(`div`);
		message.textContent = `ОСТАЛОСЬ ${30 - currentLevel} УРОВНЕЙ`
		message.style.cssText = `position: absolute; left: 20vw; top: 10vw;
		font-size: 5vw; pointer-events: none; z-index: 4;`
		if (currentLevel === 10) {
			message.style.textShadow = `green 2vw 0 4vw`
		} else if (currentLevel === 20) {
			message.style.textShadow = `red 2vw 0 4vw`
		}
		message.classList = `appearanceMessage`
		body.appendChild(message);
	}
}