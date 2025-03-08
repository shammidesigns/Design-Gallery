document.getElementById("toggleButton").addEventListener("click", function() {
    let floatingBar = document.getElementById("floatingBar");
    floatingBar.style.display = (floatingBar.style.display === "block") ? "none" : "block";
});

document.addEventListener("contextmenu", function(event) {
    event.preventDefault();
});
