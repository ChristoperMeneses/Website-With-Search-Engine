$(document).ready(function(){
    $("#myinput").on("keyup", function(){
        var value= $(this).val().toLowerCase();

        $(".cotainer div").filter(function () {
$(this).toggle($(this).text().toLowerCase().indexOf(value) > -1);
        })
        
    })
}); 




$(document).ready(function(){
$('[data-toggle="popover"]').popover();   
});