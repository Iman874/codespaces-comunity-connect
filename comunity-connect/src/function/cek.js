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
  var array_tabel_user = ["user123", "user1@username.com"];

  //membuat variabel cek array untuk username, email
  var array_input = [username, email];
  
  if(cek_email(email)){
    //cek sebuah data di dalam array
    if(!cek_array(array_input, array_tabel_user)){
      alert("Kamu berhasil Registrasi");
    } else{
      alert("Username atau Email sudah terdaftar");
    }
  }
}

// Fungsi untuk memeriksa apakah username atau email dalam array_input ada dalam array_tabel
function cek_array(array_input, array_tabel) {
  // Mengonversi semua elemen dalam array_tabel ke huruf kecil
  const arrayTabelLowerCase = array_tabel.map.toLowerCase;

  for (var item of array_input) {
    // Mengonversi item dalam array_input ke huruf kecil
    const lowercaseItem = item.toLowerCase();

    // Memeriksa apakah item dalam huruf kecil ada dalam array_tabel yang juga dalam huruf kecil
    if (!arrayTabelLowerCase.includes(lowercaseItem)) {
      return false; // Mengembalikan false jika item tidak ditemukan dalam array_tabel
    }
  }

  return true; // Mengembalikan true jika semua item ditemukan dalam array_tabel
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