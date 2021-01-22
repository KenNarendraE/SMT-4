console.log(localStorage.getItem("coba"));

sessionStorage.setItem("tea", 66); //session storage digunakan untuk menyimpan semua hal didalam browser, namun jika sudah di restart maka akan hilang

console.log(sessionStorage.getItem("tea"));

//sessionStorage.removeItem("tea");//sessionStorage.removeItem("key")digunakan untuk menghapus session storage yang dipilih

sessionStorage.setItem("ktm", 125);

//sessionStorage.clear();

console.log(sessionStorage.length);

console.log(sessionStorage.key(0)); //memanggil key dengan menggunakan urutan
