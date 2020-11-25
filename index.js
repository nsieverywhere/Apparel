
$(".submitbutton").hover(function () {
    $(".emailfield").toggleClass("hoveredbox");
    $(".submitbutton").toggleClass("hoveredbutton");
})

$(".guidetext, .warningsign").hide();

 $(".emailfield").click(function () {
     $(".guidetext, .warningsign").hide();
 })

function validateForm() {
    var x = document.forms["newsletter"]["email"].value;
    var patt = /@/;
    if (patt.test(x) == false){
        $(".guidetext, .warningsign").show();
        event.preventDefault();
    
    } else{
        $(".guidetext, .warningsign").hide();

    }

    
}

