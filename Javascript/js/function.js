function coba() {
  let belajar = "saya belajar js";
  console.log(belajar);
  console.log("js itu mudah");
}

coba();

function persegi(lebar, panjang) {
  luas = panjang * lebar;
  console.log(luas);
}
persegi();

function out() {
  return console.log("output function");
}
out();

function lingkaran(r) {
  luas = 3.14 * r * r;
  return luas;
}

const tinggi = 5;
let tabung = lingkaran(10) * 6;

function lewat(a) {
  return a;
}

console.log(lewat(6));
console.log(tabung);
