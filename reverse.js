function reverseStringWithNumber() {
  var input = document.getElementById("input1").value;
  let letters = "";
  let number = "";

  for (let i = 0; i < input.length; i++) {
    if (isNaN(input[i])) {
      letters += input[i];
    } else {
      number += input[i];
    }
  }

  let reversedLetters = letters.split("").reverse().join("");
  let result = reversedLetters + number;
  document.getElementById("output1").innerText = result;
}
