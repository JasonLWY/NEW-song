$(document).ready(function() {

	function setRootFontSize(){
        screenWidth=$(window).width();
        screenHeight=$(window).height();
		fontsize=screenWidth/320*100;
		$('html').css('font-size',fontsize+"px");
	}

	$(function(){
		setRootFontSize();
		$(window).resize(function(){
			setRootFontSize();
		});
	});
	
});

function msg(msg){
    var html='<div class="vote_tip">';
    html+='<div class="tip_content">'+msg+'</div>';
    html+='</div>';
    layer.open({
        type:1,
        content:html,
        time:2,
        style: 'position:fixed;top:-10%;left:-1%'
    });
}

function msgFaild(msg){
	layer.open({
        content: msg
        ,skin: 'msg'
        ,time: 2 //2秒后自动关闭
	})
}


function msgOK(msg){
	layer.open({
		content:msg
		,skin:'msg'
		,time:2
	})
}

function closeLayer() {
    var index = arguments[0] ? arguments[0] : "";
    console.log(index);
    if (index == "") {
        layer.closeAll();
    } else {
        layer.close(index)
    }
}

function loading() {
    // closeLayer();
    var tips = arguments[0] ? arguments[0] : "";
    if (tips == "") {
        tips = "玩命加载中……";
    }
    index = layer.open({
        type: 2,
        shadeClose: false,
        content: tips
    });
    return index;
}

function hrefTo(url, time) {
    if (time == 0) {
        window.location.href = url;
    } else {
        setTimeout("hrefTo('" + url + "',0)", time);
    }
}