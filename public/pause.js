// stops playing BabelLens video on modal hide

$('#project-three-modal').modal({
  onHide: function () {
    $('#babellens-video').attr('src', '');
  },
  onShow: function () {
    $('#babellens-video').attr(
      'src',
      'https://www.youtube.com/embed/_UFifRBCsSo'
    );
  },
});
