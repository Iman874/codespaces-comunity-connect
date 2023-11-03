export function login_cek(email, password) {
  // Gantilah nilai email dan password sesuai kebutuhan aplikasi Anda
  var validEmail = "admin@admin.com";
  var validPassword = "123";

  // Menambahkan validasi karakter "@" dalam alamat email
  if (email.includes("@")) {
    if (email === validEmail && password === validPassword) {
      // Email dan password sesuai, tampilkan pesan "Login Berhasil" dan kembalikan nilai true
      alert("Login Berhasil");
      return true;
    } else {
      // Email atau password salah, tampilkan pesan "Login gagal!" dan kembalikan nilai false
      alert("Login gagal!");
      return false;
    }
  } else {
    // Tampilkan pesan kesalahan jika karakter "@" tidak ada dalam alamat email
    alert("Alamat email tidak valid");
    return false;
  }
}
