var mongoose = require('./db.js'),
	jwt = require('jsonwebtoken'),
	Schema = mongoose.Schema;
	

var ArticleSchema = new Schema({
	articleTitle: {type: String, required: true},
	articleAuthor:{type: String},
	articleNo:{type: String},
	articleClassify:{type: String},
	publishDate: {type: Date,},
	articleContent: {type: String},
	articleAbstract: {type: String}

})

module.exports = mongoose.model('Article',ArticleSchema);
