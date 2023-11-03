const mysql = require('mysql');

// Konfigurasi koneksi MySQL
const dbConfig = {
  host: "localhost", // host MySQL
  user: "root", // username MySQL
  password: "123456789" // password MySQL
};

function conn() {
  const connection = mysql.createConnection(dbConfig);

  // Membuat koneksi ke MySQL
  connection.connect((err) => {
    if (err) {
      console.error('Koneksi ke MySQL gagal: ' + err.stack);
      return;
    }
    console.log('Terhubung ke MySQL dengan ID ' + connection.threadId);

    // Menutup koneksi setelah selesai
    connection.end((err) => {
      if (err) {
        console.error('Error dalam menutup koneksi: ' + err.message);
        return;
      }
      console.log('Koneksi MySQL ditutup');
    });
  });
}

module.exports = conn;
