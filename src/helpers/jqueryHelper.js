import $ from 'jquery';

const jqueryHelper = () => {
  return !(function ($) {
    // Navigation active state on scroll
    let nav_sections = $('section');
    let main_nav = $('.nav-menu, #mobile-nav');

    $(window).on('scroll', function () {
      let cur_pos = $(this).scrollTop() + 300;

      nav_sections.each(function () {
        let top = $(this).offset().top,
          bottom = top + $(this).outerHeight();

        if (cur_pos >= top && cur_pos <= bottom) {
          if (cur_pos <= bottom) {
            main_nav.find('li').removeClass('active');
          }
          main_nav
            .find('a[href="#' + $(this).attr('id') + '"]')
            .parent('li')
            .addClass('active');
        }
        if (cur_pos < 200) {
          $('.nav-menu ul:first li:first').addClass('active');
        }
      });
    });

    // Animate Letters and Icons
    const animateCSS = (element, animation, prefix = 'animate__') =>
      // We create a Promise and return it
      new Promise((resolve, reject) => {
        const animationName = `${prefix}${animation}`;
        const node = document.querySelector(element);

        node.classList.add(`${prefix}animated`, animationName);

        // When the animation ends, we clean the classes and resolve the Promise
        const handleAnimationEnd = (event) => {
          event.stopPropagation();
          node.classList.remove(`${prefix}animated`, animationName);
          resolve('Animation ended');
        };

        node.addEventListener('animationend', handleAnimationEnd, {
          once: true,
        });
      });

    // Animate listener
    $('.animate')
      .on('mouseenter', ({ target: { id, className } }) => {
        if (id) {
          if (!className.includes('bottom-icon'))
            $(`#${id}`).css('color', '#76232c');
          animateCSS(`#${id}`, 'jello');
        }
      })
      .on('mouseleave', ({ target: { id } }) => {
        if (id) $(`#${id}`).removeAttr('style');
      });
  })($);
};

export default jqueryHelper;
