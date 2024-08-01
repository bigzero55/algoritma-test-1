function reverseAlphabet() {
  // Mengambil input dari form
  var input = document.getElementById("input1").value;

  // Inisialisasi variabel pemisahan huruf dan angka
  var alphabets = "";
  var number = "";

  // Memisahkan huruf dan angka secara manual
  for (var i = 0; i < input.length; i++) {
    // Mengambil karakter saat ini
    var char = input[i];

    // Memeriksa apakah karakter saat ini adalah angka
    if (isNaN(char)) {
      // jika bukan angka, tambahkan ke variabel huruf
      alphabets += char;
    } else {
      // jika angka, tambahkan ke variabel angka
      number += char;
    }
  }

  // Membalikkan urutan huruf
  var reversedAlphabets = "";
  for (var j = alphabets.length - 1; j >= 0; j--) {
    // Menambahkan karakter saat ini ke variabel huruf terbalik
    reversedAlphabets += alphabets[j];
  }

  // Menampilkan hasil dalam elemen output
  document.getElementById("output1").innerText = reversedAlphabets + number;
}
