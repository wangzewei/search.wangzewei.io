/*--------------------搜索框样式控制js------------------------*/
var checktype=$(".changetype");
var type=$(".seach_type .type");
var seach_type=$(".seach_type");
var form=$("form");
var input=$("form .input");
var btn_search=$("form .btn_search");
var tbcolor="#126AC1";
input.focus();//文档加载完毕 搜索框获取焦点
var search_types={
	"types":[
		{name:"wd",action:"http://www.baidu.com/s",value:"百度一下",subcolor:"#126AC1",stype:"./images/sanjiao_03.png"},
		{name:"q",action:"http://www.so.com/s",value:"360搜索",subcolor:"#53C920",stype:"./images/sanjiao_04.png"},
		{name:"w",action:"http://www.soso.com/q",value:"腾讯搜索",subcolor:"#760AAA",stype:"./images/sanjiao_05.png"},
		{name:"query",action:"http://www.xuan369.com/so/qqkk8.jsp",value:"搜狗搜索",subcolor:"#F94F1B",stype:"./images/sanjiao_06.png"},
		{name:"q",action:"http://209.85.228.42/search",value:"谷歌搜索",subcolor:"#29C971",stype:"./images/sanjiao_07.png"}
	]};

checktype.click(function(){
	seach_type.css({"display":"block",height:0});
	seach_type.animate({
		height:(type.height()+1)*type.length,
	},500);
});

type.click(function(){
	//alert(search_types.types[$(this).index()].value)
	form.attr("action",search_types.types[$(this).index()].action);//改变表单提交位置
	input.attr("name",search_types.types[$(this).index()].name);//改变表单变量名
	btn_search.val(search_types.types[$(this).index()].value);//改变按钮显示
	btn_search.css({background:search_types.types[$(this).index()].subcolor});//改变按钮颜色
	tbcolor=search_types.types[$(this).index()].subcolor;//改变输入框边框颜色
	checktype.css({"background":"url("+search_types.types[$(this).index()].stype+")"});
	btn_search.css({"box-shadow":"0 1px 2px "+search_types.types[$(this).index()].subcolor});
	input.focus();//编辑框获取焦点
	seach_type.animate({
		height:0,
	},500,function(){
		seach_type.css({"display":"none",height:0});
	});
});

seach_type.mouseleave(function(){
	seach_type.animate({
		height:0,
	},500,function(){
		seach_type.css({"display":"none",height:0});
	});
});

input0.oninput=function(){
	clearInterval(window.intervalId);
	if(input0.value.trim()){
		window.time=Date.now();
		window.intervalId=setTimeout(function(){
			$.ajax({
				url: "https://maorx.cn/a/code",
				dataType: "jsonp",
				timeout: 5000,//请求超时
				data: {
					"action": "keyword",
					"time": window.time,
					"word": input0.value.trim()
				}
			});
		},500);
	}else{
		hideKeyword();
	}
};
//打印关键词
function keydata(keys){
	var len=keys.s.length;
	var keywordbox=$(".keyword");//关键词盒子
	var input=$("form .input");
	var btn_search=$("form .btn_search");
	if(len==0){
		//keywordbox.css({display:"none"});
	}else{
		keywordbox.css({display:"block"});
	}
	if(input.val()!=""){
		var spans="";
		for(var i=0;i<len;i++)
		{
			spans+="<span>"+keys.s[i]+"</span>"
		}
		keywordbox.html("<span>"+"翻译："+input.val()+"</span>"+spans);//把关键词写入关键词盒子 + 翻译候选项
		quotebox.style.opacity="0";
		keywordbox.animate({
			height:(keywordbox.children().height()+1)*len//关键词下滑效果
		},100);
	}

	//直接弹出翻译候选项
	input.keyup(function(event){
		if(input.val()!=""){
			if (event.which!=40&&event.which!=38){
				keywordbox.html("<span>"+"翻译："+input.val()+"</span>"+spans);
			//if(keywordbox.css("display")=='none'){
				keywordbox.css({display:"block",height:"30px"});
			}
				//}
		}
	});

	//点击候选词汇
	keywordbox.children().click(function(){
		input.val($(this).html());//选中词汇放入输入框

		var str = input.val();
		var finalStr=str.replace("翻译：","");
		if(str.indexOf("翻译：") != -1){
			form0.action="https://fanyi.baidu.com/#en/zh/"+finalStr;
			input0.name="";
		}else{
			switch (currentSearchEngine) {
			case 'baidu':
				form0.action="https://www.baidu.com/s"
				input0.name="word";
				break;
			case 'bing':
				form0.action="https://www.bing.com/search"
				input0.name="q";
				break;
			case 'google':
				form0.action="https://www.google.com/search"
				input0.name="q";
				break;
			}
		}//判断是否进行翻译

		keywordbox.animate({
			height:0//关键盒子收缩效果
		},100,function(){
			keywordbox.css({display:"none",height:"auto"});
			keywordbox.empty();//清空盒子内容
			numspan=0;
		});

		input.focus();//输入框获取焦点*/
		$("form").submit();//提交搜索
	});

	//提交按钮获取焦点后
	btn_search.focus(function(){//提交按钮获取焦点后
		keywordbox.animate({
			height:0//关键盒子收缩效果
		},100,function(){
			keywordbox.css({display:"none",height:"auto"});
			keywordbox.empty();//清空盒子内容
			numspan=0;
		});
	});

	keywordbox.mouseleave(function(){//鼠标离开关键字盒子后收缩关键词盒子（取代上一个方法）
		keywordbox.animate({
			height:0//关键盒子收缩效果
		},100,function(){
			keywordbox.css({display:"none",height:"auto"});
			keywordbox.empty();//清空盒子内容
		});
	});

	var numspan=0;//用来指定选择候选词（通过方向键改变）
	input.keydown(function(event){//如果使用回车提交时，关键词盒子也可以自动收缩
		if(event.which==13){
			keywordbox.animate({
				height:0//关键盒子收缩效果
			},100,function(){
				keywordbox.css({display:"none",height:"auto"});
				keywordbox.empty();//清空盒子内容
			});
		}
		//按下下方向键
		if(event.which==40){

			if(numspan==len+1)
				numspan=0;
			for(var i=0;i<len+1;i++){
				if(numspan==i){
					keywordbox.children().eq(i).css({
						"background-color":"rgba(255,255,255,0.2)"
					});
				}else{
					keywordbox.children().eq(i).css({
						"background-color":"rgba(255,255,255,0.1)"
					});
				}
			}
			input.val(keywordbox.children().eq(numspan).html());
			numspan++;
		}
		//按下上方向键
		if(event.which==38){

			numspan--;
			if(numspan==len+1)
				numspan=0;
			for(var i=0;i<len+1;i++){
				if(numspan==i){
					keywordbox.children().eq(i).css({
						"background-color":"rgba(255,255,255,0.2)"
					});
				}else{
					keywordbox.children().eq(i).css({
						"background-color":"rgba(255,255,255,0.1)"
					});
				}
			}
			input.val(keywordbox.children().eq(numspan).html());

		}
	});
}
