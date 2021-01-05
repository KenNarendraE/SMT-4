let fungsi = function (nama) {
  console.log(nama + " sedang belajar js");
};
fungsi("bambang");

let contoh = (nama) => {
  console.log(nama + " kesusahan belajar js");
};
contoh("jonny");

let tambah = function (a, b) {
  return a + b;
};
console.log(tambah(2, 3));

let plus = (a, b) => a + b;
console.log(plus(2, 6));

let hasil = (a) => a * 3;
console.log(hasil(4));

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
