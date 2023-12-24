import React from "react";
import Sidebar from "../Component/Sidebar";
import kelas from "../Assets/kelas.png";

function Class() {
  return (
    <div className="App">
      <Sidebar />
      <div className="Modul-container2">
        <div className="Modul-header3">
          <p>Kelas</p>
        </div>
        <div className="">
          <button className="Add-class">
            <p>Tambah Kelas</p>
          </button>
        </div>
        <div className="Class-module">
          <p>Halaman Kelas Kosong</p>
          <span>
            Ayo tambahkan kelasmu terlebih dahulu di menu "Tambah Kelas"
          </span>
          <img src={kelas} alt="kelas"></img>
        </div>
      </div>
    </div>
  );
}

export default Class;