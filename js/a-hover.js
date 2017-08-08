var imgDivProduct = document.querySelector("#product");

imgDivProduct.addEventListener("mouseover", (event) => {
	if(event.target.tagName == "IMG"){
		event.target.style.opacity = "0.5";
	}
});

imgDivProduct.addEventListener("mouseout", (event) => {
	if(event.target.tagName == "IMG"){
		event.target.style.opacity = "1";
	}
});

var imgDivAbout = document.querySelector("#about");

imgDivAbout.addEventListener("mouseover", () => {
	if (event.target.tagName == "IMG") {
		event.target.style.opacity = "0.5";
	}
});

imgDivAbout.addEventListener("mouseout", () => {
	if (event.target.tagName == "IMG") {
		event.target.style.opacity ="1";
	}
});

var imgDivFood = document.querySelector("#food");

imgDivFood.addEventListener("mouseover", () => {
	if(event.target.tagName == "IMG") {
		event.target.style.opacity = "0.5";
	}
});

imgDivFood.addEventListener("mouseout", () => {
	if(event.target.tagName == "IMG"){
		event.target.style.opacity ="1";
	}
});

var imgDivFooter2 = document.querySelector("#footer2");

imgDivFooter2.addEventListener("mouseover", () => {
	if (event.target.tagName == "IMG") {
		event.target.style.opacity = "0.5";
	}
});

imgDivFooter2.addEventListener("mouseout", () => {
	if (event.target.tagName == "IMG") {
		event.target.style.opacity = "1";
	}
});