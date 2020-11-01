var num=$("#notice").find("li").length;
if (num>1) {
    setInterval(function(){
        $('#notice').animate({
            marginTop:"-26px"
        },500,function(){
            $(this).css({marginTop : "0"}).find("li:first").appendTo(this);
        });
    }, 3000);
}

