<?php
require_once "koneksi.php";

$data = stripcslashes(file_get_contents("php://input"));
$dataPelanggan = json_decode($data, true);

$pelanggan = $dataPelanggan['pelanggan'];
$alamat = $dataPelanggan['alamat'];
$telp = $dataPelanggan['telp'];

if (!empty($pelanggan) and !empty($telp)) {


    $sql = "INSERT INTO tblpelanggan (idpelanggan,pelanggan,alamat,telp) VALUES('','$pelanggan','$alamat','$telp')";

    if ($result = mysqli_query($con, $sql)) {
        echo "Data Sudah Disimpan";
    } else {
        echo "Data Gagal Disimpan";
    }
} else {
    echo "data kososng";
}

//stripcslashes digunakan untuk menghilangkan tanda back slashes
//file_get_contents digunakan untuk mengambil semua file yang masuk