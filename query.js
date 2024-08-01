function countOccurrences() {
  var INPUT = document
    .getElementById("input3a")
    .value.split(",")
    .map((item) => item.trim());
  var QUERY = document
    .getElementById("input3b")
    .value.split(",")
    .map((item) => item.trim());
  let output = [];

  for (let query of QUERY) {
    let count = 0;
    for (let input of INPUT) {
      if (query === input) {
        count++;
      }
    }
    output.push(count);
  }

  document.getElementById("output3").innerText = output.join(", ");
}
