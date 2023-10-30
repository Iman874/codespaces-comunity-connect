const mysql = require('mysql');

// Konfigurasi koneksi MySQL
const connection = mysql.createConnection({
  host: 'localhost', // Ganti dengan host MySQL Anda
    user: 'root', // Ganti dengan username MySQL Anda
      password: '' // Ganti dengan password MySQL Anda
      });

      // Membuat koneksi ke MySQL
      connection.connect((err) => {
        if (err) {

            console.error('Koneksi ke MySQL gagal: ' + err.stack);
                return;
                  }
                    console.log('Terhubung ke MySQL dengan ID ' + connection.threadId);
                    });

                    // Menutup koneksi setelah selesai
                    connection.end((err) => {
                      if (err) {
                          console.error('Error dalam menutup koneksi: ' + err.message);
                              return;
                                }
                                  console.log('Koneksi MySQL ditutup');
                                  });
