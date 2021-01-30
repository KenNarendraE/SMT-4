<?php
require_once "koneksi.php";

$data = stripcslashes(file_get_contents("php://input"));
$idpelanggan = json_decode($data, true);

$idpelanggan = $idpelanggan['idpelanggan'];


if (!empty($idpelanggan)) {


    $sql = "DELETE FROM tblpelanggan WHERE idpelanggan=$idpelanggan";

    if ($result = mysqli_query($con, $sql)) {
        echo "Data Sudah Dihapus";
    } else {
        echo "Data Gagal Dihapus";
    }
} else {
    echo "data belum dipilih";
}

//stripcslashes digunakan untuk menghilangkan tanda back slashes
//file_get_contents digunakan untuk mengambil semua file yang masuk