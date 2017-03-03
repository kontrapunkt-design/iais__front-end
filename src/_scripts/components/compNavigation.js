'use restric'
import {mobileMenuAnimation, logoMiniAnimation} from './globalAnimation';
import scrollMonitor from 'scrollMonitor';

export default()=>{
  console.log('load navigation');


  let navLogo = document.querySelector('.site--header .comp__logo');
  let navLogoHeight = navLogo.offsetHeight;

  let htmlEl = document.getElementsByTagName( 'html' )[0];

  let siteHeader = document.querySelector('.site--header');
  let siteHeaderHeight = siteHeader.offsetHeight;
  let siteLogo = document.querySelector('.site--header .comp__logo .icon--logo');
  let siteLogoWidthLarge = 320;
  let siteLogoWidthSmall = 280;
  let siteMain = document.querySelector('.site--main');

  let nav = document.querySelector('.site--header .comp__navigation');
  let navLsItem = document.getElementById('navLs').children;
  let LangLs = document.getElementById('LangLs');
  let ToggleSearch = document.getElementById('ToggleSearch');

  let menuToggle = document.querySelector('.comp__toggle-menu');
  let menuStatus = false;
  let scrollFire = false;

  function _isMobile(){
    let navLsMenuItem = document.querySelectorAll('.site--header .navigation__list .list-item a');
    let navLsMenuItemW = 0;
    for(var i = 0; i < navLsMenuItem.length; i++){
        navLsMenuItemW += navLsMenuItem[i].offsetWidth;
    }
    let LangLsW = LangLs.offsetWidth;
    let ToggleSearchW = ToggleSearch.offsetWidth;

    let offset = 120;

    let taregtW = navLsMenuItemW + LangLsW + ToggleSearchW + offset;
    let vpW = window.innerWidth;

    if(vpW > taregtW){
      nav.classList.remove('mobile');
      // set logo width for desktop
      siteLogo.style.width = siteLogoWidthLarge + 'px'
      // set nav to visible
      TweenMax.set(nav, {
        visibility: 'visible',
        position: 'relative',
        display: 'block',
        opacity: 1
      });
      // set position of desktop nav items
      TweenMax.set([navLsItem, LangLs, ToggleSearch], {
        opacity: 1,
        y: 0
      });
      // reset html class
      htmlEl.classList.remove('mobile-menu');
      htmlEl.classList.add('mobile-menu--closed');
      htmlEl.classList.remove('mobile-menu--opened');

      setTimeout(function(){
        siteMain.style.paddingTop = siteHeaderHeight + 1 + 'px';
      }, 500)

    }else if(vpW < taregtW){
      nav.classList.add('mobile');
      nav.style.visibility = 'hidden';
      nav.style.display = 'flex';
      nav.style.position = 'absolute';
      siteLogo.style.width = siteLogoWidthSmall + 'px';
      // set html class to mobile
      htmlEl.classList.add('mobile-menu');
      siteMain.style.paddingTop = siteHeader.offsetHeight + 1 + 'px';
    }
  }

  function _toggle(){
    menuToggle.addEventListener('click', function(){
      if(menuStatus === false){
        mobileMenuAnimation().animation.play();
        nav.style.visibility = 'visible';
        nav.style.position = 'fixed';
        // toggle html class
        htmlEl.classList.add('mobile-menu--opened');
        htmlEl.classList.remove('mobile-menu--closed');
        menuStatus = true;
      }else{
        mobileMenuAnimation().animation.reverse(0);
        setTimeout(function(){
          // toggle html class
          htmlEl.classList.remove('mobile-menu--opened');
          htmlEl.classList.add('mobile-menu--closed');
        }, 450);
        menuStatus = false;
      }
    });
  }

  let WatcherNav = scrollMonitor.create(navLogo);
  WatcherNav.exitViewport(function() {
    siteHeader.classList.add('header-sticky');
    logoMiniAnimation().animation.play();
  });
  WatcherNav.enterViewport(function() {
    siteHeader.classList.remove('header-sticky');
    logoMiniAnimation().animation.reverse(0);
  });


  function _init(){
    window.addEventListener('load',
    function(){
    });
    window.addEventListener('resize',
    function(){
      _isMobile();
    });
    window.addEventListener('orientationchange',
    function(){
      _isMobile();
    });
    window.addEventListener('scroll',
    function(){
    });
  }

  _init();

  return {
    status: _isMobile(),
    toggle: _toggle()
  }

}
