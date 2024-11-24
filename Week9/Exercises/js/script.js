$('#exampleButtonId').click(function() {
    var attributeContent = $('#imageId').attr("src");
    $(this).text(attributeContent);
});
$("#fontSizeChangeButtonId").click(function() {
    $("h2").css({
        "font-size" : "40px"
    })
});
$("#textButtonId").click(function() {
    $(this).text("Hello")
});

toggle = false;
$("#imageId").click(function() {
    
    if (toggle == false) {
      $(this).attr("src", "images/glad.jpg")
      toggle = true;
    } else {
        $(this).attr("src", "images/sad.jpg")  
        toggle = false;
    }
});

var num = 0;
$("#increaseButtonId").click(function () {
    num++;
    $("#valueFieldId").text(num)
});

$("#decreaseButtonId").click(function () {
    num--;
    $("#valueFieldId").text(num)
});

$("li").click(function() {
    var value = $(this).attr("value");
    $("#spanFieldId").text(value)
});

$("#xcoordId").click(function() {

});

$("#xcoordId").click(function() {

});


