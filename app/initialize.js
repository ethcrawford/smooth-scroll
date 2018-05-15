document.addEventListener('DOMContentLoaded', function() {
  // Window scroll events
  $(window).on('scroll', function() {
    var wScroll = $(this).scrollTop();
    // Activate||Deactivate Navbar
    if (wScroll > 20) {
      $('.page-header').addClass('page-header--active');
    } else {
      $('.page-header').removeClass('page-header--active');
    }
  });
  // Slide out menu
  // Slide out menu - Open menu
  $('.slide-out-menu-toggle').on('click', function() {
    if (!($('.slide-out-menu').hasClass('slide-out-menu--open'))) {
      // All toggle switches, not only this, if several, become active
      $('.slide-out-menu-toggle').addClass('slide-out-menu-toggle--active');
      $('.slide-out-menu').addClass('slide-out-menu--open');
      $('.slide-out-menu-overlay').addClass('slide-out-menu-overlay--active');
    } else {
      $('.slide-out-menu-toggle').removeClass('slide-out-menu-toggle--active');
      $('.slide-out-menu').removeClass('slide-out-menu--open');
      $('.slide-out-menu-overlay').removeClass('slide-out-menu-overlay--active');
    }
    return false;
  });
  // Slide out menu - Close menu
  $('.slide-out-menu__toggle').on('click', function() {
    // All toggle switches, if several, no longer active
    $('.slide-out-menu-toggle').removeClass('slide-out-menu-toggle--active');
    $('.slide-out-menu').removeClass('slide-out-menu--open');
    $('.slide-out-menu-overlay').removeClass('slide-out-menu-overlay--active');
    return false;
  });
  $('.slide-out-menu-overlay').on('click', function() {
    // All toggle switches, if several, no longer active
    $('.slide-out-menu-toggle').removeClass('slide-out-menu-toggle--active');
    $('.slide-out-menu').removeClass('slide-out-menu--open');
    $('.slide-out-menu-overlay').removeClass('slide-out-menu-overlay--active');
    return false;
  });
  console.log('Initialized');
});
