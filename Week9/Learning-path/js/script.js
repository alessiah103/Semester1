$(document).ready(function() {
    // Call to function
    $("#orangeBoxId").animate({left: "+=200"},"slow",function() {squareMovement(this)});
});

// Declaration of function
function squareMovement(IdRef) {
    $(IdRef).animate({top: "+=100"}).delay(1000).animate({left: "+=100"}).delay(1000).animate({top: "-=100"}).delay(1000).animate({left: "-=100"}, function(){squareMovement(IdRef);});
}

$("#stopButtonId").on("click", function() {
    $("#orangeBoxId").stop(true);
});
$("#startButtonId").on("click", function() {
    squareMovement("#orangeBoxId")});


$("div").on("click", function() {
    $(this).hide();
});
$('#showButtonId').click(function() {
    $("div").show();
});

$(window).on("keydown", function(event) {
    var leftPosition = $("#blueBoxId").offset().left; //left coordinate
    var upPosition = $("#blueBoxId").offset().top; //left coordinate
    if(event.keyCode == 39) { // right
        leftPosition++;
    }
    if(event.keyCode == 37) { // left
        leftPosition--;
    }
    if(event.keyCode == 38) { // up
        upPosition--;
    }
    if(event.keyCode == 40) { // down 
        upPosition++;
    }
    $("#blueBoxId").offset({left : leftPosition, top: upPosition});
});

//$(#greenBoxId).mouseenter$()