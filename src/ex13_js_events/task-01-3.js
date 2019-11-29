let selectReady = document.querySelector('.selectReady');
let dataReady = JSON.parse(localStorage.getItem('itemsReady'));
let itemsArrayReady = localStorage.getItem('itemsReady') ? JSON.parse(localStorage.getItem('itemsReady')) : []
let dataBacklog = data;

function createliReady(text) {	
	let li = document.createElement('li');
	li.style.cssText = 'background: #ffffff, border-radius: 5px, padding: 7px, margin-bottom: 15px, cursor: pointer;';
	li.textContent = text;
	li.classList.add('item');
	document.querySelector('.ulReady').append(li);
}

let btnAddReady = document.querySelector('.addCardReady');
btnAddReady.addEventListener('click', showSelect);

function showSelect(event) {
	selectReady.style.display = "block";
	removeOptions(selectReady);
	dataBacklog.forEach(function(item) {
		let option = document.createElement('option');
		option.classList.add('optionReady');
		option.style.cssText = 'cursor: pointer;';
		option.innerHTML = item;
		selectReady.append(option);
	});
}
function removeOptions(selectbox) {
  for (let i = selectbox.options.length - 1 ; i >= 0 ; i--) {
    selectbox.remove(i);
  }
}

selectReady.addEventListener('change', addLiReady);
function addLiReady(event) {
	let clikOption = event.target.options[event.target.selectedIndex]
	itemsArrayReady.push(clikOption.value)
	localStorage.setItem('itemsReady', JSON.stringify(itemsArrayReady));
	createliReady(clikOption.value);
	
	dataBacklog.splice(getPos(dataBacklog,clikOption.value), 1);
	function getPos(arr,str) {
		for (let i = 0; i < arr.length; i++) {
			if (arr[i] == str) {
			return i
		}
	}
		return false	
	}
	localStorage.removeItem('itemsBacklog');
	localStorage.setItem('itemsBacklog', JSON.stringify(dataBacklog))
	clikOption.value = '';
	selectReady.style.display = "none";
}

window.onload = function() {
	if (dataBacklog.length > 0) {
		dataBacklog.forEach(item => {
		liMaker(item)
		})
	} 
	if (dataReady.length > 0) {
		dataReady.forEach(item => {
		createliReady(item)
		})
	}
};

document.querySelector('.clearAlReady').addEventListener('click', function() {
	localStorage.removeItem('itemsReady');
	itemsArrayReady = [];
  while (document.querySelector('.ulReady').firstChild) {
    document.querySelector('.ulReady').removeChild(document.querySelector('.ulReady').firstChild)
  }
});