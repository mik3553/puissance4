$(document).ready(function() {
    // Insert your JQuery code for the menu

    $("section").prepend("<h1 >puissance 4</h1>");
    $("h1").addClass("h1");
    
    $("h1").click(function(){

    	$(location).attr('href',"game.html");
    })


})
