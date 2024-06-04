var modal = document.getElementById("signup-modal");
var span = document.getElementsByClassName("close") [0];
document.getElementById("signup-button").onclick = function() {
    modal.style.display = "block";
}
span.onclick = function() {
    modal.style.display = "none";
}
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
