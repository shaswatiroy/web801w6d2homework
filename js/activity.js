$(document).ready(function() {
    $("td:not(:first-child)").click(function() {
        if ($(this).text() != "Not Available") {
            if ($(this).css('font-weight') == "bold" || $(this).css('font-weight') == "700") {
                $(this).removeAttr("style");
            } else {
                $(this).css("background-color", "green");
                $(this).css("color", "white");
                $(this).css("font-weight", "bold");
                $(this).css("cursor", "grab");
            }
        }
    });

    $("td:not(:first-child)").click(function() {
        var content = $(this).text();
        var columnIndex = $(this).index();
        var thText = "";
        if (content != "Not Available") {
            $(this).toggleClass("tdhighlight");

            if ($(this).hasClass("tdhighlight")) {
                $("#displaySelected").css("visibility", "visible");
                $("#displaySelected").css("margin-top", "2em");
                thText = $('tr th:eq(' + columnIndex + ')').text();
                $("#result").append("<p>"+content+" at "+thText+"</p>");
            } else {
                $("#result p:contains("+content+")").remove();
                if ($("#result").has("p").length == 0) {
                    $("#displaySelected").css("visibility","hidden");
                    $("#displaySelected").css("margin-top","0");
                }
            }
        }
    });
})