var swatchDiv = document.querySelectorAll(".swatches");


for (var i = 0; i < swatchDiv.length; i++) {
	swatchDiv[i].addEventListener("click", (event) => {
	var scalable = event.target.parentNode;
	var scalableLast = scalable.lastElementChild;
	var imgSibling = scalable.nextElementSibling; 
	var swatch = scalable.parentNode;
	var swatchParent = swatch.parentNode.parentNode;
	var gallery = swatchParent.previousElementSibling;
	var imgGallery = gallery.firstElementChild;
	
	if(swatch.classList.contains("swatch")){
		imgGallery.src = imgSibling.src;
		scalable.style.transform =  "scale(1,1)";
	}
});
}




