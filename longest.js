function findLongestWord() {
  // Mengambil input dari form
  var sentence = document.getElementById("input2").value;
  var words = []; // Array untuk menyimpan kata-kata dalam kalimat
  var word = ""; // String untuk menyimpan kata saat ini
  var words = [];
  var word = "";

  // Memisahkan kata-kata dalam kalimat secara manual
  for (var i = 0; i < sentence.length; i++) {
    // Jika karakter saat ini adalah spasi atau karakter terakhir dalam kalimat
    if (sentence[i] === " " || i === sentence.length - 1) {
      // Jika karakter terakhir bukan spasi, tambahkan ke variabel word
      if (i === sentence.length - 1 && sentence[i] !== " ") {
        word += sentence[i];
      }
      // Tambahkan kata yang telah dibuat ke dalam array words
      words.push(word);
      word = ""; // Reset kata saat ini
      word = "";
    } else {
      // Jika karakter bukan spasi, tambahkan ke variabel word
      word += sentence[i];
    }
  }

  // Mencari kata dengan panjang yang paling panjang
  var longestWord = "";
  for (var j = 0; j < words.length; j++) {
    if (words[j].length > longestWord.length) {
      longestWord = words[j];
    }
  }

  // Menampilkan kata terpanjang dan panjangnya dalam elemen output
  document.getElementById("output2").innerText =
    longestWord + ": " + longestWord.length + " karakter";
}
