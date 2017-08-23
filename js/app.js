$(document).on('deviceready',function(){
    /*var deviceType = (navigator.userAgent.match(/iPad/i))  == "iPad" ? "iPad" : (navigator.userAgent.match(/iPhone/i))  == "iPhone" ? "iPhone" : (navigator.userAgent.match(/Android/i)) == "Android" ? "Android" : (navigator.userAgent.match(/BlackBerry/i)) == "BlackBerry" ? "BlackBerry" : "null";
    if(deviceType=="Android"){
        $(".btnBack").hide();
    }*/
	
	FastClick.attach(document.body);

     $("#cuerpo").load('login.html');
    
    $(".btnEnviar").click(function(){
        curp = $("#curp").val();
        longitud = curp.length;
        if(curp==""){
            navigator.notification.alert('Debe llenar el campo CURP',alertDismissed,'Error', 'Ok');
        }else{
            if(longitud!=18){
                navigator.notification.alert('El campo CURP debe contener 18 caracteres',alertDismissed,'Error', 'Ok');
            }else{
                $.mobile.changePage("#menu", {transition: "none", changeHash: false });
            }
        } 
    });

    $(".btnBack").click(function(){
        $.mobile.changePage("#menu", {transition: "none", changeHash: false });
    });

    document.addEventListener("backbutton", function(e){
        var activePage = $.mobile.activePage.attr("id");
        //alert(activePage);
        if(activePage==('index')){
            //e.preventDefault(); 
            navigator.notification.confirm(
                "Realmente desea salir de la app?",
                function (button) {
                  if (button==2) {
                    navigator.app.exitApp();
                  }
                },"Pregunta", ["Cancelar","Ok"]
            );
        }
        if(activePage==('menu')){
            $.mobile.changePage("#index", {transition: "none", changeHash: false });
        }
        if(activePage==('calendario')){
            $.mobile.changePage("#menu", {transition: "none", changeHash: false });
        }
    }, false);
});

function alertDismissed() {
    // do something
}