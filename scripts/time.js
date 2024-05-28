const clock = document.querySelector('.clock')
function currentTime(){
	let date = new Date()
	let hours = date.getHours()
	let minutes = date.getMinutes()
	let sec = date.getSeconds()
	sec = plusZero(sec);
	minutes = plusZero(minutes)
	hours = plusZero(hours)
	let fullTime = hours+':'+minutes+':'+sec
	clock.innerText = fullTime
	setTimeout(currentTime,1000)
}


currentTime()
function plusZero(number){
	if(number<10){
		return "0"+ number
	}
	else{
		return number
	}
}