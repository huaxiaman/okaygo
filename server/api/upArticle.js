var Article = require('../db/article.js');

module.exports.upArticle = function(req, res) {
	var result = {
		message: '',
		statusCode: ''
	};

	function isEmptyObject(e) {
		var t;
		for(t in e) {
			return !1;
		};
		return !0;
	}

	if(req.query === undefined || isEmptyObject(req.query)) {
		req.query = req.body;
	}

// 检查参数是否完整

	if(!req.query.articleTitle || !req.query.articleContent) {
		result.message = '用户注册，缺少参数';
		result.statusCode = 1;
		res.json(result);
	
		console.log(req.query.articleTitle);
		console.log(result);
	} else {
		
		var article = new Article({
			
			articleTitle: req.query.articleTitle,
			articleContent: req.query.articleContent,
			articleAuthor: req.query.articleAuthor,
			publishDate: new Date(),
			articleAbstract: req.query.articleAbstract || '',
			articleClassify: req.query.articleClassify
	
		});
		
		article.save(function(err, saveDate) {
			
			if(err) {
				result.message = '数据保存失败';
				result.statusCode = 3;
				res.json(result);
	
				console.log(result);
				console.log("发生错误: " + err);
				
			} else {
	
				result.message = '上传成功';
				result.statusCode = 0;
				res.json(result);
			
				console.log(result);
			}
			
		});
	
	}
};
module.exports.getArticle = function(req, res){
	var result = {
		message: '',
		statusCode: ''
	};

	function isEmptyObject(e) {
		var t;
		for(t in e) {
			return !1;
		};
		return !0;
	}

	if(req.query === undefined || isEmptyObject(req.query)) {
		req.query = req.body;
	}
	//分析查询条件
	/*
	 
	 * 根据文章id查询
	 * 根据文章作者查询
	 * 根据文章标题查询
	 * 根据文章类别查询
	 * */
	function check(o){
		var t,n={};
		
		for (t in o){
			if(o[t] !== undefined){
				n[t] = o[t];
			}
		}
		return n;
	}
	


// 检查参数是否完整
	var s = check(req.query);
	for(var a in s){
		console.log(s[a])
	}
	
	if(isEmptyObject(s)) {
		result.message = '缺少参数';
		result.statusCode = 1;
		res.json(result);
	
		
		console.log(result);
	} else {
		
		Article.find(s,function(err, doc){
			if(err){
				console.log('cuowu');
			}else{
				res.json(doc)
			}
		})
	
	}
}
