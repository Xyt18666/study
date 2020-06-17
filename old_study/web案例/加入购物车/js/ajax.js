//ajax的方法 既可以用POST请求 又可以用GET //兼容版本的浏览器
	function ajax(method,url,data,fn){
		var xhr=null;
		try{ //兼容ie低版本
			//在try里面发生错误，不会执行错误后的try里面的代码。consoerle.log(f)
			xhr = new XMLHttpRequest()
		}catch(er){
			xhr = new ActiveXObject("Microsoft.XMLHTTP")
		}

		//get要把参数拼接到路径的?后面
		if(method=="get"&&data){
			url =url+"?"+data+"&t="+new Date()
		}else if(method=="get"&&data==""){
			url =url+"?&t="+new Date()
		}

		xhr.open(method,url,true)

		xhr.onreadystatechange = function(){
			if(xhr.readyState==4&&xhr.status ==200){
				//成功获取到数据
				fn( xhr.responseText )
			}	
		}

		//post请求 需要设置请求头
		if(method=="post"){
			xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded")
			xhr.send(data)
		}else{
			xhr.send();
		}
		
	}

	function post(url,data,fn){		
			var xhr = new XMLHttpRequest()
			xhr.open("post",url,true)
			xhr.onreadystatechange = function(){
				if(xhr.readyState==4&&xhr.status ==200){
					
					fn( xhr.responseText )
				}	
			}
			xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded")
			xhr.send(data)
	}


	function get(url,data,fn){
			var xhr = new XMLHttpRequest();
			xhr.open("get",url+"?"+data,true)
			xhr.onreadystatechange = function(){
				if(xhr.readyState==4&&xhr.status==200){
					//请求成功后 返回的数据  字符串
					//xhr.responseText  //JSON字符串
					var d = xhr.responseText
					//console.log(d)
					fn(d)

				}
			}
			xhr.send();
		}	