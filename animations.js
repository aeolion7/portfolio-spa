window.setTimeout(function () {
  $('#name').transition({
    animation: 'scale',
    duration: '500ms',
    onComplete: function () {
      $('.nav-link').transition('fly right', '1s');
    },
  });

  $('#header-title').transition('scale', '1s');
}, 500);
