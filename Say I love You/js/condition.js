$(document).ready(function(){
    
    $("#btn1").click(function(){
        
        $("#im1").show('very slow',function(){

            $("#btn1").hide("very slow",function(){

                $("#btn2").show();
            });

        }); 
        
    });

    $("#btn2").click(function(){
        $("#im2").show("very Slow", function(){
            $("#btn2").hide("very slow", function(){
                $("#btn3").show();
            });

        });  
    });

    $("#btn3").click(function(){
        $("#im3").show('very slow',function(){
            $("#btn3").hide("very slow")
        });

    });

  });

