let fungsi = function (nama) {
  console.log(nama + " sedang belajar js");
};
fungsi("bambang"); // nama diisi dengan "bambang"

let contoh = (nama) => {
  console.log(nama + " kesusahan belajar js");
};
contoh("jonny");

let tambah = function (a, b) {
  return a + b;
};
console.log(tambah(2, 3));

let plus = (a, b) => a + b;
console.log(plus(2, 6)); // "a" digantikan dengan 2, "b" digantikan dengan 6, lalu dijumlahkan

let hasil = (a) => a * 3;
console.log(hasil(4)); //"a" digantikan dengan angka 4, lalu dikali 3

let banyak = () => {
  console.log("halo");
  console.log("nama");
  console.log("saya");
  console.log("wayaw");
};

banyak();

let nilai = 6;

let uji = nilai < 7 ? () => (predikat = "gagal") : () => (predikat = "lulus");
console.log(uji());
