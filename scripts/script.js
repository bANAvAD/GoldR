var buyf = 0;

function buy() {
	if (buyf == 0)
	{
     	document.getElementById('btn').style.background = 'green';
		document.getElementById('btn').innerHTML = 'В корзине';
		buyf = 1
	}
	else
	{
		document.getElementById('btn').style.background = 'silver';
		document.getElementById('btn').innerHTML = 'Купить';
		buyf = 0
	}
}
function sel() {
	document.getElementById('sell').style.margin = '100px';
	document.getElementById('sell').innerHTML = 'kuru kuru kuru kuru kurur'
}

ItcSlider.getOrCreateInstance('.itc-slider', {
  loop: false, 
  swipe: false 
});



