var mongoose = require('mongoose');
var config = require('./config');
mongoose.connect(config.host,function(){
		console.log('mongodb connected');
});

	var tutSchema = new mongoose.Schema({
		 mainheading: String ,
		 desc: String ,
		 mainbg: String,
		 tags:[],
		 date:{date: String,value: Number},
		 content:[],
		 prev:{id: String},
		 next:{id: String}
});
	
	var tagsSchema = new mongoose.Schema({
		 tags : []
});
	
	var loginSchema = new mongoose.Schema({
		 user : String,
		 password : String
});
	var Tuts = {};
	Tuts.tuts = mongoose.model('Tuts',tutSchema ,'Tuts');
	Tuts.tags = mongoose.model('Tags',tagsSchema ,'Tags');
	Tuts.login = mongoose.model('Login',loginSchema ,'Login');



module.exports = Tuts;

