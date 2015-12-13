var express = require('express');
var http = require('http');
var path = require('path');

var app = express();
var port = process.env.PORT || 3000;

app.set('view engine', 'jade');
app.set('port', port);
app.set('views', './views/pages');

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
		title:'Oasys系统-工作项目'
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

app.use(express.static(path.join(__dirname,'public')));

var server = app.listen(port, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});