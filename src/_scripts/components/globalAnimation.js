import gsap from 'gsap'

let searchForm = document.querySelector('.comp__search-form');
let inputGroup = document.querySelector('.comp__search-form .input-group');
let searchInput = document.querySelector('.comp__search-form .input-group .input--search');

let navigation = document.querySelector('.site--header .comp__navigation');
let navigationLsItem = document.getElementById('navLs').children;
let LangLs = document.getElementById('LangLs');
let ToggleSearch = document.getElementById('ToggleSearch');


export function searchAnimation(){

  let tweenSearch = TweenMax.fromTo(searchForm, 0.2, {
    display: 'none',
    y: 100,
    opacity: 0
  }, {
    display: 'flex',
    y: 0,
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


  let animationSearch = new TimelineMax()
  .add(tweenSearch)
  .add(tweenInputGroup)
  .pause();

  return {
    animation: animationSearch
  }

}


export function mobileMenuAnimation(){

  let tweenMenuBg = TweenMax.fromTo(navigation, 0.2, {
    opacity: 0,
    visibility: 'hidden'
  }, {
    opacity: 1,
    visibility: 'visible',
    ease: Sine.easeInOut,
  })

  let tweenMenuItem01 = TweenMax.staggerFromTo(navigationLsItem, 0.1, {
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

export function heroAnimation(targetHeight){

  let heroContainerHeight = document.querySelector('.container--hero').offsetHeight;
  console.log(heroContainerHeight);
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
