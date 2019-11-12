let elem = document.querySelector('.userMenu');
elem.addEventListener('click', navMenuUser);

function navMenuUser() {
	let nav = document.querySelector('.navMenuUser');
	let imgBotton = document.querySelector('.openMenu');
	if (!nav) {
		createNavMenuUser();
		imgBotton.classList.remove("fa-chevron-down");
		imgBotton.classList.add("fa-chevron-up");
	} else {
		nav.remove();
		imgBotton.classList.remove("fa-chevron-up");
		imgBotton.classList.add("fa-chevron-down");
	}	
}

function createNavMenuUser() {
	let nav = document.createElement('nav');
	nav.classList.add('navMenuUser');
	elem.append(nav);
	let ul = document.createElement('ul');
	ul.classList.add('navMenu');
	nav.append(ul);
	ul.style.cssText = 'position: absolute; right: 60px; top: 50px; display: flex; flex-direction: column; list-style-type: none; width: 282px; padding: 15px; background: #EBECF0; border-radius: 10px; font-size: 18px;';
	for (let i = 1; i <= 4; i++) {
		let li = document.createElement('li'),
		link = document.createElement('a');
		link.href = "#";
		li.classList.add('menuItem');
		link.classList.add('link');
		li.style.cssText = 'margin-bottom: 15px; width: 258px; background: #FFFFFF; border-radius: 5px; cursor:pointer;';
		link.style.cssText = 'text-decoration: none; color: #000000; font-size: 18px;';
		li.append(link);
		ul.append(li);
	}
	let links = document.querySelectorAll('.link');
	links[0].append("Personal data");
	links[1].append("My task");
	links[2].append("Settings");
	links[3].append("Sign out");
}