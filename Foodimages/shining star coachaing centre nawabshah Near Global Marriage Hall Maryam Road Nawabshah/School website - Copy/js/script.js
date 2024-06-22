let navbar = document.querySelector('.header .navbar');

document.querySelector('#menu-btn').onclick = () =>{
  navbar.classList.toggle('active');
  
}



window.onscroll = () =>{
  navbar.classList.remove('active');
  
}

var swiper = new Swiper(".review-slider",{
  spaceBetween: 20,
  centeredSlides: true,
  grabCursor: true,
  autoplay:{
    delay: 7500,
    disableOnInteraction: false,
  },
  loop: true,
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    991: {
      slidesPerView: 3,
    },
  },
});
function sendToWhatsapp(){
	let number = "03043349182";

	let name = document.getElementById('name').value;
	let email = document.getElementById('email').value;
	let message = document.getElementById('message').value;

	var url = "https://wa.me/" +03043349182+"?text="
	+ "Name : " +name+ "%0a"
	+ "Email : " +email+ "%0a"
	+ "Message : " +message+ "%0a%0a";

	window.open(url, '_blank').focus();
}
