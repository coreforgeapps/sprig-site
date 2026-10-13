(function () {
  var toggle = document.querySelector(".nav-toggle");
  var panel = document.getElementById("nav-panel");
  if (!toggle || !panel) return;

  function setOpen(open) {
    toggle.setAttribute("aria-expanded", open ? "true" : "false");
    panel.classList.toggle("is-open", open);
    document.documentElement.classList.toggle("nav-open", open);
    toggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
  }

  toggle.addEventListener("click", function () {
    setOpen(toggle.getAttribute("aria-expanded") !== "true");
  });

  panel.querySelectorAll("a").forEach(function (a) {
    a.addEventListener("click", function () { setOpen(false); });
  });

  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") setOpen(false);
  });

  window.matchMedia("(min-width: 801px)").addEventListener("change", function (e) {
    if (e.matches) setOpen(false);
  });
})();
