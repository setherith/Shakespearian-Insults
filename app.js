var http = require('http');
var express = require('express');
var lists = require('./lists.js');

var app = express();

function RandomElement(array) {
	var index = Math.floor(Math.random() * array.length);
	return array[index];
}

function preparethMineTongue(err, callback) {
	result = "Thou ";
	result += RandomElement(lists.listA) + " ";
	result += RandomElement(lists.listB) + " ";
	result += RandomElement(lists.listC) + " ";
	return result;
};

app.use('/', function(req, res) {
	res.end(preparethMineTongue());
});

app.listen(5000, function() {
	console.log('... Insulting on localhost:5000 ...')
});