let btnAdd = document.querySelector('.addCardBacklog');
btnAdd.addEventListener('click', showForm);

function showForm(event) {
	document.querySelector('form').style.display = "block";
}

let itemsArray =[];
let form = document.querySelector('.formBacklog');
let ul = document.querySelector('.ulBacklog');
let button = document.querySelector('.clearAll');
let input = document.querySelector('.nameTaskBacklog');
let data = JSON.parse(localStorage.getItem('itemsBacklog'))

let liMaker = text => {	
let li = document.createElement('li');
li.style.cssText = 'background: #ffffff, border-radius: 5px, padding: 7px, margin-bottom: 15px, cursor: pointer;';
li.textContent = text;
li.classList.add('item');
ul.append(li);
}

let btnSubmit = document.querySelector('.btnSubmit');
btnSubmit.addEventListener('click', submit);

function update () {
 itemsArray = localStorage.getItem('itemsBacklog') ? JSON.parse(localStorage.getItem('itemsBacklog')) : []
}
	
function submit() {
	itemsArray.push(input.value)
  localStorage.setItem('itemsBacklog', JSON.stringify(itemsArray))
  liMaker(input.value);
  input.value = '';
	document.querySelector('form').style.display = "none";
}
window.onload = function() {
	if (data.length > 0) {
		update();
		data.forEach(item => {
		liMaker(item)
		})
	}
};
	
button.addEventListener('click', function() {
  localStorage.clear();
	update();
  while (ul.firstChild) {
    ul.removeChild(ul.firstChild)
  }
})
