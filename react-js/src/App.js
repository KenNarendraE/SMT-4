import logo from './logo.svg';
import './App.css';
import Kontak from './pages/Kontak';
import Nav from './pages/Nav';
import Sejarah from './pages/Sejarah';
import Tentang from './pages/Tentang';
import Home from './pages/Home';
import Siswa from './pages/Siswa';
import Menu from './pages/Menu';
// import Tabel from './pages/Tabel';
import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Nav />
        <Switch>
          <Route path='/' component={Home} exact />
          <Route path='/Kontak' component={Kontak} />
          <Route path='/Sejarah' component={Sejarah} />
          <Route path='/Tentang' component={Tentang} />
          <Route path='/Siswa' component={Siswa} />
          <Route path='/Menu' component={Menu} />
          {/* <Route path='/Tabel' component={Tabel} /> */}
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
