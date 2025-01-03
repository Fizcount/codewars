function findOdd(A) {
  return A.reduce((result, number) => result ^ number, 0);
}

// Inti dari tujuan XOR adalah untuk mendeteksi perbedaan antara dua nilai dan menyaring angka yang muncul berpasangan. XOR sering digunakan dalam:
// Mencari angka yang muncul ganjil kali: Dalam sebuah kumpulan angka, XOR dapat digunakan untuk menemukan angka yang hanya muncul satu kali, karena angka yang muncul berpasangan akan saling menghilangkan.
// Enkripsi dan keamanan: XOR juga digunakan dalam algoritma enkripsi untuk mengubah data menjadi tidak dapat terbaca (mengacak data) dan kemudian mengembalikannya ke bentuk aslinya.
// Singkatnya, XOR digunakan untuk perbandingan bitwise dan pencarian pola dalam data.


function findOdd(A) {
  var obj = {};
  A.forEach(function (el) {
    obj[el] ? obj[el]++ : (obj[el] = 1);
  });

  for (prop in obj) {
    if (obj[prop] % 2 !== 0) return Number(prop);
  }
}



