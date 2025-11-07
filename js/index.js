(function () {
  const btns = document.querySelectorAll(".menuBtn");
  const aside = document.getElementById("sidebar");
  const main = document.getElementById("main");
  const ads1 = document.getElementById("ads-1");
  const body = document.body;
  if (btns.length === 0 || !aside || !main) return;

  btns.forEach((btn) => {
    btn.addEventListener("click", function () {
      aside.classList.toggle("flex!");
      main.classList.toggle("lg:ml-60");
      const expanded = btn.getAttribute("aria-expanded") === "true";
      btn.setAttribute("aria-expanded", String(!expanded));
      ads1.classList.toggle("hidden!");
    });
  });
  if (
    aside.classList.contains("flex!") &&
    main.classList.contains("lg:ml-60")
  ) {
    body.addEventListener("click", function (event) {
      aside.classList.remove("flex!");
      main.classList.remove("lg:ml-60");
    });
  }
})();
