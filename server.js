var express = require('express'),
	app = express();
	bodyParser =require('body-parser');

//EXPRESS MIDDLEWARE
app.use(bodyParser());

//CORS MIDDLEWARE
app.all('*', function (req, res, next){
	res.header('Access-Controller-Allow-Origin', "*");
	res.header('Access-Controller-Allow-Headers', req.headers['access-control-request-headers']);
	next();
});


//HANDLERS
app.get('/name', function (req, res){
	res.json({name: 'Justin'});
});

//LOCATION
app.get('/location', function (req, res){
	res.json({location: 'Ogden'});
});

//HOBBIES
var hobbies =['a running', 'b fun', 'c notfun'];
app.get('/hobbies', function (req, res){
	var hobbiesList = hobbies;
		order = req.query.order;



	if(order === 'asc') {
		hobbiesList.sort();
	} else if (order === 'desc') {
		hobbiesList.sort().reverse();
	}

	res.json(hobbiesList);
});

//OCCUPATIONS
var occupations = ['dude', 'spaceman'];

app.get('/occupations', function (req, res){
var occupationsList = occupations;
		order = req.query.order;

	if(order === 'asc') {
		occupationsList.sort();
	} else if (order === 'desc') {
		occpuationsList.sort().reverse();
	}

	res.json(occupationsList);
});

app.get('/occupations/latest', function (req, res){
	res.json({occupation: occupations[occupations.length - 1]});
})

//MENTIONS
var mentions =[];
app.get('/mentions', function (req, res){
	res.json(mentions);
});

app.post('/mentions', function(req, res){
	var newMention = {
		date: req.body.date,
		text: req.body.text,
		service: req.body.service
	};

	mentions.push(newMention);

	res.json(newMention);
});

//FRIENDS
var friends =[];
app.get('/friends', function (req, res){
	res.json(friends);
});

app.post('/friends', function (req, res){
	var newfriends = {
		name: req.body.name,
		shirtsize: req.body.shirtsize
	};

	friends.push(newfriends);

	res.json(newfriends);
});


//SKILLS

var skill =[
	{
		id: 1,
	  	name: 'Collecting cans',
	  	experience: 'Intermediate'
	},

	{
		id: 2,
	  	name: 'Smashing cans',
	  	experience: 'Expert'
	}

];



app.get('/skill', function (req, res){
	res.json(skills);
});

app.get('/skill', function (req, res){
	res.json(skills[req.params.id-1]);
});



app.post('/skill', function (req, res){
	res.json(skills);

	 var skill = req.body.skill;
	 
});



// app.put('/skill', function (req, res){
// 	res.json(skills);
// });



// app.delete('/skill', function (req, res){
// 	res.json(skills]);
// });




app.listen(9880);



































