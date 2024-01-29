import { products } from './data/productsData.js';
import { services } from './data/servicesData.js';

const menuIcon = document.querySelector('.menu');
const closeIcon = document.querySelector('.close');
const menuContent = document.querySelector('.menu-content');
const rightDetails = document.querySelector('.details .right');
const leftDetails = document.querySelector('.details .left');
const servicesContainer = document.querySelector('.services');

const setDetails = (data, container) => {
	let html = ``;
	data.map((el) => {
		html += `<li><p>${el}</p></li>`;
	});
	container.innerHTML = html;
};

const setServices = () => {
	let html = ``;
	services.map((service) => {
		html += `
			<div class="service d-flex flex-column-reverse flex-lg-row justify-content-lg-between align-items-center gap-2 gap-lg-0">
					<div>
						<h4 class="text_green fw-light mb-4 text-center text-lg-end">${
							service.title
						}</h4>
						<ul class="p-0 ">
							${service.properties
								.map((property) => {
									return `<li>${property}</li>`;
								})
								.join('')}
						</ul>
					</div>
					<div>
						<img
							class="w-100"
							loading="lazy"
							src="./assets/images/${service.image}"
							alt="${service.title}" />
					</div>
				</div>
		`;
	});
	servicesContainer.innerHTML = html;
};

const showHideMenu = () => {
	menuIcon.classList.toggle('d-none');
	menuContent.classList.toggle('d-none');
	closeIcon.classList.toggle('d-none');
};

setDetails(products.right, rightDetails);
setDetails(products.left, leftDetails);
setServices();
menuIcon.addEventListener('click', showHideMenu);
closeIcon.addEventListener('click', showHideMenu);
