(function($){
  function makeGrid(event) {
    event.preventDefault();
    $('#pixel_canvas').empty();
    let height = $('#input_height').val();
    let width = $('#input_width').val();

    for (let i = 0; i < height; i++) {
      let row = $('<tr></tr>');
      for (var j = 0; j < width; j++) {
        $('<td></td>').appendTo(row);
      }
      $('#pixel_canvas').append(row);
    }
  }

  $('#sizePicker').on('submit', makeGrid);

  $('#pixel_canvas').on('mouseenter', 'td', (event)=>{
    $(event.target).css('background-color', $('#colorPicker').val());
  });
})(jQuery);
