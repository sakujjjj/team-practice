document.getElementById("myButton").addEventListener("click", function(){
let imageContainer = document.createElement("div");
console.log(imageContainer)
imageContainer.innerHTML = "123";
document.getElementById("testClick").appendChild(imageContainer);
})
