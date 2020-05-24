//
(() =>{//shorthand function declaration (also called a fat arrow function) 

console.log('fired!');

// select elements here


let theBadges = document.querySelectorAll(".badge"),

	svgBadge = document.querySelector("svg");
	mainHeading = document.querySelector("#mainHeading");


setTimeout(function(){
mainHeading.textContent = "JavaScript really isn't hard when you understand a few things";
mainHeading.classList.add("selected");
}, 3000);

//debugger;//pause your code execution here

// functions go in the middle

function logID(){
	console.log("clicked on a graphic - this one:", this.id);
	this.classList.add("selected")
}


theBadge.forEach(badge => badge. addEventListener("click", logID));
svgBadge.addEventListener("click", logID);

window.addEventListener("load", function(){
	console.log("everything is loaded");
})

})();
