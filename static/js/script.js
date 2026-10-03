$(function () {
  $('[data-toggle="popover"]').popover({
    html: true,
    content: function () {
      return '<img class="img-fluid" width="100px" src="'+$(this).data('img') + '" />';
    }
  })
})

$(function () {
  var $toggle = $('#pub-toggle');
  var $title = $('#pub-title');
  var $selected = $('#pub-selected');
  var $all = $('#pub-all');

  // Copy every paper into each topic group it belongs to.
  $all.find('.pub-topic').each(function () {
    var $group = $(this);
    var topic = $group.data('topic');
    $selected.add('#pub-more').find('.section-item').each(function () {
      if (($(this).data('topic') || '').split(' ').indexOf(topic) !== -1) {
        $group.append($(this).clone());
      }
    });
  });

  $toggle.on('click', function (e) {
    e.preventDefault();
    var showAll = $all.hasClass('d-none');
    $all.toggleClass('d-none', !showAll);
    $selected.toggleClass('d-none', showAll);
    $title.text(showAll ? 'Publications' : 'Selected Publications');
    $toggle.text(showAll ? '(Selected)' : '(All)').attr('aria-expanded', showAll);
  });
})
