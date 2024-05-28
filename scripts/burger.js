const nav = document.querySelector('.nav__list');
const burger = document.querySelector('.burger');

function burgerClick()
{
	console.log("burger")
	nav.classList.toggle('nav__list_active')
	burger.classList.toggle('active')
}

