

        $('#login-start').click(function(){

            $(".login-form-holder").css("display","block"); //open
            $(".signup-form-holder").css("display","none");  //close

            $('#signup-start').css("background-color","#0A102E");
            $('#login-start').css("background-color","#111c4f");

        });
        $('#signup-start').click(function(){

            $(".signup-form-holder").css("display","block");  //open
            $(".login-form-holder").css("display","none");  //close
           
            
            $('#signup-start').css("background-color","#111c4f");
            $('#login-start').css("background-color","#0A102E");

        });
$('#openModel').click(function(){
    $('.login-model').css("display","block");
})
$('#closeModel').click(function(){
    $('.login-model').css("display","none");
})


















