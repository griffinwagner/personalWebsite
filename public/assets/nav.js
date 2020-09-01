
$('.share-alt').on('click', function(e){
	$(".branch").removeClass("no-animation");
	$('.branch').toggleClass("open");
});

$('.social').on('click', function(e){
	$(".container2").removeClass("no-animation");
	$(".container2").toggleClass("open");
});

$('.share').on('click', function(e){
	$(".float-circle").removeClass("no-animation");
	$(".float-circle").toggleClass("open");
});

var pageContent = document.getElementById("content"),
	pagecopy = pageContent.cloneNode(true),
	blurryContent = document.getElementById("blurryscroll");
	blurryContent.appendChild(pagecopy);
	window.onscroll = function() { blurryContent.scrollTop = window.pageYOffset; }
