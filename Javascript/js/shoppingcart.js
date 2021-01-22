let tblmenu = [
  {
    idmenu: 1,
    idkategori: 1,
    menu: "YZ 125",
    gambar: "trail1.jpg",
    harga: 3000,
  },
  {
    idmenu: 2,
    idkategori: 1,
    menu: "KTM 125",
    gambar: "trail3.jpg",
    harga: 4000,
  },
  {
    idmenu: 3,
    idkategori: 1,
    menu: "KX 125",
    gambar: "trail2.jpg",
    harga: 5000,
  },
  {
    idmenu: 47,
    idkategori: 1,
    menu: "HSQ 125",
    gambar: "trail4.jpg",
    harga: 6000,
  },
];

// let tampil = tblmenu.map(function (kolom) {
//   return `<div class="produk-content">
//   <div class="images">
//     <img src="images/${kolom.gambar}" alt="" />
//   </div>
//   <div class="title">
//     <h2>${kolom.menu}</h2>
//   </div>
//   <div class="harga">
//     <h2>Rp. ${kolom.harga}</h2>
//   </div>
//   </div>`;
// });

let tampil = tblmenu.map(
  (kolom) => `<div class="produk-content">
<div class="images">
  <img src="images/${kolom.gambar}" alt="" />
</div>
<div class="title">
  <h2>${kolom.menu}</h2>
</div>
<div class="harga">
  <h2>Rp. ${kolom.harga}</h2>
</div>
<div class="btn-beli">
    <button data-idmenu=${kolom.idmenu}>Beli</button>
</div>
</div>`
);

let isi = document.querySelector(".produk");
isi.innerHTML = tampil;

let btnbeli = document.querySelectorAll(".btn-beli > button");

let cart = [];

for (let index = 0; index < btnbeli.length; index++) {
  btnbeli[index].onclick = function () {
    // console.log(btnbeli[index].dataset["idmenu"]);
    cart.push(btnbeli[index].dataset["idmenu"]);

    tblmenu.filter(function (a) {
      if (a.idmenu == btnbeli[index].dataset["idmenu"]) {
        cart.push(a);
        console.log(cart);
      }
    });
  };
}

console.log(cart);
