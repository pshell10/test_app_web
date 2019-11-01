(function(){

    iniciar();

    function iniciar(){
        for(var i = 0; i < 12; i++){
            var carta = document.querySelector("#carta" + i);
                if (i % 6 === 0){
                  carta.style.left =  20 + "px";  
                }else{
                  carta.style.left = (i % 6) * 220 + 25 + "px";
                }  
                if (i < 6){
                    carta.style.top = 5 + "px";  
                  }else {
                    carta.style.top = 260 + "px";
                  }  
        }


    }

}());