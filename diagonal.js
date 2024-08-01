function calculateDiagonalDifference() {
  // Mengambil input dari elemen dengan id "input4" dan mengubahnya menjadi objek JavaScript
  const input = JSON.parse(document.getElementById("input4").value);

  // Inisialisasi variabel utama dan sekunder diagonal dengan angka 0
  let primaryDiagonal = 0;
  let secondaryDiagonal = 0;

  // Melakukan iterasi pada setiap baris matriks
  for (let i = 0; i < input.length; i++) {
    // Menambahkan elemen pada diagonal utama dengan nilai elemen pada baris dan kolom yang sama
    primaryDiagonal += input[i][i];
    // Menambahkan elemen pada diagonal sekunder dengan nilai elemen pada baris dan kolom yang sesuai (sebaliknya)
    secondaryDiagonal += input[i][input.length - 1 - i];
  }

  // Menghitung selisih antara diagonal utama dan diagonal sekunder
  const difference = Math.abs(primaryDiagonal - secondaryDiagonal);
  // Menampilkan hasil penghitungan dalam elemen dengan id "output4"
  document.getElementById("output4").innerText = difference;
}
