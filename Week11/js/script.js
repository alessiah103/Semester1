$.get("xml/sep1members.xml", function (xml, status) {
    var firstName = $(xml).find("firstname");
    var displayName = $(firstName[0]).text();
    $("#textField1").html(displayName);
    var students = $(xml).find("student");
    var eyeColor = $(students[0]).attr("eyeColor")
    $("#textField2").html(eyeColor);
    var displayName = $(firstName[1]).text();
    $("#textField3").html(displayName);
    var eyeColor = $(students[1]).attr("eyeColor")
    $("#textField4").html(eyeColor);
    var displayName = $(firstName[2]).text();
    $("#textField5").html(displayName);
});









