// main JavaScript Document

//main site document
//uses jquery


//jquery init on page load
$(document).ready(function(){
	
	$("#startBackground").click(function(){
		//$("#startBackground").fadeOut(200);
		$("#startMain").animate({top: '-100%'}, 500);
	});
	
	
});