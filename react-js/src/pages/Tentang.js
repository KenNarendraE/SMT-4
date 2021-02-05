import { useState } from 'react';

const css = {
    color: "purple"
}

function Tentang() {
    const [count, setCount] = useState(0);
    function tambah() {
        setCount(count + 1)
    }
    function kurang() {
        if (count > 0) {
            setCount(count - 1)
        }

    }
    //state digunakan ketika variabel berubah ubah ketik variabel sudah jadi 
    return (
        <div className="App">
            <h1 style={css}>Belajar React Tentang counter : {count}</h1>
            <p>Belajar Hekel Tentang</p>
            <button type="button" onClick={tambah} className="btn btn-success">Tambah</button>
            <button type="button" onClick={kurang} className="btn btn-warning">Kurang</button>
        </div>
    );
}

export default Tentang;