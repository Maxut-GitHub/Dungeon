
import { player, chest, chestElement } from './model.js';


chestElement.addEventListener(`click`, function () { chest.open() })

document.addEventListener(`keydown`, playerMoveTop);
document.addEventListener(`keydown`, playerMoveDown);
document.addEventListener(`keydown`, playerMoveLeft);
document.addEventListener(`keydown`, playerMoveRight);

document.addEventListener(`keyup`, playerStopTop);
document.addEventListener(`keyup`, playerStopDown);
document.addEventListener(`keyup`, playerStopLeft);
document.addEventListener(`keyup`, playerStopRight);

//Управление игррока
function playerMoveTop(event) {
	if (player.canMove === true && event.code === `KeyW` || event.code === `ArrowUp`) {
		player.move(0, -player.speed);
	}
}
function playerMoveDown(event) {
	if (player.canMove === true && event.code === `KeyS` || event.code === `ArrowDown`) {
		player.move(0, player.speed);
	}
}
function playerMoveLeft(event) {
	if (player.canMove === true && event.code === `KeyA` || event.code === `ArrowLeft`) {
		player.move(-player.speed, 0);
	}
}
function playerMoveRight(event) {
	if (player.canMove === true && event.code === `KeyD` || event.code === `ArrowRight`) {
		player.move(player.speed, 0);
	}
}

function playerStopTop(event) {
	if (event.code === `KeyW` || event.code === `ArrowUp`) {
		player.stop(`x`, 0);
	}
}
function playerStopDown(event) {
	if (event.code === `KeyS` || event.code === `ArrowDown`) {
		player.stop(`x`, 0);
	}
}
function playerStopLeft(event) {
	if (event.code === `KeyA` || event.code === `ArrowLeft`) {
		player.stop(0, `y`);
	}
}
function playerStopRight(event) {
	if (event.code === `KeyD` || event.code === `ArrowRight`) {
		player.stop(0, `y`);
	}
}

