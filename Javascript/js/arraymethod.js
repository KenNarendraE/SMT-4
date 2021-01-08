let nilai = [
  { nama: "kazuma", ipa: 90, bindo: 80, matematika: 60 },
  { nama: "ciiska", ipa: 60, bindo: 90, matematika: 80 },
  { nama: "subaru", ipa: 95, bindo: 70, matematika: 63 },
  { nama: "eren", ipa: 91, bindo: 89, matematika: 95 },
];

let nama = ["nasa", "tachibana", "ryu", "yamada"];
let mapel = ["bindo", "mtk", "bing"];
nama.push("rem", "hinata"); //menambah array nama di akhir
nama.unshift("liza", "raphtalia"); //menambah array nama di awal

//console.log(nama.shift()); //mengambil item array di akhir
//console.log(nama.pop()); // mengambil item array di awal
//console.log(nilai[2].nama);

console.log(nama.concat(["yuzaki", "yuuko"]));
console.log(nama.concat(mapel));

//console.log(nama.splice(1, 5));//mengambil item dari 1-5(cut)
//console.log(nama.slice(1, 5)); //mencopy item dari 1-5(copy)

//console.log(nama); //menampilkan semua item array

//------------------------------macam macam looping array----------------------------
//for (let index = 0; index < nama.length; index++) {
//console.log(nama[index]);
//}

nilai[nama].forEach(function (a) {
  console.log(a);
});

//nama.forEach((a) => console.log(a));

// for (let i in nama) {
//   console.log(nama[i]);
// }

//------------------------------macam macam filter-----------------------------------

//console.log(nilai);

// nilai.filter(function (a) {
//   if (a.ipa > 80) {
//     console.log(a.nama);
//   }
// }); // ciiska tidak tampil

nilai.filter((a) =>
  a.matematika > 70 && a.ipa > 60 ? console.log(a.nama) : null
); // hanya eren yang tampil
