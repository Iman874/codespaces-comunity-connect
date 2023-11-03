const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  host: 'mail.rosuliman.my.id', // Ganti dengan server POP3 penyedia email Anda
  port: 465, // Port POP3
  secure: true, // Gunakan koneksi aman (SSL/TLS)
  auth: {
    user: 'official@rosuliman.my.id', // Ganti dengan alamat email Anda
    pass: '' // Ganti dengan kata sandi email Anda
  }
});

// Buat pesan email
const mailOptions = {
  from: 'official@rosuliman.my.id', // Alamat email pengirim
  to: 'falisrangkuti@gmail.com', // Alamat email penerima
  subject: 'Email Ini dari Hacker', // Subjek email
  text: 'Akun email ini telah dihack!!!!!!!!!!!' // Isi email
};

// Kirim email
transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    console.log('Gagal mengirim email: ' + error);
  } else {
    console.log('Email berhasil dikirim: ' + info.response);
  }
});
