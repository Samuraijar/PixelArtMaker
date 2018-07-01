

$('#sizePicker').submit(function(event){
    var inputHeight = $('#inputHeight').val();
    var inputWidth = $('#inputWeight').val();
    $('table tr').remove();
    makeGrid(inputHeight, inputWidth);
    event.preventDefault();
       
});

// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()


function makeGrid(gridHeight, gridWidth) {
    
    var grid = "";
    for (var x = 1; x <= gridHeight; x++) {
        grid += "<tr>";
        for (var y = 1; y <= gridWidth; y++) {
            grid += "<td></td>";
        }
        grid += "</tr>";
        
    }
    $('#pixelCanvas').append(grid);
    
    $('td').click(function() {
        var myColor = $('#colorPicker').css('color');
        $(this).css('color', myColor);

            
        
    });


    
// Your code goes here!

}
