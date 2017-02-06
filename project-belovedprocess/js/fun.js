//1.设置(添加)cookie(键,键值,时间);
//调用格式:setCookie('name','good',4);
    function setCookie(Name,Value,eDay){
            var date=new Date();
            date.setTime(date.getTime()+eDay*24*3600*1000);
            document.cookie=Name+'='+Value+';expires='+date;
        }

//此种方法可不用转化非整天时间,但输入时间格式稍显繁琐;
//调用格式:_setCookie('name','Jack','2016/12/18 12:00:00');
    function _setCookie(Name,Value,eTime){
        var date=new Date(eTime);
        document.cookie=Name+'='+Value+';expires='+date;
    }
//2.通过cookie名移除cookie(键)
    function removeCookie(Name){
            var date = new Date();
            date.setTime(date.getTime()-24*60*60*1000);
            document.cookie = Name+"=1;expires="+date;
        }
//3.通过cookie名获取cookie(键)值
    function getCookie(Name){
        var arr=document.cookie.split(';');
        for(var i=0;i<arr.length;i++)
        {
            if(arr[i].trim().indexOf(Name+'=')==0)
            {
               return arr[i].trim().slice((Name+'=').length);
            }
        }
        return '';
    }

//4.Ajax的封装;
//调用方法
    /*ajax({
            method:"POST",
            url:"",
            async:true,
            data:{name:"张三",age:18},
            beforeSend:function(){},
            requestComplete:function(){},
            responseSuccess:function(data){
                console.log("张三数据接收成功");
            },
            error:function(){}
        })*/
//封装函数
    function ajax(obj){
            obj.method=obj.method.toUpperCase()||"POST";
            obj.url=obj.url||"";
            obj.async=obj.async||true;
            obj.data=obj.data||{};
            obj.beforeSend=obj.beforeSend||function(){};
            obj.requestComplete=obj.requestComplete||function(){};
            obj.responseSuccess=obj.responseSuccess||function(){};
            obj.error=obj.error||function(){};
            if(window.XMLHttpRequest)
            {
                var xhr=new XMLHttpRequest();
            }else{
                var xhr=new ActiveXObject("Microsoft,XMLHTTP");
            }
            var arr=[];
            var data="";
            for(var i in obj.data)
            {
                arr.push(i+"="+obj.data[i]);
            }
            data=arr.join("&");
            obj.beforeSend();
            if(obj.method.toUpperCase()=="POST"){
                xhr.open("POST",obj.url,obj.async);
                xhr.setRequestHeader("content-type","application/x-www-form-urlencoded");
                xhr.send(data);
            }else{
                xhr.open("GET",obj.url+"key?="+Math.random()+"&"+date,obj.async);
                xhr.send();
            }
            xhr.onreadystatechange=function(){
                if(xhr.readyState==4)
                {
                    obj.requestComplete();
                    if(xhr.status==200)
                    {
                         // xhr.responseText;
                        obj.responseSuccess();
                    }
                }else if(xhr.status==404)
                {
                    obj.error();
                }
            }
        }