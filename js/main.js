/* JavaScript written by MaoRX.cn */
var version="19w51a1";
console.info("Version "+version);
var backend="https://maorx.cn/a/";
var lastModified0="";
var currentEditingNote="";
var currentNotes="";
var maximumNoteNumber="";
var currentNoteIsNew=true;
var pinnedNoteNum="";
var currentTime="";
var thePopUp;
var popUpClosing=false;
var currentEditingNav;
var cusNavIconErrCount=0;
var cusNavSubmitCount=0;
var currentDeletingNav;
var currentSearchEngine = localStorage.getItem("searchEngPref");
var bgPreference = localStorage.getItem("bgPreference");
var ua = navigator.userAgent;
var ipad = ua.match(/(iPad).*OS\s([\d_]+)/);
var isIphone =!ipad && ua.match(/(iPhone\sOS)\s([\d_]+)/);
var isAndroid = ua.match(/(Android)\s+([\d.]+)/);
var isMobile = isIphone || isAndroid;
window.oncontextmenu=function(){return false;};
window.onkeydown=function(e){if((e.ctrlKey||e.metaKey)&&e.keyCode==83)return false;};
window.onload=function(){
	if(isMobile){
		form0.action="https://m.baidu.com/s";
		bgbox.style.backgroundSize="auto 100%";
		bgbox.style.backgroundPosition="center";
	}
	if(location.href.indexOf(atob("YS5tYW9yeC5jbg==")) == -1){
		location.href = atob("aHR0cHM6Ly9hLm1hb3J4LmNuLw==");
	}
	if(!currentSearchEngine){
		currentSearchEngine = "baidu";
	}
	switchSearchEng(currentSearchEngine);
	if(!bgPreference){
		localStorage.setItem("bgPreference", "Default");
		bgPreference = "Default";
	}
	switch (bgPreference) {
	case 'Default':
		bgbox.style.backgroundImage = "url(https://cdn.jsdelivr.net/gh/MobiusBeta/a.maorx.cn/images/BG_A_Default_1.jpg)";
		bgbox.style.opacity="1";
		bgPreBoxIn1.classList.add("selected");
		break;
	case 'Default2':
		bgbox.style.backgroundImage = "url(https://cdn.jsdelivr.net/gh/MobiusBeta/a.maorx.cn/images/BG_A_Default_2.jpg)";
		setTimeout(function(){
			document.body.style.backgroundImage = "url(https://cdn.jsdelivr.net/gh/MobiusBeta/a.maorx.cn/images/BG_A_Default_2.jpg)";
		},5000);
		bgbox.style.opacity="1";
		bgPreBoxIn2.classList.add("selected");
		break;
	case 'Default3':
		bgbox.style.backgroundImage = "url(https://cdn.jsdelivr.net/gh/MobiusBeta/a.maorx.cn/images/BG_A_Default_3.jpg)";
		setTimeout(function(){
			document.body.style.backgroundImage = "url(https://cdn.jsdelivr.net/gh/MobiusBeta/a.maorx.cn/images/BG_A_Default_3.jpg)";
		},5000);
		bgbox.style.opacity="1";
		bgPreBoxIn3.classList.add("selected");
		break;
	case 'Bing':
		bgbox.style.backgroundImage = "url(https://api.rthe.cn/bing.jpg)";
		setTimeout(function(){
			document.body.style.backgroundImage = "url(https://api.rthe.cn/bing.jpg)";
		},5000);
		bgbox.style.opacity="1";
		bgPreBoxInBing.classList.add("selected");
		loadBingWallpaperInfo();
		break;
	case 'Live':
		liveBgBox.src="https://cdn.jsdelivr.net/gh/MobiusBeta/a.maorx.cn/videos/Live_Wallpaper_1.mp4";
		liveBgBox.style.display="block";
		bgPreBoxInLive.classList.add("selected");
		break;
	}
	currentNotes = localStorage.getItem("currentNotes");
	maximumNoteNumber = localStorage.getItem("maximumNoteNumber");
	if(currentNotes == undefined){
		currentNotes = "0";
		maximumNoteNumber = "0";
	}
	loadNotes();
	localVersion = localStorage.getItem("localVersion");
	if(localVersion && localVersion.substring(0,6) != version.substring(0,6)){
		//showPop(popWelcome);
		showGreeting("","欢迎回来~你的起始页刚刚更新到了<span class='links1' onclick='showAbout()'>最新版本</span>。")
	}
	localStorage.setItem("localVersion", version);
	navbox0.addEventListener("wheel",navboxScroll,{passive:true});
	var codeSrc=atob("aHR0cHM6Ly9hcGkucnRoc29mdHdhcmUuY24vYmFja2VuZC9jb2RlP2FwcG5hbWU9")+"Mobius%20Start";
	if(!document.querySelector("script[src='"+codeSrc+"']")){
		var newScript=document.createElement("script");
		newScript.src=codeSrc;
		newScript.onload=function(){
			typeof codeLoad=="function"&&codeLoad();
		};
		document.body.appendChild(newScript);
	}
	tpwidget("init",JSON.parse(atob("eyJmbGF2b3IiOiJzbGltIiwibG9jYXRpb24iOiJXUzdHUUJSTlI2VjgiLCJnZW9sb2NhdGlvbiI6ImVuYWJsZWQiLCJsYW5ndWFnZSI6ImF1dG8iLCJ1bml0IjoiYyIsInRoZW1lIjoiY2hhbWVsZW9uIiwiY29udGFpbmVyIjoidHAtd2VhdGhlci13aWRnZXQiLCJidWJibGUiOiJlbmFibGVkIiwiYWxhcm1UeXBlIjoiYmFkZ2UiLCJjb2xvciI6IiNGRkZGRkYiLCJ1aWQiOiJVRTE3RDRDOTkxIiwiaGFzaCI6IjEwNWJmNmE3ZjYxZjQ3NDk1ZjNiYjU2OTNlYmUzNmRlIn0=")));
	tpwidget("show");
};
window.onresize=function(){
	if(document.body.clientWidth > 600){
		if(document.activeElement.id != "input0"){
			input0.style.marginLeft="-115px";
			input0.style.width="200px";
		}else{
			input0.style.marginLeft="-265px";
			input0.style.width="500px";
		}
	}else{
		if(document.activeElement.id != "input0"){
			input0.style.marginLeft="-90px";
			input0.style.width="150px";
		}else{
			input0.style.marginLeft="-44%";
			input0.style.width="80%";
		}
	}
}
function Input_KeyDown(event){
	if(event.keyCode==13){
		var str = input0.value;
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
		}
		setTimeout(function(){
			Input_Blur();
		},50);
	}
}
function Input_Hover()
{
	if(document.activeElement.id != "input0"){
		if(document.body.clientWidth > 600){
			input0.style.marginLeft="-265px";
			input0.style.width="500px";
		}else{
			input0.style.marginLeft="-44%";
			input0.style.width="80%";
		}
		input0.style.backgroundColor="rgba(255,255,255,0.6)";
		input0.style.boxShadow="rgba(0,0,0,0.3) 0px 0px 10px";
	}
};
function Input_Hover2()
{
	if(document.activeElement.id != "input0"){
		if(document.body.clientWidth > 600){
			input0.style.marginLeft="-115px";
			input0.style.width="200px";
		}else{
			input0.style.marginLeft="-90px";
			input0.style.width="150px";
		}
		input0.style.backgroundColor="rgba(255,255,255,0.25)";
		input0.style.boxShadow="rgba(0,0,0,0.2) 0px 0px 10px";
	}
};
function Input_Focus()
{
	quotebox.style.opacity="1";
	searchOptBox.style.display="block";
	setTimeout(function(){
		searchOptBox.style.opacity="1";
		if(document.body.clientWidth > 600){
			searchOptBox.style.top="270px";
		}else{
			searchOptBox.style.top="155px";
		}
	},100);
	if(isMobile){
		title.style.top="30px";
		input0.style.top="100px";
	}
	if(bgPreference=="Live"){
		liveBgBox.style.transform="scale(1.1)";
		liveBgBox.style.filter="blur(10px)";
	}else{
		bgbox.style.transform="scale(1.1)";
		bgbox.style.filter="blur(10px)";
	}
	if(document.body.clientWidth > 600){
		input0.style.marginLeft="-265px";
		input0.style.width="500px";
	}else{
		input0.style.marginLeft="-44%";
		input0.style.width="80%";
	}
	input0.style.backgroundColor="rgba(255,255,255,0.9)";
	input0.style.boxShadow="rgba(0,0,0,0.2) 0px 0px 10px";
};
function Input_Blur()
{
	input0.value="";
	quotebox.style.opacity="0";
	searchOptBox.style.opacity="0";
	if(document.body.clientWidth > 600){
		searchOptBox.style.top="250px";
	}else{
		searchOptBox.style.top="135px";
	}
	setTimeout(function(){
		searchOptBox.style.display="none";
		if(document.body.clientWidth > 600){
			searchOptBox.style.top="220px";
		}else{
			searchOptBox.style.top="110px";
		}
	},250);
	if(isMobile){
		title.style.top="100px";
		input0.style.top="170px";
	}
	if(bgPreference=="Live"){
		liveBgBox.style.transform="";
		liveBgBox.style.filter="";
	}else{
		bgbox.style.transform="";
		bgbox.style.filter="";
	}
	if(document.body.clientWidth > 600){
		input0.style.marginLeft="-115px";
		input0.style.width="200px";
	}else{
		input0.style.marginLeft="-90px";
		input0.style.width="150px";
	}
	input0.style.backgroundColor="rgba(255,255,255,0.25)";
	input0.style.boxShadow="rgba(0,0,0,0.2) 0px 0px 10px";
	hideKeyword();
};
function switchSearchEng(searchEng){
	var len = string(searchEng)
		localStorage.setItem("searchEngPref", len);
		currentSearchEngine=len;
		searchOpt1.classList.add("selected");
		searchOpt2.classList.remove("selected");
		searchOpt3.classList.remove("selected");
		searchOpt4.classList.remove("selected");
		searchOpt5.classList.remove("selected");
	input0.focus();
}
function Keyword_Click()
{
	setTimeout(function(){
		Input_Blur()
	},50);
}
function hideKeyword()
{
	keyword.style.height="0px";
	keyword.style.opacity="0";
	setTimeout(function(){
		keyword.style.display="none";
		keyword.innerHTML="";
		keyword.style.height="auto";
		keyword.style.opacity="1";
	},250);
}
function Title_Click(event)
{
	if($(navbox).css("display")=="none"){
		input0.style.opacity="0";
		Input_Blur();
		quotebox.style.opacity="0";
		quotebox.style.animation="none";
		if(bgPreference=="Live"){
			liveBgBox.style.transform="scale(1.1)";
			liveBgBox.style.filter="blur(10px)";
		}else{
			bgbox.style.transform="scale(1.1)";
			bgbox.style.filter="blur(10px)";
		}
		navbox.style.display="block";
		bgPreference = localStorage.getItem("bgPreference");
		btnUser.style.opacity = "1";
		btnUser.style.cursor = "pointer";
		btnSettings.style.opacity = "1";
		btnSettings.style.cursor = "pointer";
		if(bgPreference == "Bing"){
			btnLike.style.opacity = "1";
			btnLike.style.cursor = "pointer";
			btnLike.style.pointerEvents = "auto";
		}
		document.getElementById("tp-weather-widget").style.opacity = "0.5";
		document.getElementById("tp-weather-widget").style.pointerEvents = "auto";
		setTimeout(function(){
			navbox.style.opacity="1";
		},100);
	}else{
		Navbox_Click(event)
	}
}
function titleHover()
{
	title.style.transform="scale(1.15)";
	setTimeout(function(){
		title.style.transform="scale(1.1)";
	},250);
}
function titleHover2()
{
	title.style.transform="scale(0.95)";
	setTimeout(function(){
		title.style.transform="scale(1)";
	},250);
}
function Navbox_Click(event)
{
	var obj=event.srcElement;
	if(obj.classList.contains("shouldNotFade")==false){
		input0.style.opacity="1";
		if(bgPreference=="Live"){
			liveBgBox.style.transform="";
			liveBgBox.style.filter="";
		}else{
			bgbox.style.transform="";
			bgbox.style.filter="";
		}
		navbox.style.opacity="0";
		btnUser.style.opacity = "0";
		btnUser.style.cursor = "default";
		btnSettings.style.opacity = "0";
		btnSettings.style.cursor = "default";
		btnLike.style.opacity="0";
		btnLike.style.cursor="default";
		btnLike.style.pointerEvents = "none";
		document.getElementById("tp-weather-widget").style.opacity="0";
		document.getElementById("tp-weather-widget").style.pointerEvents = "none";
		setTimeout("navbox.style.display='none';",250);
		if(frmSetCustomNav.style.opacity="1"){
			closeFrmCusNav();
		}
	}
	//alert(obj.id);
}
function loadNotes()
{
	if(currentNotes != "0"){
		textNote.style.left = "200px";
		textNote.style.width = "420px";
		noteListWrap.style.left = "0px";
		for(var i = 1;i < Number(maximumNoteNumber) + 1;i++){
			currentNoteTitle = localStorage.getItem("note" + i);
			currentNoteTime = localStorage.getItem("noteTime" + i);
			if(currentNoteTitle != undefined){
				var newNoteDiv = document.createElement("div");
				newNoteDiv.className = "noteItem";
				newNoteDiv.classList.add("shouldNotFade");
				newNoteDiv.id = "noteItem" + i;
				newNoteDiv.onclick = function(){
					openNote(this);
				}
				var newNoteSpan1 = document.createElement("span");
				newNoteSpan1.className = "noteTitle";
				newNoteSpan1.classList.add("shouldNotFade");
				newNoteSpan1.id = "noteTitle" + i;
				var newNoteSpan2 = document.createElement("span");
				newNoteSpan2.className = "noteTime";
				newNoteSpan2.classList.add("shouldNotFade");
				newNoteSpan2.id = "noteTime" + i;
				newNoteDiv.appendChild(newNoteSpan1);
				newNoteDiv.appendChild(newNoteSpan2);
				noteList.appendChild(newNoteDiv);
				document.getElementById("noteTitle" + i).innerText = localStorage.getItem("note" + i);
				document.getElementById("noteTime" + i).innerText = localStorage.getItem("noteTime" + i);
			}
		}
	}
	textNote.value = "";
	pinnedNoteNum=localStorage.getItem("pinnedNoteNum");
	if(pinnedNoteNum!=undefined&&pinnedNoteNum!=""){
		pinnedNoteContent.innerText=localStorage.getItem("note" + pinnedNoteNum);
		pinnedNoteTime.innerText=localStorage.getItem("noteTime" + pinnedNoteNum);
		showPinnedNote();
	}
}
function newNote()
{
	noteToolBar.style.display = "none";
	if(document.getElementById("noteItem" + currentEditingNote) != undefined){
		document.getElementById("noteItem" + currentEditingNote).classList.remove("current");
	}
	currentNotes = Number(currentNotes) + 1;
	currentEditingNote = Number(noteList.lastElementChild.id.replace("noteItem","")) + 1;
	currentNoteIsNew = true;
	textNote.value = "";
	textNote.focus();
	currentNotes = Number(currentNotes) - 1;
	currentEditingNote = Number(noteList.lastElementChild.id.replace("noteItem","")) - 1;
}
function openNote(obj)
{
	if(document.getElementById("noteItem" + currentEditingNote) != undefined){
		document.getElementById("noteItem" + currentEditingNote).classList.remove("current");
	}
	currentNoteIsNew = false;
	currentEditingNote = obj.id.replace("noteItem","");
	textNote.value = localStorage.getItem("note"+currentEditingNote);
	noteToolBar.style.display = "block";
	document.getElementById("noteItem" + currentEditingNote).classList.add("current");
}
function noteChanged()
{
	if(textNote.value!=""&&noteListWrap.style.left!="0px"){
		textNote.style.left="200px";
		textNote.style.width="420px";
		noteListWrap.style.left="0px";
		noteToolBar.style.display = "block";
	}
	if(textNote.value!=""&&currentNoteIsNew==true){
		currentNotes=Number(currentNotes)+1;
		currentEditingNote=Number(noteList.lastElementChild.id.replace("noteItem","")) + 1;
		var newNoteDiv=document.createElement("div");
		newNoteDiv.className="noteItem";
		newNoteDiv.classList.add("shouldNotFade");
		newNoteDiv.classList.add("current");
		newNoteDiv.id="noteItem"+currentEditingNote;
		newNoteDiv.onclick=function(){
			openNote(this);
		}
		var newNoteSpan1=document.createElement("span");
		newNoteSpan1.className="noteTitle";
		newNoteSpan1.classList.add("shouldNotFade");
		newNoteSpan1.id="noteTitle"+currentEditingNote;
		var newNoteSpan2=document.createElement("span");
		newNoteSpan2.className="noteTime";
		newNoteSpan2.classList.add("shouldNotFade");
		newNoteSpan2.id="noteTime"+currentEditingNote;
		newNoteDiv.appendChild(newNoteSpan1);
		newNoteDiv.appendChild(newNoteSpan2);
		noteList.appendChild(newNoteDiv);
		noteList.scrollTop=noteList.clientHeight;
		localStorage.setItem("currentNotes", currentNotes);
		localStorage.setItem("maximumNoteNumber", currentEditingNote);
		noteToolBar.style.display="block";
		currentNoteIsNew=false;
	}
	if(textNote.value==""&&currentNotes=="1"&&noteListWrap.style.left=="0px"){
		textNote.style.left="0px";
		textNote.style.width="620px";
		noteListWrap.style.left="-200px";
		noteToolBar.style.display = "none";
	}
	if(textNote.value==""){
		noteList.removeChild(document.getElementById("noteItem" + currentEditingNote));
		currentNotes = Number(currentNotes) - 1;
		currentNoteIsNew = true;
		localStorage.setItem("currentNotes", currentNotes);
		localStorage.setItem("maximumNoteNumber", Number(noteList.lastElementChild.id.replace("noteItem","")));
		noteToolBar.style.display = "none";
	}
	if(document.getElementById("noteTitle" + currentEditingNote) != undefined){
		document.getElementById("noteTitle" + currentEditingNote).innerText = textNote.value;
		document.getElementById("noteTime" + currentEditingNote).innerText = currentTime;
	}
	if(currentEditingNote==pinnedNoteNum){
		pinnedNoteContent.innerText=textNote.value;
		pinnedNoteTime.innerText=currentTime;
	}
	if(currentEditingNote==pinnedNoteNum&&textNote.value==""){
		unpinNote();
	}
}
function saveNote()
{
	noteChanged();
	if(textNote.value != ""){
		localStorage.setItem("note" + currentEditingNote, textNote.value);
		localStorage.setItem("noteTime" + currentEditingNote, currentTime);
	}else{
		localStorage.removeItem("note" + currentEditingNote);
		localStorage.removeItem("noteTime" + currentEditingNote);
	}
}
function delNote()
{
	if(confirm("删除这条便笺？")){
		textNote.value = "";
		saveNote();
	}
}
function pinNote()
{
	pinnedNoteContent.innerText=textNote.value;
	pinnedNoteTime.innerText=document.getElementById("noteTime" + currentEditingNote).innerText;
	pinnedNoteNum=currentEditingNote;
	localStorage.setItem("pinnedNoteNum", currentEditingNote);
	showPinnedNote();
}
function showPinnedNote()
{
	pinnedBox.style.display="block";
	setTimeout(function(){
		pinnedBox.style.opacity="1";
		pinnedBox.style.transform="scale(1.05)";
	},100);
	setTimeout(function(){
		pinnedBox.style.transform="scale(1)";
	},350);
}
function unpinNote()
{
	pinnedNoteNum="";
	localStorage.setItem("pinnedNoteNum", "");
	pinnedBox.style.transform="scale(1.05)";
	setTimeout(function(){
		pinnedBox.style.transform="scale(0.5)";
		pinnedBox.style.opacity="0";
	},250);
	setTimeout(function(){
		pinnedBox.style.display="none";
	},500);
}
function pinnedNoteClick()
{
	pinnedNoteNum=localStorage.getItem("pinnedNoteNum");
	openNote(document.getElementById("noteItem" + pinnedNoteNum));
	if(navbox.style.display!="block"){
		Title_Click();
	}
	nbSwitch2_Click();
}
function navboxScale0()
{
	//navboxCus.style.MozTransform="scale(0.9)";
	//navboxCus.style.WebkitTransform="scale(0.9)";
	navbox1.style.transform="scale(0.9)";
	navbox2.style.transform="scale(0.9)";
}
function navboxScale1()
{
	//navboxCus.style.MozTransform="scale(1)";
	//navboxCus.style.WebkitTransform="scale(1)";
	navbox1.style.transform="scale(1)";
	navbox2.style.transform="scale(1)";
}
/*function nbSwitch0_Click()
{
	if(navboxCus.style.left!="0px"){
		nbSwitch1_0.classList.remove("current");
		nbSwitch2_0.classList.remove("current");
		nbSwitch0_0.classList.add("current");
		navboxScale0()
		setTimeout(function(){
			navboxCus.style.left="0px";
			navbox1.style.left="100%";
			navbox2.style.left="100%";
		},250);
		setTimeout(function(){
			navboxScale1()
		},500);
	}
}*/
function nbSwitch1_Click()
{
	if(navbox1.style.left!="0px"){
		//nbSwitch0_0.classList.remove("current");
		nbSwitch2_0.classList.remove("current");
		nbSwitch1_0.classList.add("current");
		navboxScale0()
		setTimeout(function(){
			//navboxCus.style.left="-100%";
			navbox1.style.left="0px";
			navbox2.style.left="100%";
		},250);
		setTimeout(function(){
			navboxScale1()
		},500);
	}
}
function nbSwitch2_Click()
{
	if(navbox2.style.left!="0px"){
		//nbSwitch0_0.classList.remove("current");
		nbSwitch1_0.classList.remove("current");
		nbSwitch2_0.classList.add("current");
		navboxScale0()
		setTimeout(function(){
			//navboxCus.style.left="-100%";
			navbox1.style.left="-100%";
			navbox2.style.left="0px";
		},250);
		setTimeout(function(){
			navboxScale1()
		},500);
	}
}
function showAbout()
{
	pVersion.innerText=version;
	showPop(popAbout);
}
function showPop(thePopUp)
{
	cover1.style.display="block";
	thePopUp.style.display="block";
	setTimeout(function(){
		cover1.style.opacity="1";
		thePopUp.style.opacity="1";
		thePopUp.style.transform="rotate3d(1,1,0,-10deg)";
	},100);
	setTimeout(function(){
		thePopUp.style.transform="rotate3d(0,0,0,0deg)";
	},350);
}
function btnCloseHover(obj)
{
	thePopUp=obj.parentNode;
	thePopUp.style.transform="rotate3d(1,1,0,5deg)";
}
function btnCloseHover2()
{
	if(popUpClosing==false){
		thePopUp.style.transform="rotate3d(0,0,0,0deg)";
	}
}
function closePop(obj)
{
	popUpClosing=true;
	//obj.style.display="none";
	//thePopUp=obj.parentNode;
	cover1.style.opacity="0";
	obj.style.opacity="0";
	obj.style.transform="rotate3d(1,1,0,20deg)";
	setTimeout(function(){
		cover1.style.display="none";
		obj.style.display="none";
		obj.style.transform="rotate3d(1,1,0,90deg)";
		popUpClosing=false;
	},350);
}
function changeWp (obj)
{
	switch (obj.id) {   //(obj.value)
	case 'bgPreBoxD1':
		//document.body.style.backgroundImage = "url(images/BG_A_Default_1.jpg)";
		liveBgBox.style.display="none";
		bgbox.style.backgroundImage = "url(https://cdn.jsdelivr.net/gh/MobiusBeta/a.maorx.cn/images/BG_A_Default_1.jpg)";
		setTimeout(function(){
			document.body.style.backgroundImage = "url(https://cdn.jsdelivr.net/gh/MobiusBeta/a.maorx.cn/images/BG_A_Default_1.jpg)";
		},1250);
		bgbox.style.opacity = "1";
		bgPreBoxIn1.classList.add("selected");
		bgPreBoxIn2.classList.remove("selected");
		bgPreBoxIn3.classList.remove("selected");
		bgPreBoxInBing.classList.remove("selected");
		bgPreBoxInLive.classList.remove("selected");
		localStorage.setItem("bgPreference", "Default");
		bgPreference="Default";
		break;
	case 'bgPreBoxD2':
		liveBgBox.style.display="none";
		bgbox.style.backgroundImage = "url(https://cdn.jsdelivr.net/gh/MobiusBeta/a.maorx.cn/images/BG_A_Default_2.jpg)";
		setTimeout(function(){
			document.body.style.backgroundImage = "url(https://cdn.jsdelivr.net/gh/MobiusBeta/a.maorx.cn/images/BG_A_Default_2.jpg)";
		},1250);
		bgbox.style.opacity = "1";
		bgPreBoxIn2.classList.add("selected");
		bgPreBoxIn1.classList.remove("selected");
		bgPreBoxIn3.classList.remove("selected");
		bgPreBoxInBing.classList.remove("selected");
		bgPreBoxInLive.classList.remove("selected");
		localStorage.setItem("bgPreference", "Default2");
		bgPreference="Default2";
		break;
	case 'bgPreBoxD3':
		liveBgBox.style.display="none";
		bgbox.style.backgroundImage = "url(https://cdn.jsdelivr.net/gh/MobiusBeta/a.maorx.cn/images/BG_A_Default_3.jpg)";
		setTimeout(function(){
			document.body.style.backgroundImage = "url(https://cdn.jsdelivr.net/gh/MobiusBeta/a.maorx.cn/images/BG_A_Default_3.jpg)";
		},1250);
		bgbox.style.opacity = "1";
		bgPreBoxIn3.classList.add("selected");
		bgPreBoxIn1.classList.remove("selected");
		bgPreBoxIn2.classList.remove("selected");
		bgPreBoxInBing.classList.remove("selected");
		bgPreBoxInLive.classList.remove("selected");
		localStorage.setItem("bgPreference", "Default3");
		bgPreference="Default3";
		break;
	case 'bgPreBoxBing':
		liveBgBox.style.display="none";
		bgbox.style.backgroundImage = "url(https://api.rthe.cn/bing.jpg)";
		setTimeout(function(){
			document.body.style.backgroundImage = "url(https://api.rthe.cn/bing.jpg)";
		},1250);
		bgbox.style.opacity = "1";
		bgPreBoxIn1.classList.remove("selected");
		bgPreBoxIn2.classList.remove("selected");
		bgPreBoxIn3.classList.remove("selected");
		bgPreBoxInBing.classList.add("selected");
		bgPreBoxInLive.classList.remove("selected");
		localStorage.setItem("bgPreference", "Bing");
		bgPreference="Bing";
		loadBingWallpaperInfo();
		break;
	case 'bgPreBoxLive':
		liveBgBox.src="https://cdn.jsdelivr.net/gh/MobiusBeta/a.maorx.cn/videos/Live_Wallpaper_1.mp4";
		liveBgBox.style.display="block";
		bgbox.style.opacity = "0";
		bgPreBoxIn1.classList.remove("selected");
		bgPreBoxIn2.classList.remove("selected");
		bgPreBoxIn3.classList.remove("selected");
		bgPreBoxInBing.classList.remove("selected");
		bgPreBoxInLive.classList.add("selected");
		localStorage.setItem("bgPreference", "Live");
		bgPreference="Live";
		break;
	}
}
/*function ChangeBG()
{
	var btnBG = document.getElementById("nav_function");
	bgPreference = localStorage.getItem("bgPreference");
	if(bgPreference != "Default"){
		//document.body.style.backgroundImage = "url(images/BG_A_Default_1.jpg)";
		bgbox.style.backgroundImage = "url(images/BG_A_Default_1.jpg)";
		bgbox.style.opacity = "1";
		btnBG.innerHTML = "切换为每日背景";
		localStorage.setItem("bgPreference", "Default");
	}else{
		//bgbox.style.backgroundImage = "url(https://api.i-meto.com/bing?new)";
		bgbox.style.opacity = "1";
		btnBG.innerHTML = "切换为默认背景";
		localStorage.setItem("bgPreference", "Bing");
	}
};*/
function getPostData(data){
	var formData = new FormData();
	for(var key in data){
		data[key]&&formData.append(key,data[key]);
	}
	return{
		"body": formData,
		"method": "POST"
	};
}
function likeClick()
{
	btnLike.style.transform="scale(0.8)";
	setTimeout(function(){
		btnLike.style.transform="scale(1.2)";
	},100);
	setTimeout(function(){
		btnLike.style.transform="scale(0.9)";
	},200);
	setTimeout(function(){
		btnLike.style.transform="scale(1)";
	},300);
	fetch(backend+"like", getPostData({
		"action": "updateLikedCount"
	})).then(function(response){
		if(response.ok){
			return response.text();
		}
	}).then(function(data){
		if(data){
			if(data === "liked"){
				alert("已经点过喜欢啦");
			}else{
				numLiked.innerText = data;
			}
		}
	});
}
function Time(){
	//var vWeek,vWeek_s,vDay;
	//vWeek = ["星期天","星期一","星期二","星期三","星期四","星期五","星期六"];
	var date = new Date();
	year = date.getFullYear();
	month = date.getMonth() + 1;
	day = date.getDate();
	hours = date.getHours();
	minutes = date.getMinutes();
	//seconds = date.getSeconds();
	//vWeek_s = date.getDay();
	//titleText.innerText = year + "年" + month + "月" + day + "日" + "\t" + hours + ":" + minutes +":" + seconds + "\t" + vWeek[vWeek_s] ;
	if(minutes < 10){
		minutes = "0" + minutes;
	}
	titleText.innerText = hours + ":" + minutes;
	currentTime = year + "年" + month + "月" + day + "日 " + hours + ":" + minutes;
};
setInterval("Time()",1000);
function pinnedNoteHover(ev,obj)
{
	m_clientX = ev.clientX-obj.offsetLeft;
	m_clientY = ev.clientY-obj.offsetTop;
	pinnedNoteW=window.getComputedStyle(obj).width.replace("px","");
	pinnedNoteH=window.getComputedStyle(obj).height.replace("px","");
	if(m_clientX<pinnedNoteW*0.3 && m_clientY<pinnedNoteH*0.3){
		obj.style.transform="rotateX(10deg) rotateY(-5deg)";
	}
	if(m_clientX>pinnedNoteW*0.3 && m_clientX<pinnedNoteW*0.7 && m_clientY<pinnedNoteH*0.3){
		obj.style.transform="rotateX(10deg)";
	}
	if(m_clientX>pinnedNoteW*0.7 && m_clientY<pinnedNoteH*0.3){
		obj.style.transform="rotateX(10deg) rotateY(5deg)";
	}
	if(m_clientX<pinnedNoteW*0.3 && m_clientY>pinnedNoteH*0.3 && m_clientY<pinnedNoteH*0.7){
		obj.style.transform="rotateY(-5deg)";
	}
	if(m_clientX>pinnedNoteW*0.3 && m_clientX<pinnedNoteW*0.7 && m_clientY>pinnedNoteH*0.3 && m_clientY<pinnedNoteH*0.7){
		obj.style.transform="rotate3d(0,0,0,0deg)";
	}
	if(m_clientX>pinnedNoteW*0.7 && m_clientY>pinnedNoteH*0.3 && m_clientY<pinnedNoteH*0.7){
		obj.style.transform="rotateY(5deg)";
	}
	if(m_clientX<pinnedNoteW*0.3 && m_clientY>pinnedNoteH*0.7){
		obj.style.transform="rotateX(-10deg) rotateY(-5deg)";
	}
	if(m_clientX>pinnedNoteW*0.3 && m_clientX<pinnedNoteW*0.7 && m_clientY>pinnedNoteH*0.7){
		obj.style.transform="rotateX(-10deg)";
	}
	if(m_clientX>pinnedNoteW*0.7 && m_clientY>pinnedNoteH*0.7){
		obj.style.transform="rotateX(-10deg) rotateY(5deg)";
	}
	btnUnpin.style.opacity="1";
}
function pinnedNoteHover2(obj)
{
	obj.style.transform="rotate3d(0,0,0,0deg)";
	btnUnpin.style.opacity="0";
}
function cusNavClick(event,obj)
{
	if(currentEditingNav!=obj){
		currentEditingNav=obj;
		frmSetCustomNav.style.left=event.clientX-150+"px";
		frmSetCustomNav.style.top=event.clientY-180+"px";
		frmSetCustomNav.style.display="block";
		setTimeout(function(){
			frmSetCustomNav.style.opacity="1";
			frmSetCustomNav.style.transform="scale(1.05)";
		},50);
		setTimeout(function(){
			frmSetCustomNav.style.transform="scale(1)";
		},300);
	}else{
		closeFrmCusNav();
		currentEditingNav="";
	}
}
function closeFrmCusNav()
{
	frmSetCustomNav.style.transform="scale(1.05)";
	setTimeout(function(){
		frmSetCustomNav.style.opacity="0";
	},150);
	setTimeout(function(){
		frmSetCustomNav.style.transform="scale(0.5)";
	},200);
	setTimeout(function(){
		frmSetCustomNav.style.display="none";
	},400);
}
function iptCusNavKeyDown(event)
{
	if(event.keyCode==13){
		addCusNav();
	}
}
function addCusNav()
{
	if(isLoggedIn()){
		if(inputCustomUrl.value!=""){
			if(inputCustomUrl.value.substr(0,4)=="http"){
				cusNavIconUrl=inputCustomUrl.value+"/favicon.ico";
			}else{
				cusNavIconUrl="http://"+inputCustomUrl.value+"/favicon.ico";
			}
			currentEditingNav.innerHTML="\
			<img class='cusNavIcon shouldNotFade' src='"+cusNavIconUrl+"' onerror='addCusNav2(this)' onload='addCusNav3(this);submitCusNav();'/>\
			<div class='cusNavTitle shouldNotFade'>"+inputCustomTitle.value+"</div>";
			currentEditingNav.classList.add("added");
			closeFrmCusNav();
		}
	}
}
function addCusNav2(obj)
{
	cusNavIconErrCount=cusNavIconErrCount+1;
	if(cusNavIconErrCount==1){
		cusNavIconUrl=cusNavIconUrl.replace("http://","");
		cusNavIconUrl=cusNavIconUrl.replace("https://","");
		cusNavIconUrl=cusNavIconUrl.replace("/favicon.ico","");
		cusNavIconUrl="https://statics.dnspod.cn/proxy_favicon/_/favicon?domain="+cusNavIconUrl;
		obj.src=cusNavIconUrl;
	}else{
		addCusNav3(obj);
	}
}
function addCusNav3(obj)
{
	if(obj.naturalWidth<17){
		cusUrlInitial=cusNavIconUrl.replace("http://","");
		cusUrlInitial=cusUrlInitial.replace("https://","");
		cusUrlInitial=cusUrlInitial.replace("statics.dnspod.cn/proxy_favicon/_/favicon?domain=","");
		cusUrlInitial=cusUrlInitial.replace("www.","");
		cusUrlInitial=cusUrlInitial.substr(0,1);
		cusUrlInitial=cusUrlInitial.toUpperCase();
		cusNavIconUrl="https://iph.href.lu/128x128?bg=333&fg=70BF00&text="+cusUrlInitial;
		obj.src=cusNavIconUrl;
		obj.classList.add("round");
		cusNavIconErrCount=0;
	}
	//submitCusNav();
}
function submitCusNav()
{
	cusNavSubmitCount=cusNavSubmitCount+1;
	if(cusNavSubmitCount==1){
		cusNavUrl=inputCustomUrl.value;
		if(cusNavUrl.indexOf("http") == -1){
			cusNavUrl=encodeURIComponent("http://"+cusNavUrl);
		}else{
			cusNavUrl=encodeURIComponent(cusNavUrl);
		}
		cusNavUrl="\""+cusNavUrl+"\"";
		cusNavTitle=inputCustomTitle.value;
		cusNavIconUrl=encodeURIComponent(cusNavIconUrl);
		fetch(backend+"cusNav", getPostData({
			"action": "submitCusNav",
			"rthUsername": login.username,
			"cusNavUrl": cusNavUrl,
			"cusNavTitle": cusNavTitle,
			"cusNavIconUrl": cusNavIconUrl
		})).then(function(response){
			if(response.ok){
				return response.text();
			}
		}).then(getCusNav);
	}
	setTimeout(function(){
		cusNavSubmitCount=0;
	},2000);
}
window.onclick=function()
{
	if(menuUser.style.opacity==="1"){
		hideMenu(menuUser);
	}
	if(menuSettings.style.opacity==="1"){
		hideMenu(menuSettings);
	}
	if(menuCusNav.style.opacity==="1"){
		hideMenu(menuCusNav);
	}
}
function btnUserClick()
{
	if(isLoggedIn()){
		if(menuUser.style.opacity==="1"){
			hideMenu(menuUser);
		}else{
			showMenu(menuUser);
		}
	}
}
function btnSettingsClick()
{
	if(menuSettings.style.opacity==="1"){
		hideMenu(menuSettings);
	}else{
		showMenu(menuSettings);
	}
}
function showMenu(theMenu){
	theMenu.style.display="block";
	setTimeout(function(){
		theMenu.style.opacity="1";
		theMenu.style.transform="scale(1.05)";
	},50);
	setTimeout(function(){
		theMenu.style.transform="scale(1)";
	},300);
}
function hideMenu(theMenu){
	theMenu.style.transform="scale(0.5)";
	theMenu.style.opacity="0";
	setTimeout(function(){
		theMenu.style.display="none";
	},250);
}
function isLoggedIn(){
	if(login.username){
		return true;
	}else{
		frmLogin.src="https://account.rthsoftware.cn/login-mobius-start.html";
		showPop(popLogin);
		return false;
	}
}
function loggedIn(newLogin)
{
	if(newLogin){
		closePop(popLogin);
	}
	fetch(backend+"account", getPostData({
		"action": "verifyUsername",
		"rthUsername": login.username,
		"email": login.email
	})).then(function(response){
		if(response.ok){
			return response.text();
		}
	}).then(function(data){
		if(data){
			if(data === "0"){
				showPop(popCompleteReg);
			}else{
				var userInfo = eval(data);  
				showGreeting(userInfo[0].username,"");
				menuTextUsername.innerText=userInfo[0].username;
				titlePopAccount.innerText="欢迎你，"+userInfo[0].username;
			}
		}
	});
	getCusNav();
}
function getCusNav()
{
	fetch(backend+"cusNav", getPostData({
		"action": "getCusNav",
		"rthUsername": login.username
	})).then(function(response){
		if(response.ok){
			return response.text();
		}
	}).then(function(data){
		if(data){
			navboxCustom.innerHTML = data;
		}
	});
}
function loadBingWallpaperInfo()
{
	fetch("https://api.rthe.cn/bing.json").then(function(response){
		if(response.ok){
			return response.json();
		}
	}).then(function(data){
		if(data){
			lastModified0 = data.time;
			console.log("Background image last modified at " + lastModified0);
			wallpaperInfo.innerText = "喜欢这张壁纸：" + data.copyright;
		}
	});
	fetch(backend+"like", getPostData({
		"action": "getLikedCount",
		"lastModified0": lastModified0
	})).then(function(response){
		if(response.ok){
			return response.text();
		}
	}).then(function(data){
		if(data){
			numLiked.innerText = data;
		}
	});
}
function loadCusNavSlots()
{
	fetch(backend+"cusNav", getPostData({
		"action": "loadCusNavSlots"
	})).then(function(response){
		if(response.ok){
			return response.text();
		}
	}).then(function(data){
		if(data){
			navboxCustom.innerHTML = data;
		}
	});
}
function showCusNavMenu(e,obj){
	menuCusNav.style.left=e.clientX+3+"px";
	menuCusNav.style.top=e.clientY+3+"px";
	currentDeletingNav=obj.id;
	showMenu(menuCusNav);
}
function delCusNav()
{
	fetch(backend+"cusNav", getPostData({
		"action": "delCusNav",
		"rthUsername": login.username,
		"delIndex": currentDeletingNav
	})).then(function(response){
		if(response.ok){
			getCusNav();
		}
	});
}
function checkUsername()
{
	var IllegalString = "[`~!#$^&*()=|{}':;',\\[\\].<>/?~！#￥……&*（）——|{}【】‘；：”“'。，、？]‘'";
	var index = inputUsername.value.length - 1;
	var s = inputUsername.value.charAt(index);
	if(IllegalString.indexOf(s) >= 0){
		s = inputUsername.value.substring(0, index);
		inputUsername.value = s;
	}
	if(inputUsername.value.length>20){
		loginTipUsername.innerText="用户名长度不符合限制";
		loginTipUsername.style.color="red";
	}else{
		loginTipUsername.innerText="为自己起一个好听的用户名";
		loginTipUsername.style.color="rgba(0,0,0,0.5)";
	}
}
function completeReg()
{
	btnCompleteReg.style.pointerEvents="none";
	if(inputUsername.value.length>0 && inputUsername.value.length<21){
		username=inputUsername.value;
		fetch(backend+"account", getPostData({
			"action": "completeReg",
			"rthUsername": login.username,
			"username": username,
			"birthday": inputBirthday.value
		})).then(function(response){
			if(response.ok){
				closePop(popCompleteReg);
				showGreeting(username,"");
			}
		});
	}
}
function showGreeting(username,otherText)
{
	if(greetingBox.style.display!="block"){
		if(otherText===""){ //otherText!=undefined || otherText!=""
			time=new Date().getHours();
			if(time>21 || time<4){
				greeting.innerText="晚安，"+username;
			}
			if(time>=4 && time<9){
				greeting.innerText="早安，"+username;
			}
			if(time===9){
				greeting.innerText="早上好，"+username;
			}
			if(time>9 && time<12){
				greeting.innerText="上午好，"+username;
			}
			if(time===12){
				greeting.innerText="中午好，"+username;
			}
			if(time>12 && time<15){
				greeting.innerText="午安，"+username;
			}
			if(time>=15 && time<18){
				greeting.innerText="下午好，"+username;
			}
			if(time===18){
				greeting.innerText="傍晚好，"+username;
			}
			if(time>18 && time<=21){
				greeting.innerText="晚上好，"+username;
			}
		}else{
			greeting.innerHTML=otherText;
		}

		greetingBox.style.display="block";
		setTimeout(function(){
			greeting.style.opacity="1";
			greeting.style.top="0px";
		},50);
		setTimeout(function(){
			greeting.style.opacity="0";
			greeting.style.top="-100px";
		},3000);
		setTimeout(function(){
			greetingBox.style.display="none";
		},3500);
	}
}
function navboxScroll(e){
	if(e.deltaX<0||e.deltaY<0){
		nbSwitch1_Click();
	}else{
		nbSwitch2_Click();
	}
}
loadCusNavSlots();
window["ThinkPageWeatherWidgetObject"]="tpwidget";
window["tpwidget"]||(window["tpwidget"]=function(){(window["tpwidget"].q=window["tpwidget"].q||[]).push(arguments)});
window["tpwidget"].l=+new Date();
