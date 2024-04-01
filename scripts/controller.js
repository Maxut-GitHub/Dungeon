
import { player, chest, chestElement, mobileController__up, mobileController__down, mobileController__left, mobileController__right } from './model.js';
import { userDevice } from './SPA.js';


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

if (userDevice === `mobile`) {
	mobileController__up.addEventListener("touchstart", function () { document.dispatchEvent(new KeyboardEvent('keydown', { code: 'ArrowUp', })); this.style.backgroundColor = `rgb(85, 85, 85)`; }, { passive: true });
	mobileController__up.addEventListener("touchend", function () { document.dispatchEvent(new KeyboardEvent('keyup', { code: 'ArrowUp' })); this.style.backgroundColor = `rgb(136, 136, 136)`; }, { passive: true });

	mobileController__left.addEventListener("touchstart", function () { document.dispatchEvent(new KeyboardEvent('keydown', { code: 'ArrowLeft', })); this.style.backgroundColor = `rgb(85, 85, 85)`; }, { passive: true });
	mobileController__left.addEventListener("touchend", function () { document.dispatchEvent(new KeyboardEvent('keyup', { code: 'ArrowLeft' })); this.style.backgroundColor = `rgb(136, 136, 136)`; }, { passive: true });

	mobileController__down.addEventListener("touchstart", function () { document.dispatchEvent(new KeyboardEvent('keydown', { code: 'ArrowDown', })); this.style.backgroundColor = `rgb(85, 85, 85)`; }, { passive: true });
	mobileController__down.addEventListener("touchend", function () { document.dispatchEvent(new KeyboardEvent('keyup', { code: 'ArrowDown' })); this.style.backgroundColor = `rgb(136, 136, 136)`; }, { passive: true });

	mobileController__right.addEventListener("touchstart", function () { document.dispatchEvent(new KeyboardEvent('keydown', { code: 'ArrowRight', })); this.style.backgroundColor = `rgb(85, 85, 85)`; }, { passive: true });
	mobileController__right.addEventListener("touchend", function () { document.dispatchEvent(new KeyboardEvent('keyup', { code: 'ArrowRight' })); this.style.backgroundColor = `rgb(136, 136, 136)`; }, { passive: true });
}