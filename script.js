// Butterfly entrance animation
window.addEventListener("load", () => {
  const butterfly = document.createElement("div");
  butterfly.innerText = "🦋";
  butterfly.style.position = "fixed";
  butterfly.style.left = "-50px";
  butterfly.style.top = "100px";
  butterfly.style.fontSize = "40px";
  butterfly.style.zIndex = "1000";
  butterfly.style.transition = "all 5s ease-in-out";
  document.body.appendChild(butterfly);

  setTimeout(() => {
    butterfly.style.left = "100vw";
    butterfly.style.top = "20px";
    butterfly.style.opacity = "0";
  }, 5000);

  setTimeout(() => {
    butterfly.remove();
  }, 7000);
});
