let coba = function () {
  return "coba fun";
};

let buah = [
  "apel",
  "mangga",
  "jeruk",
  10,
  coba(),
  (tes = () => "hasil retur arrow function"),
  function nama() {
    return "smk revit";
  },
];

console.log(buah);

console.log(buah[2]);

for (let i in buah) {
  console.log(buah[i]);
}

console.log(buah[5]());
console.log(buah[6]());
