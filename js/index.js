var options=document.getElementsByClassName("options");
var detail=document.getElementsByClassName("detail");
var detail_li=document.getElementsByClassName("detail_li");
var menu=document.getElementsByClassName("menu")[0];
for(var i=0;i<options.length;i++){
	options[i].index=i;
	var index;
	options[i].onmouseover=function(){
		index=this.index;
		for(var j=0;j<options.length;j++){
			options[j].className="options";
		}
		for(var j=0;j<detail.length;j++){
			detail[j].className="detail";
		}
		addClass(this,"options_selected");
		addClass(detail[index],"show_detail");
	}
	menu.onmouseleave=function(){
		hiddenDetail1=setTimeout("remove("+index+")",1000);
	}
}

for(var i=0;i<detail_li.length;i++){
	detail_li[i].index=i;
	detail_li[i].onmouseover=function(event){
		var index=this.index;
		addClass(detail_li[index],"detail_li_selected");
		stopBubble(event);
	}
	detail_li[i].onmouseout=function(event){
		var index=this.index;
		detail_li[index].className="detail_li";		
		stopBubble(event);
	}
}
for(var i=0;i<detail.length;i++){
	detail[i].index=i;
	detail[i].onmouseover=function(){
		clearTimeout(hiddenDetail1);
		detail_li[index].className="detail_li";	
	}
	detail[i].onmouseleave=function(){
		var index=this.index;
		hiddenDetail2=setTimeout("remove("+index+")",1000);
	}
}
function remove(index){
	detail[index].className="detail";
}
//添加类
function addClass(element,value){
	if(!element.className){
		element.className=value;
	}else{
		element.className=element.className.concat(" "+value);
	}
}