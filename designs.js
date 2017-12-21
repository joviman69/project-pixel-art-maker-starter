var color;
var height = 20 ;
var width = 20;


/// Set color value
$('#colorPicker').change(function() {
    color = $(this).val();
});

///Set grid height
$('#input_height').change(function() {
    height = $(this).val();
});

/// Set grid width
$('#input_width').change(function() {
    width = $(this).val();
});

/// calling makeGrid()
$('#sizePicker').submit(function(event) {
    var grid = makeGrid(width, height);
    event.preventDefault();
});
/// Grid reset
$('#reset').on('click', function() {
    $('td').css('background-color', '');
});
/// makeGrid

function makeGrid(width, height) {
    var grid = $('#pixel_canvas');
    grid.empty();

    for (var rows = 1; rows <= Number(height); rows++) {
        var tr = $('<tr class="rows">');
        for (var cols = 1; cols <= Number(width); cols++) {
            var td = tr.append('<td class="cell">');
        }
        grid.append(tr);
    }
    return grid;
};

//click drawing 
$(document).on('mousedown mouseup', 'td', function mouseState(e) {
    if (e.type === 'mousedown') {
        if (e.which === 1) {
            let color = $('#colorPicker').val();
            $(this).css('background-color', color);
        }
        if (e.which === 3) {
            $(this).css('background-color', '#ffffff');
            e.preventDefault();

        }
    }
});
