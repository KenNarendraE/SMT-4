function coba() {
  a = document.querySelector(".isi");
  a.innerHTML = "belajar event Listener";
  console.log("mabar bosss");
}

// cuy.addEventListener("click", coba);

// cuy.onclick = coba;
// cuy.onmouseover = coba;

cuy.onclick = function () {
  console.log("anonymous function");
};
