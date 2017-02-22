'use restric'
import {mobileMenuAnimation} from './globalAnimation';


export default()=>{
  console.log('load navigation');

  let navigaitonLogoHeight = document.querySelector('.site--header .comp__logo').offsetHeight;
  let siteHeader = document.querySelector('.site--header');
  let navigation = document.querySelector('.site--header .comp__navigation');
  let menuToggle = document.querySelector('.comp__toggle-menu');
  let siteMain = document.querySelector('.site--main');
  let siteLogo = document.querySelector('.site--header .comp__logo .icon--logo');

  let navigationLsItem = document.getElementById('navLs').children;
  let LangLs = document.getElementById('LangLs');
  let ToggleSearch = document.getElementById('ToggleSearch');

  let isMobile = NaN;
  let menuStatus = false;

  function _isMobile(){
    // let navLsW = document.getElementById('navLs').offsetWidth;
    let navLsItem = document.querySelectorAll('.site--header .navigation__list .list-item a');
    let navLsItemW = 0;
    for(var i = 0; i < navLsItem.length; i++){
        navLsItemW += navLsItem[i].offsetWidth;
    }
    let LangLsW = LangLs.offsetWidth;
    let ToggleSearchW = ToggleSearch.offsetWidth;
    let offset = 80;
    let taregtW = navLsItemW + LangLsW + ToggleSearchW + offset;
    let vpW = window.innerWidth;

    if(vpW > taregtW){
      isMobile = false
      navigation.classList.remove('mobile');
      navigation.style.visibility = 'visible';
      navigation.style.position = 'relative';
      navigation.style.display = 'block';
      navigation.style.opacity = 1;
      TweenMax.set([navigationLsItem, LangLs, ToggleSearch], {
        opacity: 1,
        y: 0
      })
      // document.querySelectorAll('.site--header .navigation__list .list-item').style.opacity = 1;
      document.getElementsByTagName( 'html' )[0].classList.remove('mobile-menu');
      document.getElementsByTagName( 'html' )[0].classList.remove('mobile-menu--closed');
      document.getElementsByTagName( 'html' )[0].classList.remove('mobile-menu--opened');

      setTimeout(function(){
        let siteMainOffst = navigaitonLogoHeight + navigation.offsetHeight + 'px'
        siteMain.style.paddingTop = siteMainOffst;
      }, 500)



    }else if(vpW < taregtW){
      isMobile = true
      navigation.classList.add('mobile');
      navigation.style.visibility = 'hidden';
      navigation.style.display = 'flex';
      navigation.style.position = 'absolute';
      siteLogo.style.width = '120px'
      document.getElementsByTagName( 'html' )[0].classList.add('mobile-menu');

      siteMain.style.paddingTop = siteHeader.offsetHeight + 'px';

    }
    return isMobile
  }


  function _toggle(){
      menuToggle.addEventListener('click', function(){
        if(menuStatus === false){
          mobileMenuAnimation().animation.play();
          navigation.style.visibility = 'visible';
          navigation.style.position = 'absolute';
          document.getElementsByTagName( 'html' )[0].classList.add('mobile-menu--opened');
          document.getElementsByTagName( 'html' )[0].classList.remove('mobile-menu--closed');
          menuStatus = true;
        }else{
          mobileMenuAnimation().animation.reverse(0);
          setTimeout(function(){
            document.getElementsByTagName( 'html' )[0].classList.remove('mobile-menu--opened');
            document.getElementsByTagName( 'html' )[0].classList.add('mobile-menu--closed');
          }, 450);
          menuStatus = false;
        }
      });

  }

  function _fixHeader(){
    if(window.scrollY>navigaitonLogoHeight){
      siteHeader.classList.add('header-sticky');
      // siteMain.style.paddingTop = navigaitonLogoHeight + 'px';
    }else{
      siteHeader.classList.remove('header-sticky');
      // siteMain.style.paddingTop = 0 + 'px';
    }
  }

  function _init(){
    window.addEventListener('load',
    function(){
      _isMobile();
      // siteMain.style.paddingTop = siteMainOffst;
    });
    window.addEventListener('resize',
    function(){
      _isMobile();
      // siteMain.style.paddingTop = siteMainOffst;
    });
    window.addEventListener('orientationchange',
    function(){
      // siteMain.style.paddingTop = siteMainOffst;
      _isMobile();
    });
    window.addEventListener('scroll',
    function(){
      _fixHeader();
    });
  }

  _init();

  return {
    status: _isMobile(),
    toggle: _toggle()
  }

}
