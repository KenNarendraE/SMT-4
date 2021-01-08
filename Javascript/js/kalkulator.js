let btn = document.querySelectorAll(".btn-angka > button"); //mengisi setiap button sesuai dengan urutan angka
let mat = document.querySelectorAll(".btn-mat > button"); // mengisi setiap button operasi matematika sesuai dengan
let tampil = document.querySelector("#tampil"); // memasukkan id tampil kedalam variabel
let pilihan = null; // mendeklarasikkan variabel pilihan dengan isi null
let x;
let y;

// console.log(mat);

// tampil.value = btn[0].innerHTML;

//console.log(btn[8].innerHTML);

for (let index = 0; index < btn.length; index++) {
  // me looping variabel btn agar terisi sesuai urutan angka
  btn[index].onclick = function () {
    // jika variabel ditekan maka akan menjalankan ..
    // console.log(btn[index].innerHTML);

    if (tampil.value == "0") {
      // jika tampil.value berisi 0, maka akan mengganti angka 0 tersebut
      tampil.value = btn[index].innerHTML;
    } else {
      // sebaliknya, jika tampil.value memiliki isi, akan ditambah btn yang ditekan
      tampil.value = tampil.value + btn[index].innerHTML;
    }
  };
}

mat[0].onclick = function () {
  // tombol clear akan membuat tampil.value menjadi 0, dan membersihkan pilihan
  tampil.value = "0";
  pilihan = null;
};

mat[1].onclick = function () {
  // tombol + akan membuat var pilihan menjadi "tambah" dan mengisi x = tampil.value, kemudian mengosongi var tampil.value
  pilihan = "tambah";
  x = tampil.value;
  tampil.value = "0";
};

mat[2].onclick = function () {
  pilihan = "kurang";
  x = tampil.value;
  tampil.value = "0";
};

mat[3].onclick = function () {
  pilihan = "kali";
  x = tampil.value;
  tampil.value = "0";
};

mat[4].onclick = function () {
  pilihan = "bagi";
  x = tampil.value;
  tampil.value = "0";
};

mat[5].onclick = function () {
  y = tampil.value; // ketika tombol = ditekan, maka tampil.value yang ada pada layar akan menjadi var y
  tampil.value = kalkulator(pilihan); // mengisi tampil.value dari kalkulator(pilihan) sesuai dengan tombol operasi matematika diatas, dan me return nilainya
};

function kalkulator(pilihan) {
  if (pilihan != null) {
    // jika pilihan tidak kkosong, maka akan menjalankan perintah dibawah
    switch (pilihan) {
      case "tambah":
        hasil = parseFloat(x) + parseFloat(y);
        break;
      case "kurang":
        hasil = parseFloat(x) - parseFloat(y);
        break;
      case "kali":
        hasil = parseFloat(x) * parseFloat(y);
        break;
      case "bagi":
        hasil = parseFloat(x) / parseFloat(y);
        break;
    }
    return hasil;
  }
}
