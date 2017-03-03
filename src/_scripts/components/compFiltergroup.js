'use restric'

import ScrollMagic from 'scrollmagic';

export default()=>{
    let nav = document.querySelector('.comp__navigation');
    let navHeight = nav.offsetHeight;
    let filterGroup = document.getElementById('compFilterGroup');
    let controller = new ScrollMagic.Controller();

    let queryMobile = Modernizr.mq('(max-width: 640px)');

    if(!queryMobile){
      let scene = new ScrollMagic.Scene({
        triggerElement: filterGroup,
        offset: -navHeight,
        triggerHook: 0,
      })
  		.setPin(filterGroup)
  		.addTo(controller);
      scene.on('enter', function(){
        filterGroup.classList.add('filter-fixed');
      });
      scene.on('leave', function(){
        filterGroup.classList.remove('filter-fixed');
      });
    }
}
