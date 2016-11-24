// 文章页面
(function(){
	var dom = {
		tocClose: $('.toc-close'),
		tocArticle: $('.toc-article')
	}
	if(dom.tocArticle.length < 1) return;

	dom.tocClose.on('click',function(){
		dom.tocArticle.fadeOut().prev().fadeIn()
		.on('click',function(){
			$(this).fadeOut().next().fadeIn();
		});
	});
	
})();
