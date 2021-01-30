<?php
require_once "koneksi.php";

$data = stripcslashes(file_get_contents("php://input"));
$dataPelanggan = json_decode($data, true);

$idpelanggan = $dataPelanggan['idpelanggan'];
$pelanggan = $dataPelanggan['pelanggan'];
$alamat = $dataPelanggan['alamat'];
$telp = $dataPelanggan['telp'];

if (!empty($pelanggan) and !empty($telp)) {


    $sql = "UPDATE tblpelanggan SET pelanggan = '$pelanggan',
    alamat = '$alamat',
    telp = '$telp'
    WHERE idpelanggan=$idpelanggan ";

    if ($result = mysqli_query($con, $sql)) {
        echo "Data Sudah Diubah";
    } else {
        echo "Data Gagal Diubah";
    }
} else {
    echo "data kososng";
}

//stripcslashes digunakan untuk menghilangkan tanda back slashes
//file_get_contents digunakan untuk mengambil semua file yang masuk