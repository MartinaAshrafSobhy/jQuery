
$(".open").click(function(){
    $(".navmenu").css("visibility","visible");
})
$("#close").click(function(){
    $(".navmenu").css("visibility","hidden");
})

$("#duration h2").click(function(){
    $(this).next().slideToggle();
    $(".singer").not($(this).next()).slideUp();
})

$("textarea").keyup(function(){
    let txtLength = $(this).val().length;
    $(".chars").text(
        100 - txtLength <= 0 ? "zero" : 100 - txtLength
    )
})





function days(){
    day = parseInt($(".days").html());
    if (day != 0){
        $(".days").html(day - 1 + " d");
        $(".hours").html(24);
    }
}

function hours(){
    hr = parseInt($(".hours").html());
    if (hr != 0){
        $(".hours").html(hr - 1 + " h");
        $(".mins").html(59);
    }
    else{
        days();
    }
}

function minutes(){
    min = parseInt($(".mins").html());
    if (min != 0){
        $(".mins").html(min - 1 + " m");
        $(".secs").html(59);
    }
    else{
        hours();
    }
}

$(document).ready(function(){
    let update = function(){
        $(".secs").each(function(){
            let count = parseInt($(this).html());
            if(count != 0){
                $(this).html(count - 1 + " s");
            }else{
                minutes();
            }
        });
    }
    setInterval(update,1000);
})