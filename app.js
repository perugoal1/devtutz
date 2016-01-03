
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


app.get('/postdb',function(){
	var tutslist = new model({
		 mainheading:"Blog1",
		 desc:"Description of the awesome app 1",
		 mainbg:"",
		 tags:["html","css"],
		 date:{date:"",value:"1451221619320"},
		 content:[{seqno:'1',type:"heading",desc:"hey",src:""},
		          {seqno:'2',type:"para",desc:"this is a para",src:""},
		          {seqno:'1',type:"code",desc:"this is a code",src:""},
		          {seqno:'1',type:"img",desc:"this is an img",src:""}],
		 prev:{id:"2"}
	     });
	
	tutslist.save(function(err, thor) {
		  if (err) return console.error(err);
		  console.dir(thor);
		});
});