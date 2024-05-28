const header = document.querySelector('.header');
const footer = document.querySelector('.footer');
const main = document.querySelector('.main');
const navLink = document.querySelectorAll('.nav__link');
const title = document.querySelector('.shop__title');
const banks = document.querySelector('.banks')
const gog = document.querySelector('.google__map')
const yan = document.querySelector('.yandex__map')
const fitle = document.querySelector('.footer__title')
const fext = document.querySelector('.footer__text')

console.log(navLink);


function choiceDark(){

	console.log(header.style);
	header.style.background='#383737';
	header.style.transition='1s';
	footer.style.background='#383737';
	footer.style.transition='1s';
	main.style.background= '#383737'
	main.style.transition= '1s'
	title.style.color='white';
	title.style.transition='1s';
	banks.style.color='white';
	banks.style.transition='1s';
	gog.style.color='white';
	gog.style.transition='1s';
	yan.style.color='white';
	yan.style.transition='1s';
	fitle.style.color='white';
	fitle.style.transition='1s';
	fext.style.color='white';
	fext.style.transition='1s';
	navLink.forEach((el)=>{
		el.style.color = 'gray';
		el.style.transition = '1s';
	});
}

function choiceLight(){

	console.log(header.style);
	header.style.background='rgba(230, 190, 92, 0.7)';
	header.style.transition='1s';
	footer.style.background='rgba(230, 190, 92, 0.7)';
	footer.style.transition='1s';
	main.style.background= 'white'
	main.style.transition= '1s'
	title.style.color='black';
	title.style.transition='1s';
	banks.style.color='black';
	banks.style.transition='1s';
	gog.style.color='black';
	gog.style.transition='1s';
	yan.style.color='black';
	yan.style.transition='1s';
	fitle.style.color='black';
	fitle.style.transition='1s';
	fext.style.color='black';
	fext.style.transition='1s';
	navLink.forEach((el)=>{
		el.style.color = 'black';
		el.style.transition = '1s';
	});
}
