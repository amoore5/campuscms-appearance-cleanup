(function ($) {
  Drupal.behaviors.campuscmsAppearanceCleanup = {
    attach: function (context) {
      $("a[title='Settings for Seven theme']").closest('.theme-selector').hide();
      $(".system-themes-list-disabled").hide();
      $("#system-themes-admin-form").hide();
      $('.operations .1').hide();
    }
  };
})(jQuery);
