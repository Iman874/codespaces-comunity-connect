export function login_cek(email, password) {
  //testing dengan variabel lokal
  var validEmail = "admin@admin.com";
  var validPassword = "123";

  if(cek_email(email)){
    if (email === validEmail && password === validPassword) {
      // Email dan password sesuai, tampilkan pesan "Login Berhasil" dan kembalikan nilai true
      alert("Login Berhasil");
      return true;
    } else {
      // Email atau password salah, tampilkan pesan "Login gagal!" dan kembalikan nilai false
      alert("Login gagal!");
      return false;
    }
  }

  return false;
}

export function registrasi_cek(username, email, password){
  //langkah kerja backend
  //sambungan ke database
  //import data tabel user untuk cek username

  //Testing menggunakan variabel lokal
  var usernameUser = user123;
  var emailUser = user1@username.com
  var passwordUser = 123;

  //cek sebuah data di dalam array
  

  if(cek_email(email)){

  }

}

// function cek email
function cek_email(email){
  if (email.includes("@")){
    return true;
  } else{
     // Tampilkan pesan kesalahan jika karakter "@" tidak ada dalam alamat email
     alert("Alamat email tidak valid");
     return false;
  }
}