const express = require('express');
const port = 8000;
const app = express();
const path = require('path');
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

const bodyParser = require('body-parser')

app.use( bodyParser.json() );	
app.use(bodyParser.urlencoded({	
extended: true
}));

app.get('/', (req, res) => {
	res.render("home.ejs", {percentage: ""});
});

app.post('/', (req, res)=> {
	userName = req.body.username;
	partnerName = req.body.partnername;

	var combinedNames = userName + partnerName

	var lowerNames = combinedNames.toLowerCase()
	console.log(lowerNames);
	var t = lowerNames.split("t").length - 1;
	var r = lowerNames.split("r").length - 1;
	var u = lowerNames.split("u").length - 1;
	var e = lowerNames.split("e").length - 1;
	var firstDigit = t + r + u + e

	if (firstDigit < 5) {
		firstDigit = firstDigit + 5;
	}

	var l = lowerNames.split("l").length - 1;
	var o = lowerNames.split("o").length - 1;
	var v = lowerNames.split("v").length - 1;
	var e = lowerNames.split("e").length - 1;
	var secondDigit = l + o + v + e

	var lovePercentage = firstDigit + '' + secondDigit;

	res.render("home.ejs", {percentage: lovePercentage});
});

app.listen(8000);