var myColor = $('#colorPicker').css('color');

$('#sizePicker').submit(function(){
    var inputHeight = $('#inputHeight').val();
    var inputWidth = $('#inputWeight').val();
    makeGrid(inputHeight, inputWidth);
       
});

// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()


function makeGrid(gridHeight, gridWidth) {
    
    var grid = "<table>";
    grid.remove();
    for (var x = 1; x <= gridHeight; x++) {
        grid += "<tr>";
        for (var y = 1; y <= gridWidth; y++) {
            grid += "<td></td>";
        }
        grid += "</tr>";
        $('#pixelCanvas').append(grid);
    }
    
// Your code goes here!

}
