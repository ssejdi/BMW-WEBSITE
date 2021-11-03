var show = document.getElementById("klasa");
    function showMenu() {
    show.style.right = "0px"
}
    function closeMenu() {
    show.style.right = "-200px";
}
window.addEventListener('scroll', function() {
    var header=document.querySelector("header");
    let windowPosition =  window.scrollY > 0;
    header.classList.toggle("sticky", windowPosition);
})
window.addEventListener('scroll',function(){
    var scroll = document.querySelector('.scroll-btn');
    scroll.classList.toggle("active", window.scrollY > 0);
})