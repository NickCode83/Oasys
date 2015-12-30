var express = require('express');
var http = require('http');
var path = require('path');
var User = require('./models/user.js');


var app = express();
var port = process.env.PORT || 3000;

app.set('view engine', 'jade');
app.set('port', port);
app.set('views', './views/pages');
app.locals.moment = require('moment');

var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended:true}));

app.get('/', function(req, res){
	res.render('index',{
		title:'Oasys系统-工作桌面'
	});
});

app.get('/index', function(req, res){
	res.render('index',{
		title:'Oasys系统-工作桌面'
	});
});

app.get('/profile', function(req, res){
	res.render('profile',{
		title:'Oasys系统-个人主页123'
	});
});

app.get('/email', function(req, res){
	res.render('email',{
		title:'Oasys系统-电子邮件'
	});
});

app.get('/projects', function(req, res){
	res.render('projects',{
		title:'Oasys系统-工作项目123'
	});
});

app.get('/contacts', function(req, res){
	res.render('contacts',{
		title:'Oasys系统-通讯录'
	});
});

app.get('/quality', function(req, res){
	res.render('quality',{
		title:'Oasys系统-质量数据'
	});
});

app.get('/cloud', function(req, res){
	res.render('cloud',{
		title:'Oasys系统-网络硬盘'
	});
});

app.get('/table', function(req, res){
	res.render('table',{
		title:'Oasys系统-表格数据123'
	});
});

//list page
app.get('/admin/userlist',function(req,res){
	
	User.fetch(function(err, users){
		if(err){
			console.log(err);
		}

		res.render('userlist',{
			title:'imooc 用户列表页1',
			users:users

		});
	});
});

//signup
app.post('/user/signup',function(req,res){
	var _user = req.body.user;

	var user = new User(_user);

	user.save(function(err,user){
		if(err){
			console.log(err);
		}

		console.log(user);
	});
	res.redirect('/');
});

app.use(express.static(path.join(__dirname,'public')));

var server = app.listen(port, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});