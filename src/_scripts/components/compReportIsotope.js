'use restric'

import Isotope from 'isotope-layout';
import imagesLoaded from 'imagesloaded';

export default()=>{

  console.log('load report isotope layout')

  let reportSection = document.querySelector('.comp__section--report_list');
  // let reportItem = document.querySelector('.comp__section--report_list .comp__thumbnail--report');

  imagesLoaded(reportSection, function() {
    let iso = new Isotope( '.report-isotype-grid', {
      // options
      itemSelector: '.comp__thumbnail--report',
      percentPosition: true,
      // filter: '.corporate',
      layoutMode: 'masonry',
      stagger: 50,
      animateEngine: 'best-available',
      animationOptions: {
           duration: 1000,
           easing: 'ease-in-out',
           queue: false
         },
      masonry: {
        columnWidth: '.grid-sizer'
      }
    });

  });

}
