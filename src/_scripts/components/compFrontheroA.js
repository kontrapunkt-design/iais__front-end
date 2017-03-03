'use restric'

import baffle from 'baffle'
import {heroAnimation} from './globalAnimation'

export default()=>{
  console.log('load front hero');

  let heroTitle = document.querySelector('.comp__front-hero--A .title');

  let heroServices = document.querySelectorAll('.comp__front-hero--A .sequence2 .services-item .inner')
  let heroServicesIcon = document.querySelectorAll('.comp__front-hero--A .sequence2 .services-item .icon')
  let heroServicesTitle = document.querySelectorAll('.comp__front-hero--A .sequence2 .title')

  let tweenHeroServices = TweenMax.staggerFromTo(heroServices, 0.5, {
    opacity:0.8,
    y: 50,
  }, {
    opacity:1,
    y: 0,
  }, 0.1);
  let tweenHeroTitle = TweenMax.fromTo(heroServicesTitle, 0.2, {
    opacity:0
  }, {
    opacity:1
  });
  let tweenHeroIcon = TweenMax.staggerFromTo(heroServicesIcon, 0.5, {
    display: 'none',
    y: 50,
  }, {
    display: 'block',
    y: 0
  }, 0.1);

  let animationHeroServices = new TimelineMax()
      .add(tweenHeroTitle)
      .add([tweenHeroIcon],0.5)
      .add(tweenHeroServices,0.6)
      .pause();

  let heroBaffleText = baffle(heroTitle)
    .text(currentText => currentText)
    .start()
    .set({
      characters : heroTitle.innerHTML,
      speed: 100
    })
    .reveal(1000, 200);

    setTimeout(function(){
      animationHeroServices.play();
    }, 1300)
}
