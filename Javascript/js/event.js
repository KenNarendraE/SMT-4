function tampil(b) {
  a = document.querySelector("p").innerText = "belajar event js" + b; // mencari p first child
  //   a.innerText = "belajar event js";
  console.log("belajar event");
}

cuy.onclick = function () {
  console.log("anjay mabar");
  document.querySelector(".isi").innerHTML = "belajar event js memakai id";
};
