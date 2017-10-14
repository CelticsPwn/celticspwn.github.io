$("#nav_home").click(function() {
	$("HTML, BODY").animate({
    		scrollTop: 0
	}, 1000);
});

$("#nav_about").click(function() {
	var position = $("#about").offset().top;
	$("HTML, BODY").animate({
    		scrollTop: position
	}, 1000);
});

$("#nav_projects").click(function() {
	var position = $("#projects").offset().top;
	$("HTML, BODY").animate({
    		scrollTop: position
	}, 1000);
});

$("#nav_interests").click(function() {
	var position = $("#interests").offset().top;
	$("HTML, BODY").animate({
    		scrollTop: position
	}, 1000);
});

$("#nav_contact").click(function() {
	var position = $("#contact").offset().top;
	$("HTML, BODY").animate({
   		 scrollTop: position
	}, 1000);
});

$(".logo").hover(
	function() {$(this).fadeTo("fast", 0.5);},
	function() {$(this).fadeTo("fast", 1);});


