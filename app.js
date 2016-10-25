var http = require('http');
var express = require('express');
var listA = require('./listA.js');
var listB = require('./listB.js');
var listC = require('./listC.js');

var app = express();

function RandomElement(array) {
	var index = Math.floor(Math.random() * array.length);
	return array[index];
}

function preparethMineTongue(err, callback) {
	result = "Thou ";
	result += RandomElement(listA.listA) + " ";
	result += RandomElement(listB.listB) + " ";
	result += RandomElement(listC.listC) + " ";
	return result;
};

app.use('/', function(req, res) {
	res.end(preparethMineTongue());
});

app.listen(5000, function() {
	console.log('... Insulting on localhost:5000 ...')
});