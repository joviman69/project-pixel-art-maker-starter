// Select color input
var color;
var colorRight;
// Select size input
var height;
var width;


/// Set color val
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
///Grid reset
$('#reset').on('click', function() {
    $('td').css('background-color', '');
});
////makeGrid

function makeGrid(width, height) {
    var grid = $('#pixel_canvas');
    grid.empty();

    for (var rows = 1; rows <= Number(height); rows++) {
        var tr = $('<tr class="rows">');
        for (var col = 1; col <= Number(width); col++) {
            var td = tr.append('<td class="cell">')
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
        if (e.which === 2) {
            $(this).css('background-color', '#ffffff');
            e.preventDefault();

        }
    }
});

//hold drawing
$('body').mousedown(function(e) {
    if (e.which === 1) {
        $('td').bind('hover', function() {
            let color = $('#colorPicker').val();
            $(this).css('background-color', color);
        });
    }
    if (e.which === 2) {
        $('td').bind('hover', function() {
            $(this).css('background-color', '#ffffff');
        });
    }

});
$('body').mouseup(function() {
    $("body td").unbind("hover");
    $("body").css(function() {
        return false;
    });
});