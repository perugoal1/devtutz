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

	var Tuts = mongoose.model('Tuts',tutSchema);
	var Tags = mongoose.model('Tags',tutSchema);



module.exports = Tuts;

