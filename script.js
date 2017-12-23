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

$(function() {
	var $msg = $('#name_title');
	var $word_list = $('#name_title').text().split("");
  	$('#name_title').text("");
 	$.each($word_list, function(idx, elem) {
    		var new_elem = $("<span/>").text(elem).css({
      			opacity: 0
    		});
    		new_elem.appendTo($msg);
    		new_elem.delay(idx * 70);
    		new_elem.fadeTo('slow',1);
 	});

	
	var $msg2 = $('#subtitle');
	var $word_list2 = $('#subtitle').text().split(" ");
  	$('#subtitle').text("");
 	$.each($word_list2, function(idx, elem) {
    		var new_elem = $("<span/>").text(elem).css({
      			opacity: 0
    		});
		setTimeout(function() {
	    		new_elem.appendTo($msg2);
	    		new_elem.delay(idx * 600);
	    		new_elem.fadeTo('slow',1);
	 	}, 2000);
	});
});
