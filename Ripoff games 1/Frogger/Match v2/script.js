$("#playbt").click(function () {
    page = 1;
    loop();
    $("#hoverlay").hide();
});
$("#modes").click(function () {
    page = 3;
    loop();
    $("#hoverlay").hide();
    $("#mode").show();
});
$("#endless").click(function () {
    page = 1;
    loop();
    $("#mode").hide();
});
$(".backbt").click(function () {
    $("#mode").hide();
    $("#controls").hide();
    loop();
    page = 0;
    $("#hoverlay").show();
});
$("#con").click(function () {
    page = 4;
    $("#controls").show();
    loop();
    $("#hoverlay").hide();
});

function keypressed() {
    if (keyCode == 37 || keyCode == 39) {
        $("#next").show(function () {
            $("#next").click(function () {
                $("#lvl1").hide();
                $("#lvl2").show();
                $("#next").hide();
            });

        });
    }
}
