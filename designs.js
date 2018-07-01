// When size is submitted by the user, call makeGrid()
var inputHeight, inputWidth

$('#sizePicker').submit(function(event){
    
    // Select size input
    inputHeight = $('#inputHeight').val();
    inputWidth = $('#inputWeight').val();
    
    //call function makeGrid()
    makeGrid(inputHeight, inputWidth);
    
    event.preventDefault();
       
});


// Your code goes here!

function makeGrid(gridHeight, gridWidth) {
    //remove previously created grid
    $('table tr').remove();
    //initialize grid
    var grid = "";
    //nested loop to create rows and columns
    for (var x = 1; x <= gridHeight; x++) {
        
       grid += "<tr>";
        for (var y = 1; y <= gridWidth; y++) {
            
            grid += "<td></td>";
        }
        grid += "</tr>";
        
    }
    $('#pixelCanvas').append(grid);
    
    $('td').click(function() {
        
        // Select color input
        var myColor = $('#colorPicker').val();
        
        //apply input color to current grid
        $(this).attr('style') ? $(this).removeAttr('style') : $(this).attr('style', 'background:' + myColor);

        });

}



