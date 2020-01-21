const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const express = require('express');

const app = express();

app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));


let items = [];

app.get('/', (req, res) => {
	res.render('index', {name: "something"});
});

app.post('/', (req, res) => {
	let item = req.body.item;

	if(item != '') {
		items.push(item);
	}

	res.send({
		items
	});
});

app.get('/items', (req, res) => {
	res.send({
		items
	});
})

app.listen(3000);