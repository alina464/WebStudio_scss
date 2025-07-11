document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("burger").addEventListener("click", function () {
    document.querySelector(".header").classList.add("open");
  });

  document.getElementById("close").addEventListener("click", function () {
    document.querySelector(".header").classList.remove("open");
  });
});