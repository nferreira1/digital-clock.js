function updateTime() {
	var display = document.querySelector('.display');

	var now = new Date();

	var time = correctTime(now.getHours()) + ':' + correctTime(now.getMinutes()) + ':' + correctTime(now.getSeconds());

	display.textContent = time;
}

function correctTime(number) {
	if (number < 10) {
		number = '0' + number;
	}
	return number;
}

updateTime();
setInterval(updateTime, 1000);
