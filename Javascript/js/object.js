let objek = {
  nama: "revittt",
  telp: 12345678,
  buah: ["apel", "jeruk", "mangga"],
  coba: function () {
    return "coba function dalam objek";
  },
  boleh: true,
  tuliss: 765432,
};

console.log(objek.nama);
console.log(objek.telp);
console.log(objek.boleh);
console.log(objek.coba());
console.log(objek.buah[1]);
console.log(objek["tuliss"]);
