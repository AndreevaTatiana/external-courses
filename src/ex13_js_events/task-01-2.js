let form = document.querySelector('.formBacklog')
let ul = document.querySelector('.ulBacklog');
let button = document.querySelector('.clearAll');
let input = document.querySelector('.nameTaskBacklog');
let itemsArray =localStorage.getItem('itemsBacklog') ? JSON.parse(localStorage.getItem('itemsBacklog')) : []
let data = JSON.parse(localStorage.getItem('itemsBacklog'))

function liMaker(text) {
let li = document.createElement('li');
li.style.cssText = 'background: #ffffff, border-radius: 5px, padding: 7px, margin-bottom: 15px, cursor: pointer;';
li.textContent = text;
li.classList.add('item');
ul.append(li);
}

let btnAdd = document.querySelector('.addCardBacklog');
btnAdd.addEventListener('click', showForm);
function showForm(event) {
	form.style.display = "block";
}

let btnSubmit = document.querySelector('.btnSubmit');
btnSubmit.addEventListener('click', submit);
function submit() {
	itemsArray.push(input.value)
  localStorage.setItem('itemsBacklog', JSON.stringify(itemsArray))
  liMaker(input.value);
  input.value = '';
	form.style.display = "none";
}
button.addEventListener('click', function() {
  localStorage.clear();
	itemsArray = [];
  while (ul.firstChild) {
    ul.removeChild(ul.firstChild)
  }
})
