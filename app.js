let mouseCursor = document.querySelector(".cursor");
let navLinks = document.querySelectorAll(".nav-link li");

window.addEventListener("mousemove", cursor);

navLinks.forEarch(link => {
  link.addEventListener("mouseover", () => {
    mouseCursor.classList.add("link-grow");
    link.classList.add("hovered-link");
  });
  link.addEventListener("mouseleave", () => {
    mouseCursos.classList.remove("link-grow");
    link.classList.remove("hovered-link");
  });
});

function cursor(e) {
  //console.log(e.pageX, e.pageY);
  mouseCursor.style.top = e.pageY + "px";
  mouseCursor.style.top = e.pageX + "px";
}
