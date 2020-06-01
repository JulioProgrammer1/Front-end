var dark = document.querySelector("#dark");
var ligth = document.querySelector("#ligth");
var bori = document.querySelector("body");

dark.addEventListener("click", function ( event ) {
    event.preventDefault();
    bori.classList.add("dark-mode");
});
ligth.addEventListener("click", function ( event ) {
    event.preventDefault();
    bori.classList.add("ligth-mode");
});