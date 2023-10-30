function createMultTable() {
  //gets values from form
  const minY = parseInt(document.getElementById("minY").value);
  const maxY = parseInt(document.getElementById("maxY").value);
  const minX = parseInt(document.getElementById("minX").value);
  const maxX = parseInt(document.getElementById("maxX").value);

  //checks to see if inputu is a number and within range of -50 to 50
  if (
    !isNaN(minY) &&
    !isNaN(maxY) &&
    !isNaN(minX) &&
    !isNaN(maxX) &&
    minY >= -50 &&
    minY <= 50 &&
    maxY >= -50 &&
    maxY <= 50 &&
    minX >= -50 &&
    minX <= 50 &&
    maxX >= -50 &&
    maxX <= 50
  ) {
    const table = document.getElementById("mult_table");

    let tableHTML = "<table border='1'><thead><tr><th>&times;</th>";

    //loop to determine X values
    for (let x = minX; x <= maxX; x++) {
      tableHTML += `<th>${x}</th>`;
    }

    tableHTML += "</tr></thead><tbody>";

    //loops to do the same for Y values as well as the rest of the mult table
    for (let y = minY; y <= maxY; y++) {
      tableHTML += `<tr><th>${y}</th>`;
      for (let x = minX; x <= maxX; x++) {
        tableHTML += `<td>${x * y}</td>`;
      }
      tableHTML += "</tr>";
    }

    tableHTML += "</tbody></table>";

    table.innerHTML = tableHTML;
  } else {
    //if error write to specific div and displays error
    const error = document.getElementById("error");
    const error_message = "Please enter numbers in the valid range";
    error.innerHTML = error_message;
  }
}
