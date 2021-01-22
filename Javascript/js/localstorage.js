localStorage.setItem("coba", 99); //local storage digunakan untuk menyimpan semua hal didalam browser, meskipun sudah di restart akan terus ada, sampai dihapus dari javascirpt
localStorage.setItem("thai", "lolol");

console.log(localStorage.getItem("coba"));
console.log(localStorage.getItem("thai"));

//localStorage.removeItem("coba");//localStorage.removeItem("key"); digunakan untuk menghapus localstorage yang dipilih
//localStorage.clear();//localStorage.clear() digunakan untuk menghapus semua localstorage

console.log(localStorage.key(0)); //memanggil key dengan menggunakan urutan

console.log(localStorage.length); //console.log(localStorage.length) digunakan untuk melihat berapa jumlah local storage
