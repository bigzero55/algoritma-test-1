function diagonalDifference(matrix) {
  let n = matrix.length;

  let primaryDiagonalSum = 0;
  let secondaryDiagonalSum = 0;

  for (let i = 0; i < n; i++) {
    primaryDiagonalSum += matrix[i][i];
    secondaryDiagonalSum += matrix[i][n - 1 - i];
  }

  return Math.abs(primaryDiagonalSum - secondaryDiagonalSum);
}

function calculateDiagonalDifference() {
  const matrixInput = document.getElementById("input4").value;
  let matrix;
  try {
    matrix = JSON.parse(matrixInput);
  } catch (e) {
    alert("Invalid matrix format");
    return;
  }

  if (
    !Array.isArray(matrix) ||
    !matrix.every((row) => Array.isArray(row) && row.length === matrix.length)
  ) {
    alert("Invalid matrix format");
    return;
  }

  const result = diagonalDifference(matrix);
  document.getElementById("output4").innerText = `Result: ${result}`;
}
