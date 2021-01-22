document.querySelector("#klik").addEventListener("click", tampil);

function tampil(params) {
  let url = "js/tblmenu.json";
  fetch(url)//mengambil url
    //.then(response => response.json())
    .then(function (res) {
      return res.json();
    })//mau dibentuk menjadi apa? json
    // .then(json => console.log(json))
    .then(function (data) {//setelah dibentuk akan diapakan? clg json
      let output = "<h1>DATA MENU</h1> <table><th></th>";
      data.forEach(element => {
        output += `<tr>
        <td>${element.menu} </td>
        <td>${element.harga} </td>
        <td>${element.warna[0]} </td>
        </tr>`;
      });
      output += "</table>";
      document.querySelector("#isi").innerHTML = output;
    })

}

// let tblmenu = [
//   {
//     "idmenu": 1,
//     "idkategori": 1,
//     "menu": "YZ 125",
//     "harga": 3000,
//     "warna": ["merah", "kuning", "hijau"],
//     "stok": true,
//     "keterangan": null
//   },
//   {
//     "idmenu": 2,
//     "idkategori": 1,
//     "menu": "KTM 125",
//     "harga": 4000,
//     "warna": ["merah", "kuning", "hijau"],
//     "stok": true,
//     "keterangan": null
//   }
// ]

// console.log(tblmenu[0].menu);