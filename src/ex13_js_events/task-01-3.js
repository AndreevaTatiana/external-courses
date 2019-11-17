let selectReady = document.querySelector('.selectReady');
let dataReady = JSON.parse(localStorage.getItem('itemsReady'));
let btnAddReady = document.querySelector('.addCardReady');
btnAddReady.addEventListener('click', showSelect);
function showSelect(event) {
	selectReady.style.display = "block";
	let data = JSON.parse(localStorage.getItem('itemsBacklog'))
	removeOptions(selectReady);
	data.forEach(function(item, index) {
	let option = document.createElement('option');
	document.querySelector('.selectReady').append(option);
	option.id = index;
	option.classList.add('optionReady');
	option.style.cursor = 'pointer';
	option.innerHTML = item;
	});
}
function removeOptions(selectbox) {
  for (let i = selectbox.options.length - 1 ; i >= 0 ; i--) {
    selectbox.remove(i);
  }
}
function createliReady(text) {	
	let li = document.createElement('li');
	li.style.cssText = 'background: #ffffff, border-radius: 5px, padding: 7px, margin-bottom: 15px, cursor: pointer;';
	li.textContent = text;
	li.classList.add('item');
	document.querySelector('.ulReady').append(li);
}
let itemsArrayReady = localStorage.getItem('itemsReady') ? JSON.parse(localStorage.getItem('itemsReady')) : []
selectReady.addEventListener('change', addLiReady);
function addLiReady(event) {
	let clikOption = event.target.options[event.target.selectedIndex]
	itemsArrayReady.push(clikOption.value)
	localStorage.setItem('itemsReady', JSON.stringify(itemsArrayReady));
	createliReady(clikOption.value);
	clikOption.value = '';
	selectReady.style.display = "none";
}