function longest(sentence) {
  const words = sentence.split(" ");
  let longestWord = "";
  for (let word of words) {
    if (word.length > longestWord.length) {
      longestWord = word;
    }
  }
  return `${longestWord}: ${longestWord.length} characters`;
}

function findLongestWord() {
  var sentence = document.getElementById("input2").value;
  document.getElementById("output2").innerText = longest(sentence);
}
