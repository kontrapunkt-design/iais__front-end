'use restric'

import Isotope from 'isotope-layout';
import imagesLoaded from 'imagesloaded';

export default()=>{

  console.log('load report isotope layout')

  let reportSection = document.querySelector('.comp__section--report_list');
  // let reportItem = document.querySelector('.comp__section--report_list .comp__thumbnail--report');

  function _getFilterValue(x){
    return x.options[(x.selectedIndex)].value;
  }

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

    document.getElementById('isotopeFilter').addEventListener('change', function(){
      let isoFilter = document.getElementById('isotopeFilter');
      let isoFilterValue = _getFilterValue(isoFilter);
      iso.arrange({
        // item element provided as argument
        filter: '.'+isoFilterValue
      });

      console.log(isoFilterValue);
    })


  });



}
