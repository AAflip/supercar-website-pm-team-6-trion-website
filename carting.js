function getColors(){
    let buttonColors = [];
    buttonColors = document.getElementsByClassName('colors-options');
    for (var i = 0; i < buttonColors.length; i++){
        let x = buttonColors[i].getAttribute("data-col");
        buttonColors[i].style.background = x;
    }
}

window.onload = function(){
    if(window.location.pathname == "/configurator/config.html"){
        getColors();
    }
}