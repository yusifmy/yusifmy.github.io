// Inspired by custom cursor concepts from Codrops tutorial (you were given this link)
// https://tympanus.net/codrops/2019/01/31/custom-cursor-effects/

const dot = document.querySelector(".cursor-dot");
const ring = document.querySelector(".cursor-ring");

let mouseX = 0, mouseY = 0;
let ringX = 0, ringY = 0;

document.addEventListener("mousemove", (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY;

  // dot follows exactly
  dot.style.left = mouseX + "px";
  dot.style.top = mouseY + "px";
});

// ring follows smoothly
function animate() {
  ringX += (mouseX - ringX) * 0.12;
  ringY += (mouseY - ringY) * 0.12;
  ring.style.left = ringX + "px";
  ring.style.top = ringY + "px";
  requestAnimationFrame(animate);
}
animate();

// hover effect on links/buttons/cards
const hoverTargets = document.querySelectorAll("a, button, .btn, .project-card, .hero-card");

hoverTargets.forEach(el => {
  el.addEventListener("mouseenter", () => ring.classList.add("is-hover"));
  el.addEventListener("mouseleave", () => ring.classList.remove("is-hover"));
});
