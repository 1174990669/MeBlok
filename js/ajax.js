$(function(){
	// console.log(1)
	function getParam(id,_url){
		var url=_url||window.document.location.href;
		var url=url.toString();
		var u = url.split("?");
		var get = {};
		if (typeof(u[1]) == "string") {
		   u = u[1].split("&");
		   for (var i in u) {
		     var j = u[i].split("=");
		     get[j[0]] = j[1];
		   }
		 } else {
		   return;
		 }
		 return get[id];
	}
	var tid= getParam('tid');
	if (!tid) {
		tid=1
	}

	$.ajax({
		url:'http://jsonp.smallfox.cc/module/article/type.php',//路径地址
		type:'get',//请求方式
		data:{
			pt:'jsonp',
			tid:tid,
			page:'1',
			aiax:'yes',
		},
		callback:'callback',
		dataType:'jsonp',
		success:function(data){
			if (data.code==200) {
				console.log(200)
			}
			var con = '';
				// console.log(data.data)
			for (var i = 0; i < data.data.length-6; i++) {
				con+='<li>\
						<a href="detai.html?tid=' + data.data[i].j_tid + '&aid=' + data.data[i].j_cid+'">\
							<img id="figure-one" src="' + data.data[i].j_fengmian + '" alt="图片开小差啦" />\
							<strong>' + data.data[i].j_name + '</strong>\
							<p class="strong-p">' + data.data[i].j_jianjie + '</p>\
							<p>\
								<span>个人博客&nbsp;</span>\
								<span>2017/6/8</span>\
								<span class="pull-right">评论' + data.data[i].j_yue + '</span>\
								<span class="pull-right">浏览' + data.data[i].j_re + '</span>\
							</p>\
						</a>\
					</li>'
			}
			$('.ul-wen').html(con);
	
		}
	});
	
})