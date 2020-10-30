$(document).ready(function () {

    $("#menucon").click(function () {
        $(".sidenav").show();
    });
    $("#submit").click(addUser);
    $("#login").click(checkUser);
});

function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
}


function addUser() {
    let userName = $("#name").val();
    let pwd = $("#pwd").val();
    let email = $("#email").val();
    localStorage[userName] = pwd;
}

function checkUser() {
    let usern = $("#userName").val();
    let pswd = $("#password").val();

    if (localStorage[usern] == undefined) {
        alert("wrong");
    } else if (localStorage[usern] == pswd) {
        //alert("right");
        $("#login").attr("href", "profile.html");
        //$("#name").val("Welcome,"+usern);
        $("#lo").hide();
        $("pro").show();

    }

}
