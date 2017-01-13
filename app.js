var express = require('express'),
	path = require('path'),
	ueditor = require('ueditor'),
	bodyparser = require('body-parser'),
	cookieparser = require('cookie-parser'),
	http = require('http');
var router = require('./server/api/data.js');
/*var mongoose = require('mongoose');
var User = mongoose.model('User');*/
var app = express();
var jwt = require('express-jwt');

//设置默认访问端口
app.set('port',process.env.PORT || 3210);

//设置静态资源访问路径
//app.use(express.static(path.join(__dirname,'public')));

app.use(express.static(path.join(__dirname, '/app')));

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended: false}));
app.use(cookieparser());



/*app.use(function (req, res) {
    res.sendfile(path.join(__dirname, 'public/views', 'main.html'));
});*/

// catch 404 and forward to error handler
/*app.use(function (req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handlers
app.use(function(err, req, res, next) {
    if (err.name == 'UnauthorizedError') {
        res.status(401);
        res.json({ message: err.name + ":" + err.message });
    }
});*/
/*app.use(logger('dev'));//输出请求日志
app.use(bodyparser.json());//
app.use(bodyparser.urlencoded({extended: false}));
app.use(cookieparser())*/





/*
app.use("/ueditor/ue", ueditor(path.join(__dirname, '/public/static/ueditor'), function(req, res, next) {
    // ueditor 客户发起上传图片请求
    
    console.log(req.query.action);
    if (req.query.action === 'uploadimage') {
        var foo = req.ueditor;
        console.log(foo);
        var imgname = req.ueditor.filename;
        var img_url = '/image/';
        //你只要输入要保存的地址 。保存操作交给ueditor来做
        //res.ue_up(img_url); 
        console.log('dfdf')
    }
    //  客户端发起图片列表请求
    else if (req.query.action === 'listimage') {
        var dir_url = '/image/';
        // 客户端会列出 dir_url 目录下的所有图片
        res.ue_list(dir_url); 
    }
    // 客户端发起其它请求
    else {
        res.setHeader('Content-Type', 'application/json');
        res.redirect('/static/ueditor/nodejs/config.json');
    }
}));*/
app.use('/',router);

//监听运行端口
app.listen(app.get('port'),function(){
	console.log('app run at ' + app.get('port'));
});

/*var dbUrl = 'mongodb://localhost/mean';
mongoose.Promise = global.Promise;
mongoose.connect(dbUrl);

mongoose.connection.on('connected', function () {
    console.log('Mongoose connected to ' + dbUrl);
});
mongoose.connection.on('error', function (err) {
    console.log('Mongoose connection error: ' + err);
});
mongoose.connection.on('disconnected', function () {
    console.log('Mongoose disconnected');
});

require('./server/db/user.js');*/

