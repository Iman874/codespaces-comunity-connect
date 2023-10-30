const mysql = require('mysql');

// Konfigurasi koneksi MySQL
const connection = mysql.createConnection({
  host: "localhost", // Ganti dengan host MySQL Anda
  user: "root", // Ganti dengan username MySQL Anda
  password: "123456789" // Ganti dengan password MySQL Anda
});

// Membuat koneksi ke MySQL
connection.connect((err) => {
  if (err) {
    console.error('Koneksi ke MySQL gagal: ' + err.stack);
    return;
  }
  console.log('Terhubung ke MySQL dengan ID ' + connection.threadId);

  // Membuat database "testing"
  connection.query('CREATE DATABASE testing', (err, results) => {
    if (err) {
      console.error('Gagal membuat database "testing": ' + err.message);
    } else {
      console.log('Database "testing" berhasil dibuat');
    }

    // Menutup koneksi setelah selesai
    connection.end((err) => {
      if (err) {
        console.error('Error dalam menutup koneksi: ' + err.message);
        return;
      }
      console.log('Koneksi MySQL ditutup');
    });
  });
});
