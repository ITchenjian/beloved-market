// alert("good");
;(function(){
    var all=$("all");
    var _all=$("_all");
    var checks=getClassName("check",main);
    var main=$("main");
    var count=0;
    // console.log(checks);
    main.onclick=function(event){
        var e=event||window.event;
        var target=e.target||e.srcElement;
        if(target.id=="all")
        {
            for(var i=0;i<checks.length;i++)
            {
                checks[i].checked=target.checked;
            }
            _all.checked=target.checked;
            count=all.checked?checks.length:0;
            
        }
        if(target.id=="_all")
        {
            for(var i=0;i<checks.length;i++)
            {
                checks[i].checked=target.checked;
            }
            all.checked=target.checked;
            count=_all.checked?checks.length:0;
        }
        if(target.className=="fl check")
        {
            target.checked?count++:count--;
            // alert(count);
            if(count==checks.length)
            {
                all.checked=true;
                _all.checked=true;
            }else{
                all.checked=false;
                _all.checked=false;
            }

        }
    }


    /*
    all.onclick=function(){
        for(var i=0;i<checks.length;i++)
        {
            checks[i].checked=this.checked;
        }
        _all.checked=this.checked;
    }
    _all.onclick=function(){
        for(var i=0;i<checks.length;i++)
        {
            checks[i].checked=this.checked;
        }
        all.checked=this.checked;
    } 
    for(var i=0;i<checks.length;i++)
    {
        checks[i].onclick=function(){
            for(var i=0;i<checks.length;i++){
                if(checks[i].checked==false)
                {
                     all.checked=false;
                     _all.checked=false;
                     break;
                }else{
                    all.checked=true;
                     _all.checked=true;
                }
            }
        }   
    }*/

}())
;(function(){





}())