import { useState } from 'react';
import Tabel from "./Tabel";

function Menu() {
    const titel = "daftar stok motor"
    const [menus, SetMenu] = useState(
        [{
            idmenu: 1,
            idkategori: 1,
            menu: "YZ 125",
            gambar: "trail1.jpg",
            harga: 3000,
        },
        {
            idmenu: 2,
            idkategori: 1,
            menu: "KTM 125",
            gambar: "trail3.jpg",
            harga: 4000,
        },
        {
            idmenu: 3,
            idkategori: 1,
            menu: "KX 125",
            gambar: "trail2.jpg",
            harga: 5000,
        },
        {
            idmenu: 47,
            idkategori: 1,
            menu: "HSQ 125",
            gambar: "trail4.jpg",
            harga: 6000,
        },]
    )
    return (
        <div className="App">
            <div>
                <Tabel menu={menus} titel={titel} />
            </div>
        </div>
    );
}

export default Menu;