// from data.js
var tableData = data;

// YOUR CODE HERE!
var tbody = d3.select("tbody");

tableData.forEach(function(ufoData) {
    var row = tbody.append("tr");
    Object.entries(ufoData).forEach(function([key, value]) {
        var cell = row.append("td");
        cell.text(value);
    });
});


var filterButton = d3.select("#filter-btn");

filterButton.on("click", function() {

    d3.event.preventDefault();
    var inputElement = d3.select("#datetime");
    var inputValue = inputElement.property("value");

    var filteredData = tableData.filter(x => x.datetime === inputValue);

    d3.select("tbody").selectAll("tr").remove();

    filteredData.forEach(function(newData) {
        var row = tbody.append("tr");
        Object.entries(newData).forEach(function([key, value]) {
            var cell = row.append("td");
            cell.text(value);
        });
    });

});