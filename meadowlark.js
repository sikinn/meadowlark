var express = require('express');

var app = express();
//static中间件加在所有路由之前
app.use(express.static(__dirname + '/public'));
//指明默认布局
var handlebars = require('express3-handlebars').create({defaultLayout:'main'});
app.engine('handlebars',handlebars.engine);
app.set('view engine','handlebars');
app.set('port',3000);




//我只是想试试把函数作为参数传入
function indexPage(req,res){
    res.render('home');
}

app.get('/',indexPage);

var fortunes = [
    "huaQ",
    "rua",
    "我燃烧你的梦",
    "他要吃人啦",
]

app.get('/about',function(req,res){
    var randomFortune = fortunes[Math.floor(Math.random()* fortunes.length)];
    res.render('about',{fortune : randomFortune});
});

//定制404页面
app.use(function(req,res){
    res.status(404);
    res.render('404');
});

//定制500页面
app.use(function(err,req,res,next){
    console.error(err.stack);
    res.status(500);
    res.render('500');
})


app.listen(app.get('port'),function(){
    console.log('Express started on http://localhost: '+
    app.get('port') + '; press Ctrl-C terminate.');
})