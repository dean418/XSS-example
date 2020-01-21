let input = document.getElementById('input');
let submit = document.getElementById('submit');
let list = document.getElementById('list');

document.cookie = "mySuperSecretPassword"

submit.addEventListener('click', () => {
	sendItem(input.value);
});

const sendItem = (item) => {
	let itemObj = {item}

	fetch('http://192.168.1.31:3000', {
		method: 'POST',
		headers: { "Content-Type": "application/json" },
		body: JSON.stringify(itemObj)
	});

	list.innerHTML += `<li>${item}</li>`;
	input.value = '';
}

const getItems = async() => {
	let items = await fetch('http://192.168.1.31:3000/items');
	items = await items.json();

	for(let item of items.items) {
		list.innerHTML += `<li>${item}</li>`
	}
}
getItems();