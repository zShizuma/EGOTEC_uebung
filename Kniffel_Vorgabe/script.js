/**
 * Gesamtpunktzahl
 *
 * @var number
 */
var score = 0;

/**
 * Anzahl der getätigten Würfe in dieser Runde
 *
 * @var number
 */
var rolled = 0;

/**
 * Alle aktuellen Würfelwerte
 *
 * @var array
 */
var values = [];

/**
 * Alle Würfel werfen
 *
 * @return void
 */
function rollDices() {
	// Alle HTML Elemente mit der CSS Klasse "dice" ermitteln
	var dices = document.getElementsByClassName('dice');
	// Die aktuellen Würfelwerte zurücksetzen
	values = [];

	for (var i = 0; i < dices.length; i++) {
		// @TODO Würfel nicht würfeln, wenn dieser gehalten wird
			
		// Eine Zufallszahl zwischen 1 und 6 generieren und dem Würfel zuweisen
		dices[i].value = Math.floor((Math.random() * 6) + 1);

		// Aktuellen Würfelwert merken
		var value = parseInt(dices[i].value);
		values.push(value);
	}

	// Anzahl der getätigten Würfe erhöhen
	rolled++;
}

/**
 * Würfel einem Feld zuweisen
 *
 * @param HTMLElement field
 * @param mixed type
 * @return void
 */

function assignDices(field, type) {
	// @TODO Verhindern Sie, dass die Würfel einem Feld mehr als einmal zugewiesen werden können

	// Die zu vergebenden Punkte
	var points = 0;

	// Punkte berechnen
	switch (type) {
		// Einser bis Sechser @TODO Erweitern Sie, damit auch Dreier, Vierer, Fünfer und Sechser berechnet werden
		case 1:
			points = getEinserBisSechser(type);
			break;

		case 2:
			points = getEinserBisSechser(type);
			break;

		case 3:
			points = getEinserBisSechser(type);
			break;

		case 4:
			points = getEinserBisSechser(type);
			break;

		case 5:
			points = getEinserBisSechser(type);
			break;

		case 6:
			points = getEinserBisSechser(type);
			break;

		case 'Dreierpasch':
			points = getPasch(3);
			break;

		case 'Viererpasch':
			points = getPasch(4);
			break;
	}

	// Punkte zuweisen
	field.innerHTML = points;

	// Gesamtpunktzahl erhöhen und in das HTML Element mit der ID score schreiben
	score += points;
	document.getElementById('score').innerHTML = score;

	// Runde zurücksetzen
	resetRound();
}

/**
 * Einser bis Sechser berechnen
 *
 * @param number num
 * @return number
 */
function getEinserBisSechser(num) {
	var points = 0;

	for (var i = 0; i < values.length; i++) {
		if (values[i] == num) {
			points += num;
		}
	}

	return points;
}

/**
 * Pasch berechnen
 *
 * @param number num
 * @return number
 */
function getPasch(num) {
	var points = 0;

	// @TODO Berechnen Sie einen Dreier- und Viererpasch

	return points;
}

/**
 * Diese Runde zurücksetzen
 *
 * @return void
 */
function resetRound() {
	var dices = document.getElementsByClassName('dice');

	for (var i = 0; i < dices.length; i++) {
		// Alle Würfel loslassen
		dices[i].removeAttribute('data-hold');
		// Alle Würfelwerte zurücksetzen
		dices[i].value = 0;
	}
	// Alle gemerkten Würfelwerte zurücksetzen
	values = [];
	rolled = 0;
	
	// @TODO Setzen Sie die Anzahl der getätigten Würfe zurück
}

/**
 * Würfel halten oder loslassen
 *
 * @param HTMLElement dice
 * @return void
 */
function toggleDice(dice) {
	// @TODO Verhindern Sie, dass die Würfel gehalten oder losgelassen werden können, bevor mindestens einmal gewürfelt wurde
	if (rolled === 0 && rollDices.addEventListener("click")) {
		dice.classList.add(".dice");
	}

	if (dice.getAttribute('data-hold')) {
		// Das HTML Attribut "data-hold" existiert bereits und wird entfernt
		dice.removeAttribute('data-hold');
	} else {
		// Das HTML Attribut "data-hold" existiert noch nicht und wird gesetzt
		dice.setAttribute('data-hold', 1);
	}

	// Fokus auf diesen Würfel entfernen
	dice.blur();
}
