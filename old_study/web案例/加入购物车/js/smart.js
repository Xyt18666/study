
	//1-��֤��
	function getCode(){
		var arrText=[];
		for (var i=48;i<=57 ;i++ ){
			arrText.push(String.fromCharCode(i))
		}
		for (var i=65;i<=90 ;i++ ){
			arrText.push(String.fromCharCode(i))
		}
		for (var i=97;i<=122 ;i++ ){
			arrText.push(String.fromCharCode(i))
		}
		var code=[];
		while(code.length<4){
			var x=Math.floor(Math.random()*(arrText.length-1-0+1)+0);
			if(code.indexOf(arrText[x])==-1){
				code.push(arrText[x]);
			}
		}
		return code.join("");
	}

	//arrIndexOf  ������ ĳ��Ԫ�ص��±�
	function arrIndexOf(arr,v){
		for (var i=0;i<arr.length ;i++ ){
			if(arr[i]==v){
				return i;
			}
		}
		return -1;
	}
	
	
	function getStyle(obj,attr){
		return obj.currentStyle?obj.currentStyle[attr]:getComputedStyle(obj)[attr];
	}

	function move(obj,attr,speed,end ,fn){
		clearInterval(obj.timer);
		speed=parseInt(getStyle(obj,attr))<end?speed:-speed;
		obj.timer=setInterval(function(){
			var len=parseInt(getStyle(obj,attr))+speed;
			if(len>=end&&speed>0 || len<=end&&speed<0){
				len=end;
			}
			obj.style[attr]=len+"px";
			if(len==end){
				clearInterval(obj.timer);
				fn&&fn();
			}
		},30)
	}
	//�𶯺��� 
	function shake(obj,attr,fn){
		var arr=[];
		var index=0;
		for (var i=20;i>0 ;i-=2 ){
			arr.push(i,-i);
		}
		arr.push(0);
		var dq=parseInt(getStyle(obj,attr));  //��ǰ��ʽ
		obj.timer=setInterval(function(){
			obj.style[attr]=dq+arr[index++]+"px";//index++
			if(index==arr.length){
				clearInterval(obj.timer);
				fn&&fn();
			}
		},50)
	}
	//���ع��� ����
	function hide(obj){
		clearTimeout(obj.timer);
		obj.timer=setTimeout(function(){
			obj.style.display="none";
		},300)
		if(obj.style.display=="none"){
			clearTimeout(obj.timer);
		}
	}

	//��ʾ���� ����
	function show(obj){
		clearTimeout(obj.timer);
		obj.timer=setTimeout(function(){
			obj.style.display="block";
		},300)
		if(obj.style.display=="block"){
			clearTimeout(obj.timer);
		}
	}

	//getClassName  ��ȡԪ��ָ����className Ԫ�صļ���
	function getClassName(parent,tagName,findName){
		var aEles=parent.getElementsByTagName(tagName);
		var arr=[];
		for (var i=0;i<aEles.length ;i++ ){
			if(aEles[i].className!=""){
				var arrName=aEles[i].className.split(" ");  //��ȡԪ��className�����鼯��
				for (var j=0;j<arrName.length ;j++ ){
					if(arrName[j]==findName){
						arr.push(aEles[i]);
						break;
					}
				}
			}
		}
		return arr;
	}

	//addClassName  ��Ԫ������һ��className�ķ���;
	function addClassName(obj,newName){
		console.log(obj);
		if(obj.className==""){
			obj.className=newName;
		}else{
			var arrName=obj.className.split(" ");
			var index=arrIndexOf(arrName,newName);
			if(index==-1){
				obj.className+=" "+newName;
			}
		}
	}

	//removeClassName ָ���Ƴ�ĳ��Ԫ�ص�className
	function removeClassName(obj,deletName){
		if(obj.className!=""){
			var arrName=obj.className.split(" ");
			var index=arrIndexOf(arrName,deletName);
			if(index!=-1){
				arrName.splice(index,1);  //ɾ�� һ��ָ����Ԫ�أ�ͨ��Ҫɾ��name���±� ��arrName������ɾ����
				obj.className=arrName.join(" "); //��ɾ���������ת��Ϊ�ַ��������¸�ֵ��Ԫ��
			}

		}
	}

	//�˶�move����  �˶����

	function  doMove(obj,json,fn){
		clearInterval(obj.timer);
		var iCur=0;
		obj.timer=setInterval(function(){
			var onOff=true;
			for (var attr in json ){
				if(attr=="opacity"){
					iCur=Math.round(getStyle(obj,attr)*100);
				}else{
					iCur=parseInt(getStyle(obj,attr));
				}
				var speed=(json[attr]-iCur)/10;
				speed=speed>0?Math.ceil(speed):Math.floor(speed);

					//console.log(iCur);

				if(iCur!=json[attr]){  //����һ���º������ڶ�����
					onOff=false;  
					if(attr=="opacity"){
						obj.style.opacity=(iCur+speed)/100;
						obj.style.filter="alpha(opacity="+(iCur+speed)+")";
					}else{
						obj.style[attr]=iCur+speed+"px";
					}
				}
			}
			if(onOff){  //�����Ƕ�������
				clearInterval(obj.timer);
				fn&&fn();  //���������£�
			}
		},30);
	}

	//���������˶�����
	function moveScroll(end){
		
	}

	//cookie�ķ�װ
	function setCookie(name,val,t){
		var oDate=new Date(); //��ȡ��ǰʱ��
		oDate.setDate(oDate.getDate()+t);
		document.cookie=name+"="+val+";expires="+oDate;
	}
	//�����cookieʧЧ�����ڣ�	
	function removeCookie(name){
		setCookie(name,'',-1);
	}
	function getCookie(name){
		var str=document.cookie;
		var arr=str.split("; ");//["user=www","age=17",........];
		for (var i=0;i<arr.length ;i++ )
		{
			var arr1=arr[i].split("=");   //["user","www"]  ["age","17"]
			if(arr1[0]==name){
				return arr1[1];
			}
		}
	}
	//ajax�ķ���
	function ajax(method, url, data, success) {
		var xhr = null;
		try {
			xhr = new XMLHttpRequest();
		} catch (e) {
			xhr = new ActiveXObject('Microsoft.XMLHTTP');
		}
		
		if (method == 'get' && data) {
			url += '?' + data;
		}
		
		xhr.open(method,url,true);
		if (method == 'get') {
			xhr.send();
		} else {
			xhr.setRequestHeader('content-type', 'application/x-www-form-urlencoded');
			xhr.send(data);
		}
		
		xhr.onreadystatechange = function() {
			
			if ( xhr.readyState == 4 ) {
				if ( xhr.status == 200 ) {
					success && success(xhr.responseText);
				} else {
					alert('������,Err��' + xhr.status);
				}
			}
			
		}
	}

	//�¼��󶨵ķ�װ
	function bind(obj,evName,fn){
		if(obj.addEventListener){
			obj.addEventListener(evName,fn,false);
		}else{
			obj.attachEvent("on"+evName,function(){
				fn.call(obj);
			});
		}
	}


	










