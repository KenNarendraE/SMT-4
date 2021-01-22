let nilai = [
  { nama: "kazuma", ipa: 90, bindo: 80, matematika: 60 },
  { nama: "ciiska", ipa: 60, bindo: 90, matematika: 80 },
  { nama: "subaru", ipa: 95, bindo: 70, matematika: 63 },
  { nama: "eren", ipa: 91, bindo: 89, matematika: 95 },
];

let nama = ["nasa", "tachibana", "ryu", "yamada"];
let mapel = ["bindo", "mtk", "bing"];
nama.push("rem", "ainata"); //menambah array nama di akhir
nama.unshift("liza", "raphtalia"); //menambah array nama di awal

//console.log(nama.shift()); //mengambil item array di akhir
//console.log(nama.pop()); // mengambil item array di awal
// console.log(nilai[2].nama);

console.log(nama.concat(["yuzaki", "yuuko"]));
console.log(nama.concat(mapel));

//console.log(nama.splice(1, 5));//mengambil item dari 1-5(cut)
//console.log(nama.slice(1, 5)); //mencopy item dari 1-5(copy)

//console.log(nama); //menampilkan semua item array

//------------------------------macam macam looping array----------------------------
//for (let index = 0; index < nama.length; index++) {
//console.log(nama[index]);
//}

nilai.forEach((a) => console.log(a.nama)); //a sebagai objek, bila a.nama berarti memanggil nama dari objek nilai lalu di looping

// nama.forEach((a) => console.log(a));

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

// nilai.filter((a) =>
//   a.matematika > 70 && a.ipa > 60 ? console.log(a.nama) : null
// ); // hanya eren yang tampil

//-------------------------------------------------------------------------------------------------

// let siswa = nilai.map(function (a) {
//   //map digunakan untuk mengambil salah satu komponen array dan menjadikannya array baru
//   return a.nama;
// });
// console.log(siswa);
// siswa.forEach(function (a) {
//   console.log(a);
// });

// nilai.map((a) => {
//   // hanya melooping nilai ipa
//   console.log(a.ipa);
//});

// let siswa1 = nilai.map((a) => [a.nama, a.ipa, a.bindo]);
// console.log(siswa1);
// siswa1.forEach(function (a) {
//   console.log(a);
// });

//-----------------------------------------------------------------------------------------------------

// nama.sort();// sort digunakan untuk mengurutkan dari kecil ke besar/abjad a ke z
// console.log(nama);

//-------------------------------------------------------------------------------------------------------

// let hasil = nilai.reduce(function (a, b) {//reduce digunakan untuk menambahan semua nilai pada salah satu kolom
//   return (a = a + b.ipa);
// }, 0);
// console.log(hasil);

let hasil = nilai.reduce((a, b) => (a += b.bindo), 0);
console.log(hasil);
