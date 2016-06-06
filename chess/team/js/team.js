$(window).resize(function() {
	$('#left').width(($(window).width()-$('#center').width())/2);
	$('#right').width(($(window).width()-$('#center').width())/2);
});

$(document).ready(function() {
	$('#left').width(($(window).width()-$('#center').width())/2);
	$('#right').width(($(window).width()-$('#center').width())/2);
});

$('.navbar').mouseover(function() {
	$('.navlink', this).stop(true, true).animate({ backgroundColor: "#555555"}, 300);
});

$('.navbar').mouseout(function() {
	$('.navlink', this).stop(true, true).animate({ backgroundColor: "#333333"}, 300);
});

$('.link').mouseover(function() {
	$(this).stop(true, true).animate({ color: "#CD5555"}, 300);
});

$('.link').mouseout(function() {
	$(this).stop(true, true).animate({ color: "##890000"}, 300);
});