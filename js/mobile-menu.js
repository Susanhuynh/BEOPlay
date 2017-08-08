
var burgerDiv = document.getElementById("burger");
var menuNav = document.getElementById("nav-middle");

burgerDiv.addEventListener("click" , () =>{
	if(menuNav.classList.contains("nav-middle")){
		menuNav.className ="nav-middle-open";
	} else {
		menuNav.className = "nav-middle";
	}
});