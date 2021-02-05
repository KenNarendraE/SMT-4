import ListSiswa from './ListSiswa';

function Siswa() {
    const nama = ['joni', 'budi', 'siti'] //atau bisa di deklarasikan disini lalu dipanggil didalam listsiswa
    //memanggil salah satu array dengan cara memberi index didepan {nama}
    return (//properti mana di seklarasikan didalam listsiswa dan akan dikirim ke list siswa
        <div className="App">
            <ListSiswa judul={nama} />
        </div>
    );
}

export default Siswa;