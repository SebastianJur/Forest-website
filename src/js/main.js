const body = document.querySelector('body');
const nav = document.querySelector('nav');
const navBtn = document.querySelector('.hamburger');
const navLinksMobile = document.querySelector('.nav__links-mobile');
const navLinksDesktop = document.querySelector('.nav__links-desktop');
const allNavLinksMobile = navLinksMobile.querySelectorAll('.nav__link');
const allNavLinksDesktop = navLinksDesktop.querySelectorAll('.nav__link');
const sectionsSpy = document.querySelectorAll('.section');
const headerSection = document.querySelector('.header');
const footerYear = document.querySelector('.footer_year');

// Scroll Spy

const handleScrollSpy = () => {
	if (document.body.classList.contains('main-page')) {
		const sections = [];

		sectionsSpy.forEach((section) => {
			if (window.scrollY <= section.offsetTop + section.offsetHeight - 81) {
				sections.push(section);

				const activeSection = navLinksDesktop.querySelector(
					`.nav__link[href*="${sections[0].id}"]`
				);
				allNavLinksDesktop.forEach((item) => item.classList.remove('active'));

				activeSection.classList.add('active');
			}
		});
	}
};

// Scrollbar

const hasScrollbar = () => {
	if (body.scrollHeight > body.clientHeight) {
		body.classList.add('has-scrollbar');
	}
};

// Mobile - Hamburger

const handleNavLinksAnimation = () => {
	allNavLinksMobile.forEach((item, index) => {
		item.classList.toggle('nav-links-animation');
		item.style.animationDelay = `.${index}s`;
	});
};

const deleteAnimation = () => {
	allNavLinksMobile.forEach((item) => {
		item.addEventListener('click', () => {
			allNavLinksMobile.forEach((el) => {
				el.classList.remove('nav-links-animation');
			});
		});
	});
};

const handleNav = () => {
	navBtn.classList.toggle('is-active');
	navLinksMobile.classList.toggle('nav__links-mobile--active');

	if (navLinksMobile.classList.contains('nav__links-mobile--active')) {
		document.body.style.overflow = 'hidden';
	} else {
		document.body.style.overflow = 'auto';
	}

	allNavLinksMobile.forEach((item) => {
		item.addEventListener('click', () => {
			navBtn.classList.remove('is-active');
			navLinksMobile.classList.remove('nav__links-mobile--active');
			document.body.classList.remove('sticky-body');
			document.body.style.overflow = 'auto';
		});
	});

	handleNavLinksAnimation();
	deleteAnimation();
};

const handleCurrentYear = () =>
	(footerYear.innerText = new Date().getFullYear());

window.addEventListener('scroll', handleScrollSpy);
handleScrollSpy();
document.addEventListener('DOMContentLoaded', hasScrollbar);
navBtn.addEventListener('click', handleNav);
handleCurrentYear();
