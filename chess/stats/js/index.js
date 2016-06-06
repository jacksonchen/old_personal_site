/* Archive folder */
$(document).ready(function() {
	$("img").css("top", $(window).height()-150)
	$("img").css("left", $(window).width()-350)
});
$("img").mouseover(function() {
	$("img").stop(true, true).animate({top: '-=50px'}, 300);
});
$("img").mouseout(function() {
	$("img").stop(true, true).animate({top: '+=50px'}, 300);
});

$(window).resize(function() {
	$("img").css("top", $(window).height()-150)
	$("img").css("left", $(window).width()-350)
});