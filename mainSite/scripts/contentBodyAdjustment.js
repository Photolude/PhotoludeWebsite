function adjustFooter()
{
	var footerShell = $("#footer");
	var footerObject = $("#footerContent");
	var deltaHeight = ($(window).height() - footerShell.position().top) - footerObject.height() - 20;

	if(deltaHeight <= 10)
	{
		deltaHeight = 10;
	}

	$("#footerContent").css("margin-top", deltaHeight + "px");
}

function adjustContentBody()
{
	var contentShell = $("#contentBody");
	var contentObject = $("#contentObject");
	var deltaHeight = (($(window).height() - contentShell.position().top) * 0.45) - (contentObject.height() / 2);

	if(deltaHeight <= 10)
	{
		deltaHeight = 10;
	}

	contentObject.css("margin-top", deltaHeight + "px");
	
	adjustFooter();
	$(document.body).animate({opacity:'1'}, 500);
}

var adjustScreen = adjustContentBody;