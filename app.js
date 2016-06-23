
/**
 * Module dependencies.
 */

var express = require('express')
  , routes = require('./routes')
  , user = require('./routes/user')
  , http = require('http')
  , path = require('path')
  , model = require('./model')

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

app.get('/', routes.index);
app.get('/partials/:filename', routes.partials);
app.get('/users', user.list);

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server now listening on port ' + app.get('port'));
});


app.post('/postdb',function(req,res){
	var tutslist = new model({
		 mainheading:req.body.mainheading,
		 desc:req.body.desc,
		 mainbg:"",
		 tags:["html","css"],
		 date:{date:"",value:"1451221619320"},
		 content: req.body.content
	     });
	
	tutslist.save(function(err, thor) {
		  if (err) return console.error(err); 
		  res.send('success');
		});
});

app.get('/getinitialList',function(req,res){
	model.find(function(err,list){
		res.json(list);
	});
});