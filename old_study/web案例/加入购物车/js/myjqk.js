function setCookie(n,v,t){
	var d= new Date()
	d.setDate(d.getDate()+t)
	document.cookie= n + "=" + v + ";expires=" + d
}

function getCookie(name){
	var cook=document.cookie
	var coli= cook.split("; ")
	for(var a=0; a<coli.length; a++){
		var arr= coli[a].split("=")
		if(arr[0]==name){
			return arr[1]
		}
	}
}

function removeCookie(n){
	setCookie(n,"",-1)
}



function move(obj,json,fn){
	clearInterval(obj.dsq)
	var speed=0,thisSty=0;
	obj.dsq=setInterval(function(){
		var onOff=true;
		for(var key in json){
			thisSty=key=="opacity"?parseFloat(getStyle(obj,key))*100:parseInt(getStyle(obj,key))
			speed=(json[key]-thisSty)/12
			speed=speed>0?Math.ceil(speed):Math.floor(speed)
			if(thisSty!=json[key]){
				onOff=false;
				thisSty+=speed
				if(key=="opacity"){
					obj.style["opacity"]=thisSty/100
					obj.style.filter="alpha(opacity="+thisSty+")"
				}else{
					obj.style[key]=thisSty+"px"
				}
			}
		}
		if(onOff){
			clearInterval(obj.dsq)
			fn&&fn()
		}
	},20)
}

function getStyle(obj,attr){
	return obj.currentStyle?obj.currentStyle[attr]:getComputedStyle(obj,null)[attr]
}


function ajax(method,url,data,fn){
	var xhr=null;
	try{
		xhr= new XMLHttpRequest()
	}catch(e){ 
		xhr= new ActiveXObject("Microsoft.XMLHTTP");
	}

	if(method=="get" && data){
		url+= "?"+data;
	}
	xhr.open(method,url,true)

	xhr.onreadystatechange=function(){
		if(xhr.readyState==4 && xhr.status==200){
			var json=JSON.parse(xhr.responseText)
			console.log(json)
			fn(json)
		}
	}
	if(method=="get"){
		xhr.send()
	}else{
		xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded")
		xhr.send(data)
	}

} 

function getMin(){
	var index=0;
	var min= $(li[index]).innerHeight()
	for (var i = 1; i < li.length; i++) {
		if($(li[i]).innerHeight()<min){
			min=$(li[i]).innerHeight()
			index=i
		}
	}
	return index
}