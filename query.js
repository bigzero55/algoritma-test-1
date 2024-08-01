// soal3.js
function countOccurrences() {
  var input = document.getElementById("input3a").value;
  var query = document.getElementById("input3b").value;
  var inputArray = [];
  var queryArray = [];
  var temp = "";

  // Mengonversi string INPUT menjadi array
  for (var i = 0; i < input.length; i++) {
    if (input[i] === "," || i === input.length - 1) {
      if (i === input.length - 1) {
        temp += input[i];
      }
      inputArray.push(temp);
      temp = "";
    } else {
      temp += input[i];
    }
  }

  // Mengonversi string QUERY menjadi array
  temp = "";
  for (var j = 0; j < query.length; j++) {
    if (query[j] === "," || j === query.length - 1) {
      if (j === query.length - 1) {
        temp += query[j];
      }
      queryArray.push(temp);
      temp = "";
    } else {
      temp += query[j];
    }
  }

  var output = [];
  for (var k = 0; k < queryArray.length; k++) {
    var count = 0;
    for (var l = 0; l < inputArray.length; l++) {
      if (queryArray[k] === inputArray[l]) {
        count++;
      }
    }
    output.push(count);
  }

  document.getElementById("output3").innerText = output.join(", ");
}
