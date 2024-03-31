let recordsArray; //Массив рекордов
const ajaxHandlerScript = "https://fe.it-academy.by/AjaxStringStorage2.php";

// отслеживаем изменение закладки в УРЛе
window.onhashchange = switchToStateFromURLHash;
// текущее состояние приложения
var SPAState = {};
// вызывается при изменении закладки УРЛа
// а также при первом открытии страницы
// читает новое состояние приложения из закладки УРЛа
// и обновляет ВСЮ вариабельную часть веб-страницы
// соответственно этому состоянию
// это упрощённая реализация РОУТИНГА - автоматического выполнения нужных
// частей кода в зависимости от формы URLа
// "роутинг" и есть "контроллер" из MVC - управление приложением через URL
function switchToStateFromURLHash() {
	var URLHash = window.location.hash;
	// убираем из закладки УРЛа решётку
	var stateStr = URLHash.substr(1);
	if (stateStr != "") { // если закладка непустая, читаем из неё состояние и отображаем
		var parts = stateStr.split("_")
		SPAState = { pagename: parts[0] }; // первая часть закладки - номер страницы
	}
	else
		SPAState = { pagename: 'MainMenu' }; // иначе показываем главную страницу
	// обновляем вариабельную часть страницы под текущее состояние
	var pageHTML = "";
	let scriptsAndOther = [];
	switch (SPAState.pagename) {
		case 'MainMenu':
			//заранее читаем рекорды
			readRecords()
			pageHTML = ``;
			let mainMenu = document.createElement('div');
			mainMenu.classList = "main-menu";

			let startGame = document.createElement('button');
			startGame.classList = `main-menu__button`;
			startGame.textContent = `Начать игру`;
			startGame.onclick = function () { switchToGamePage(); location.reload() };
			mainMenu.appendChild(startGame);

			let records = document.createElement('button');
			records.classList = `main-menu__button`;
			records.textContent = `Таблица рекордов`;
			records.onclick = switchToRecordsPage;
			mainMenu.appendChild(records);
			document.getElementById('Page').innerHTML = pageHTML;
			document.getElementById('Page').appendChild(mainMenu)
			break;
		case 'Records':
			pageHTML += `<div class="records-section">
			<div class="records-section__name">Таблица рекордов</div>
			<div class="records-section__table">
				<div class="records-section__slot">1. `+ recordsArray[0].playerName + ` (` + recordsArray[0].killCount + `kills) (` + recordsArray[0].roomPast + `room)</div>
				<div class="records-section__slot">2. `+ recordsArray[1].playerName + ` (` + recordsArray[1].killCount + `kills) (` + recordsArray[1].roomPast + `room)</div>
				<div class="records-section__slot">3. `+ recordsArray[2].playerName + ` (` + recordsArray[2].killCount + `kills) (` + recordsArray[2].roomPast + `room)</div>
				<div class="records-section__slot">4. `+ recordsArray[3].playerName + ` (` + recordsArray[3].killCount + `kills) (` + recordsArray[3].roomPast + `room)</div>
				<div class="records-section__slot">5. `+ recordsArray[4].playerName + ` (` + recordsArray[4].killCount + `kills) (` + recordsArray[4].roomPast + `room)</div>
				<div class="records-section__slot">6. `+ recordsArray[5].playerName + ` (` + recordsArray[5].killCount + `kills) (` + recordsArray[5].roomPast + `room)</div>
				<div class="records-section__slot">7. `+ recordsArray[6].playerName + ` (` + recordsArray[6].killCount + `kills) (` + recordsArray[6].roomPast + `room)</div>
				<div class="records-section__slot">8. `+ recordsArray[7].playerName + ` (` + recordsArray[7].killCount + `kills) (` + recordsArray[7].roomPast + `room)</div>
				<div class="records-section__slot">9. `+ recordsArray[8].playerName + ` (` + recordsArray[8].killCount + `kills) (` + recordsArray[8].roomPast + `room)</div>
				<div class="records-section__slot">10. `+ recordsArray[9].playerName + ` (` + recordsArray[9].killCount + ` kills) (` + recordsArray[9].roomPast + ` room)</div>
			</div>
		</div>
		<div class="description">Автор выпускного проекта: ЖЖЖЖЖЖЖ ЖЖЖЖЖЖЖЖ. Группа Md-FD2-140-23.<br> Преподаватель: ЖЖЖЖЖЖЖ ЖЖЖЖЖЖ.<br>
		</div>`;
			let exitRecords = document.createElement('button');
			exitRecords.classList = `exitRecordsButton`;
			exitRecords.textContent = `Назад`;
			exitRecords.onclick = function () { switchToMainMenuPage(); };
			document.getElementById('Page').innerHTML = pageHTML;
			document.getElementById('Page').insertBefore(exitRecords, document.getElementsByClassName(`records-section`)[0]);
			break;
		case 'Game':
			pageHTML += `<div id="levelText">level
			<span id="level">1</span>
		</div>
		<div id="gameField">
			<div id="room">
				<div id="doorTop"></div>
				<div id="floor"></div>
				<div id="doorButton"></div>
			</div>
			<div class="interface">
				<div id="lifePanel" class="interface__panel">
					<div id="healsbar" class="interface__healsbar">
						<div id="HP"></div>
						<div id="HPcount"></div>
					</div>
					<div id="lifeText" class="interface__text">Здоровье</div>
				</div>
				<div id="weaponPanel" class="interface__panel">
					<div id="weaponSlot" class="interface__slot"></div>
					<div id="weaponText" class="interface__text">Оружие</div>
				</div>
				<div id="bootsPanel" class="interface__panel">
					<div id="bootsSlot" class="interface__slot"></div>
					<div id="bootsText" class="interface__text">Сапоги</div>
				</div>
				<div id="bodyArmorPanel" class="interface__panel">
					<div id="bodyArmorSlot" class="interface__slot"></div>
					<div id="bodyArmorText" class="interface__text">Нагрудник</div>
				</div>
				<div id="helmetPanel" class=" interface__panel">
					<div id="helmetSlot" class="interface__slot"></div>
					<div id="helmetText" class="interface__text">Шлем</div>
				</div>
				<div id="menuPanel" class="interface__panel">
					<button id="menuButton">Меню</button>
				</div>
			</div>
		</div>`;
			let ModelScript = document.createElement('script');
			ModelScript.type = "module";
			ModelScript.src = "scripts/model.js";
			scriptsAndOther.push(ModelScript);
			let ControllerScript = document.createElement('script');
			ControllerScript.type = "module";
			ControllerScript.src = "scripts/controller.js";
			scriptsAndOther.push(ControllerScript);
			let ViewScript = document.createElement('script');
			ViewScript.type = "module";
			ViewScript.src = "scripts/view.js";
			scriptsAndOther.push(ViewScript);
			//Добавляем все на страницу и отдельно в for скрипты
			document.getElementById('Page').innerHTML = pageHTML;
			for (let el of scriptsAndOther) {
				document.getElementById('Page').appendChild(el);
			}
			break;
	}
}
switchToStateFromURLHash();

// устанавливает в закладке УРЛа новое состояние приложения
// и затем устанавливает+отображает это состояние
function switchToState(newState) {
	// устанавливаем закладку УРЛа
	var stateStr = newState.pagename;
	location.hash = stateStr;
}
function switchToMainMenuPage() {
	switchToState({ pagename: 'MainMenu' });
}
function switchToRecordsPage() {
	switchToState({ pagename: 'Records' });
}
function switchToGamePage() {
	switchToState({ pagename: 'Game' });
}

//Чтение рекордов
async function readRecords() {
	// отдельно создаём набор POST-параметров запроса
	let readRecord = new URLSearchParams();
	readRecord.append('f', 'READ');
	readRecord.append('n', 'MAXIM_DUNGEON_TABLEOFRECORDS');
	try {
		const response = await fetch(ajaxHandlerScript, { method: 'post', body: readRecord });
		recordsArray = await response.json();
		recordsArray = JSON.parse(recordsArray.result);
		recordsArray = sortRecordsArray(recordsArray);
		recordsArray = morePlayersForRecordTable(recordsArray);
	}
	catch (error) {
		console.error(error);
	}
}


// recordsArray = [
// 	{
// 		"playerName": "ВтораяДата",
// 		"killCount": 23,
// 		"roomPast": 10
// 	},
// 	{
// 		"playerName": "ДРУГАЯДата",
// 		"killCount": 20,
// 		"roomPast": 3
// 	},
// 	{
// 		"playerName": "Максимус",
// 		"killCount": 47,
// 		"roomPast": 13
// 	},
// 	{
// 		"playerName": "ТУтутутут",
// 		"killCount": 40,
// 		"roomPast": 13
// 	},
// 	{
// 		"playerName": "траляля",
// 		"killCount": 45,
// 		"roomPast": 13
// 	},
// 	{
// 		"playerName": "трал12яля",
// 		"killCount": 45,
// 		"roomPast": 13
// 	},
// 	{
// 		"playerName": "траля555ля",
// 		"killCount": 9,
// 		"roomPast": 13
// 	},
// 	{
// 		"playerName": "тр114321аляля",
// 		"killCount": 22,
// 		"roomPast": 10
// 	},
// 	{
// 		"playerName": "тр114321аля1111ля",
// 		"killCount": 201,
// 		"roomPast": 9
// 	},
// 	{
// 		"playerName": "тр11432132аляля",
// 		"killCount": 1,
// 		"roomPast": 30
// 	},
// ]

//Сортировка массива рекордов для таблицы рекордов (Лучшие те, что прошли больше комнат. Если проойденные комнаты одинаковы, то сортируем по кол-ву убитых врагов за забег)
function sortRecordsArray(recordsArray) {
	return recordsArray
		.sort((player1, player2) => player1.roomPast > player2.roomPast ? -1 : 1)
		.sort((player1, player2) => {
			if (player1.roomPast === player2.roomPast) {
				return player1.killCount > player2.killCount ? -1 : 1
			}
		});;
}

//Эта функция берет массив рекордов и заполняет его пустыми слотами, если массив имеет меньше 10 позиций (тк. в таблице всего 10 позиций)
function morePlayersForRecordTable(recordsArray) {
	let count = 0;
	if (recordsArray.length < 10) {
		for (let i = 1; i <= Math.abs(recordsArray.length - 10); i++) {
			count++;
		}
		for (count; count > 0; count--) {
			recordsArray.push({ "playerName": "-", "killCount": "-", "roomPast": "-" })
		}
	}
	return recordsArray;
}

//проверка на телефон
if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent)) {
	//Проверка на ориентацию экрана для мобильных устройств
	let body = document.getElementsByTagName(`body`)[0];
	window.addEventListener(`orientationchange`, orientationMobileChange);
	//Темное модальнео стекло с сообщением перевернуть экран
	let orientationModalGlass = document.createElement(`div`);
	orientationModalGlass.style.cssText = `position: fixed; width: 100%; height: 100%; background-color: black; z-index: 7; color: white;
font-size: 8vw; display: flex; justify-content: center; align-items: center; top: 0`
	orientationModalGlass.id = `orientationModalGlass`
	orientationModalGlass.textContent = `Переверните экран`
	function orientationMobileChange() {
		if (window.matchMedia('(orientation: landscape)').matches) {
			body.appendChild(orientationModalGlass);
		} else {
			if (document.getElementById(`orientationModalGlass`)) {
				orientationModalGlass.remove()
			}
		}
	}
	if (window.matchMedia('(orientation: landscape)').matches) {
	} else {
		body.appendChild(orientationModalGlass);
	}

	console.log(`Пользователь использует мобильное устройство`)
	//СЮДА УПРАВЛЕНИЕ

} else
	console.log(`Пользователь использует ПК`)