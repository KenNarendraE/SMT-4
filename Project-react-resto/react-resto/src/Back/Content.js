import React from 'react';
import { useParams } from 'react-router-dom';
import Pelanggan from './Pelanggan';
import Kategori from './Kategori';
import Menu from './Menu';
import Order from './Order';

const Content = () => {
    const { isi } = useParams();

    let tampil;

    if (isi === 'kategori') {
        tampil = <Kategori />;
    }
    if (isi === 'menu') {
        tampil = <Menu />;
    }
    if (isi === 'pelanggan') {
        tampil = <Pelanggan />;
    }
    if (isi === 'order') {
        tampil = <Order />;
    }
    return (
        <>
            {tampil}
        </>
    );
}

export default Content;
