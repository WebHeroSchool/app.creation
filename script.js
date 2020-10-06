document.addEventListener("DOMContentLoaded", () => {
  document.querySelector("#checkbox").onclick = function(){
    document.querySelector(".label").classList.toggle("label--active");
  };
});