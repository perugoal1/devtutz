var mongoose = require('mongoose');
var config = require('./config');
mongoose.connect(config.host,function(){
		console.log('mongodb connected');
});
	var contentSchema = new mongoose.Schema({
		seqno: Number,
		type: String,
		desc: String,
		src: String
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

	var Tuts = mongoose.model('Tuts',tutSchema);



module.exports = Tuts;

