const hari = 2;
let hasil;

switch (hari) {
  case 1:
    hasil = "minggu";
    break;
  case 2:
    hasil = "senin";
    break;
  case 3:
    hasil = "selasa";
    break;
  case 4:
    hasil = "rabu";
    break;
  case 5:
    hasil = "kamis";
    break;
  case 6:
    hasil = "jumat";
    break;
  case 7:
    hasil = "sabtu";
    break;

  default:
    hasil = "hari tidak ada";
    break;
}
console.log(hasil);

const bulan = "desemer";

let bulan2;

switch (bulan) {
  case "januari":
    bulan2 = 1;
    break;
  case "februari":
    bulan2 = 2;
    break;
  case "maret":
    bulan2 = 3;
    break;
  case "april":
    bulan2 = 4;
    break;

  default:
    bulan2 = "belum ada";
    break;
}

console.log(bulan2);
