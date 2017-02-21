'use restric'
import {mobileMenuAnimation} from './globalAnimation';


export default()=>{
  console.log('load navigation');


  let navigation = document.querySelector('.site--header .comp__navigation');
  let menuToggle = document.querySelector('.comp__toggle-menu');
  let siteMain = document.querySelector('.site--main');

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
    siteMain.style.paddingTop = document.querySelector('.site--header').offsetHeight + 'px';
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
    }else if(vpW < taregtW){
      isMobile = true
      navigation.classList.add('mobile');
      navigation.style.visibility = 'hidden';
      navigation.style.display = 'flex';
      navigation.style.position = 'absolute';
      document.getElementsByTagName( 'html' )[0].classList.add('mobile-menu');
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

  function _init(){
    window.addEventListener('load',
    function(){
      _isMobile();
    });
    window.addEventListener('resize',
    function(){
      _isMobile();
      siteMain.style.paddingTop = document.querySelector('.site--header').offsetHeight + 'px';
    });
    window.addEventListener('orientationchange',
    function(){
      siteMain.style.paddingTop = document.querySelector('.site--header').offsetHeight + 'px';
      _isMobile();
    });
  }

  _init();

  return {
    status: _isMobile(),
    toggle: _toggle()
  }

}
