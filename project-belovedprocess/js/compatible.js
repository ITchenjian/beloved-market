/*封装id*/
function $(id){
    return document.getElementById(id);
}

/*1、解决获取样式表中属性(指能获取不能设置)兼容问题;
主流浏览器:getCompetedStyle(dom,null);
IE8及以下版本:dom.currentStyle;
参数dom为获取到的单个元素;
调用:getStyle(Dom).属性;*/
function getStyle(dom){
    return dom.currentStyle ? dom.currentStyle : getComputedStyle(dom,null);
}

/*2、解决childNodes只获取元素节点的问
childNodes在IE8及以下版本中会获取所有子元素节点和行内元素之间的空格(将其当做文本节点);
主流浏览器会获取所有子元素节点和换行产生的文本节点(由enter键产生的);
利用nodeType==1,即元素节点;
参数arr为通过childNodes获取到的未经过筛选的所有子节点;
调用:getChildNodes(uls[0].childNodes);*/
function getChildNodes(arr){
    var arrN=[];
    for (var i = 0; i < arr.length; i++) {
        if (arr[i].nodeType==1) {
            arrN.push(arr[i]);
        }
    }
    return arrN;
}


/*3、参数dom为获取到的单个元素;
.nextElementSibling //主流浏览器
.nextSibling //IE8及以下版本
其余同理;*/

//获得下一个兄弟元素
function getNextSibling(dom){
return dom.nextElementSibling ? dom.nextElementSibling : dom.nextSibling;
}

//获得上一个兄弟元素
function getPreviousSibling(dom){
    return dom.previousElementSibling ? dom.previousElementSibling : dom.previousSibling;
}

//获得第一个兄弟元素
function getFirstChild(dom){
    return dom.firstElementChild ? dom.firstElementChild : dom.firstChild;
}

//获得最后一个兄弟元素
function getLastChild(dom){
    return dom.lastElementChild ? dom.lastElementChild : dom.lastChild;
}

/*4、解决document.getElementsByClassName在IE8及以下浏览器下不兼容的问题
参数分别为目标元素的类名，id名*/
function getClassName(classname,id)
{
    var ele=document.getElementById(id)||document;
    if(ele.getElementsByClassName){return ele.getElementsByClassName(classname);}
    else
    {
        var all=ele.getElementsByTagName('*');
        var arrN=[];
        for(var i=0;i<all.length;i++)
        {
            var arr=all[i].className.split(' ');
            for(var j=0;j<arr.length;j++)
            {
                if(arr[j]==classname)
                {
                    arrN.push(all[i]);
                }
            }
        }
        return arrN;
    }
}

/*5、解决Dom2级事件绑定的兼容性问题
dom.addEventListener('click',fun,false/true);适用于主流浏览器(false为冒泡事件流,true为捕获事件流).
dom.attachEvent('onclick',fun);适用于IE浏览器*/
function addEvent(dom,eventType,handle)
{
    dom.addEventListener ? dom.addEventListener(eventType,handle,false) : dom.attachEvent('on'+eventType,handle);
}

/*解决Dom2级事件解绑的兼容性问题
dom.removeEventListener('click',函数名);适用于主流浏览器.
dom.detachEvent('onclick',函数名);适用于IE浏览器*/
function removeEvent(dom,eventType,handle)
{
    dom.removeEventListener ? dom.removeEventListener(eventType,handle) : dom.detachEvent('on'+eventType,handle);
}

//6、事件冒泡
//确定event值
function ent(event){
    e=event||window.event;

    target=e.target||e.srcElement; //事件委托(将子元素的事件绑定给父元素，进而利用冒泡的原理执行)的关键;利用if(target.nodeName.toUpperCase()=='对应元素的nodeName'){执行事件};判断所点击的是哪个子元素;

    //stopPropagation(e); //调用;
    //preventDefault(e); //调用;
}

//取消冒泡
function stopPropagation(e){
    e.stopPropagation ? e.stopPropagation() : e.cancelBubble=true; 
}

//组织冒泡
function preventDefault(e){
    e.preventDadault ? e.preventDefault() : e.returnValue=false;
}
 
