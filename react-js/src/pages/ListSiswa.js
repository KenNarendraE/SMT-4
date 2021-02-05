function ListSiswa(props) {//{props.nama} memanggil properti nama
    //props adalah variael yang diambil oleh komponen sebelum komponen tersebut dipanggil
    const siswa = props.judul.map((item, i) =>//cara memanggil semua isi judul yang dikirim dari siswa.js, kemudian index di looping dan dikeluarkan 
        <li key={i}>{item}</li>
    )
    return (
        <div className="App" >
            {/* <h1>{props.judul[0]}</h1> */}

            <ul>{siswa}</ul>
        </div>
    );
}

export default ListSiswa;