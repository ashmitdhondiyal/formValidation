function isEmail(email) {
    var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    return regex.test(email);
}
$("#button").click(function () {
    var missingval = "";
    var errormessage = "";
    $("#error").html("");
    $("#success").html("");
    var emailVal = $("#Email").val();
    var phoneVal = $("#Phone").val();
    var passwordVal = $("#Password").val();
    var confirmpassVal = $("#Confirmpass").val();
    if (emailVal == "") {
        missingval += "<p>Email is missing</p>";
    }
    if (phoneVal == "") {
        missingval += "<p>Phone number is missing</p>";
    }
    if (passwordVal == "") {
        missingval += "<p>Password is missing</p>";
    }
    if (confirmpassVal == "") {
        missingval += "<p>Confirm Password is missing</p>";
    }
    if (emailVal != "" && !isEmail(emailVal)) {
        errormessage += "<p>Email is invalid</p>";
    }
    if (phoneVal != "" && !$.isNumeric(phoneVal)) {
        errormessage += "<p>Phone number is invalid</p>";
    }
    if (phoneVal != "" && phoneVal.length != 10) {
        errormessage += "<p>Phone number must be 10 digits</p>";
    }
    if (passwordVal != "" && confirmpassVal != "" && passwordVal != confirmpassVal) {
        errormessage += "<p>Password doesn't match</p>";
    }
    if (missingval == "" && errormessage == "") {
        $("#success").html("You are registered successfully!");
    } else {
        $("#error").html(missingval + errormessage);
    }
})