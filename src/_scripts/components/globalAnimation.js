import gsap from 'gsap'

let searchForm = document.querySelector('.comp__search-form');
let inputGroup = document.querySelector('.comp__search-form .input-group');
let searchInput = document.querySelector('.comp__search-form .input-group .input--search');

let navGroup = document.querySelector('.site--header .comp__navigation .navigation');
let nav = document.querySelector('.site--header .comp__navigation');
let navLs = document.getElementById('navLs');
let navLsItem = document.getElementById('navLs').children;
let LangLs = document.getElementById('LangLs');
let ToggleSearch = document.getElementById('ToggleSearch');

let LogoMini = document.querySelector('.comp__logo--mini');

export function searchAnimation(){

  let tweenSearch = TweenMax.fromTo(searchForm, 0.2, {
    display: 'none',
    y: 100,
    z: 0,
    opacity: 0
  }, {
    display: 'flex',
    force3D:true,
    y: 0,
    z: 0,
    opacity: 1,
    ease: Sine.easeInOut
  });

  let tweenInputGroup = TweenMax.fromTo(inputGroup, 0.2, {
    y: 30,
    opacity: 0
  }, {
    y: 0,
    opacity: 1,
    ease: Sine.easeInOut,
    onComplete: function(){
      searchInput.focus();
    }
  })

  let tweenNavGroup = TweenMax.staggerFromTo([navGroup, LangLs], 0.2, {
    y: 0,
    opacity: 1,
  }, {
    y: -50,
    opacity: 0,
  },0.05)


  let animationSearch = new TimelineMax()
  .add([tweenNavGroup],0.15)
  .add(tweenSearch,0.15)
  .add(tweenInputGroup,0.15)
  .pause();

  return {
    animation: animationSearch
  }

}


export function mobileMenuAnimation(){

  let tweenMenuBg = TweenMax.fromTo(nav, 0.2, {
    opacity: 0,
    visibility: 'hidden'
  }, {
    opacity: 1,
    visibility: 'visible',
    ease: Sine.easeInOut,
  })

  let tweenMenuItem01 = TweenMax.staggerFromTo(navLsItem, 0.1, {
    opacity: 0,
    y: -20
  },{
    opacity: 1,
    y: 0
  },0.05)

  let tweenMenuItem02 = TweenMax.staggerFromTo([LangLs, ToggleSearch], 0.1, {
    opacity: 0,
    y: -20,
  },{
    opacity: 1,
    y: 0,
  },0.05)


  let animationMobileMenu = new TimelineMax()
  .add(tweenMenuBg)
  .add(tweenMenuItem01)
  .add(tweenMenuItem02)
  .pause();

  return {
    animation: animationMobileMenu
  }

}

export function logoMiniAnimation(){
  let tweenLogoMini = TweenMax.fromTo(LogoMini, 0.2, {
    display: 'none',
    x: -LogoMini.offsetWidth*0.25,
    opacity: '0',
    delay: 0.5
  }, {
    display: 'block',
    x: 0,
    opacity: '1',
    delay: 0.5
  });


  let animationLogoMini = new TimelineMax().add([tweenLogoMini]).pause();

  return {
    animation: animationLogoMini
  }

}

export function heroAnimation(targetHeight){

  let heroContainerHeight = document.querySelector('.container--hero').offsetHeight;
  let heroContainer = document.querySelector('.container--hero');
  let heroText = document.querySelector('.container--hero .comp__front-hero');
  let heroOverlay = document.querySelector('.container--hero .comp__overlay');

  let tweenHeroContainer = TweenMax.fromTo(heroContainer, 0.5, {
    height: targetHeight,
    paddingTop: 72,
  }, {
    height: 0,
    paddingTop: 0,
    ease: Sine.easeInOut,
  });

  let tweenHeroText = TweenMax.fromTo(heroText, 0.5, {
    scaleX: 1,
    scaleY: 1,
    opacity: 1,
    y: '',
  }, {
    scaleX: 0.8,
    scaleY: 0.8,
    opacity: 0.5,
    y: -heroText.offsetHeight*0.2,
    ease: Sine.easeInOut,
  })

  let tweenHeroOverlay = TweenMax.fromTo(heroOverlay, 0.2, {
    display: 'none',
    opacity: 0
  }, {
    display: 'block',
    opacity: 1,
    ease: Sine.easeInOut,
  })

  let animationHero = new TimelineMax()
  .add([tweenHeroContainer, tweenHeroText])
  .add(tweenHeroOverlay)
  .pause();

  return {
    animation: animationHero
  }

}


export function loading(){
  let tweenLoadingCover = TweenMax.to('#cover', 0.2, {
    opacity: 0,
    scale: 0.95,
    display: 'none'
  })
  let tweenLoadingText = TweenMax.to('.progressbar-text', 0.2, {
    opacity:0,
    display: 'none'
  });
  let tweenLoadingLogo = TweenMax.to('#cover .comp__logo', 0.2, {
    opacity:0,
    display: 'none',
    onComplete: ()=>{
      document.getElementsByTagName( 'html' )[0].style.overflow = 'auto';
    }
  });

  let animationLoading = new TimelineMax()
  .add([tweenLoadingText, tweenLoadingLogo])
  .add(tweenLoadingCover, 0.6)
  .pause();

  return {
    animation: animationLoading
  }

}
