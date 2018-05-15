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
    if (wScroll > 600) {
      $('.scroll-up').addClass('scroll-up--active');
    } else {
      $('.scroll-up').removeClass('scroll-up--active');
    }
  });
  // Smooth Scroll
  $('a[href*="#"]')
    // Remove links that don't actually link to anything
    .not('[href="#"]')
    .not('[href="#0"]')
    .click(function(event) {
      // On-page links
      if (
        location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
        &&
        location.hostname == this.hostname
      ) {
        // Figure out element to scroll to
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        // Does a scroll target exist?
        if (target.length) {
          // Only prevent default if animation is actually gonna happen
          event.preventDefault();
          $('html, body').animate({
            scrollTop: target.offset().top - 100
          }, 600);
        }
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
