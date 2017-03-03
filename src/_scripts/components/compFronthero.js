'use restric'

import baffle from 'baffle'
import {SplitType} from '../vendors/splittype'
import {heroAnimation} from './globalAnimation'
import {myToggle} from './compToggle'

export default()=>{
  console.log('load front hero');

  let heroTitle = document.querySelector('.comp__front-hero .title');
  heroTitle.style.visibility = 'hidden';

  let sequence2Btn = document.querySelector('.comp__front-hero .sequence1 a.button');

  let heroMsgs = [] = document.querySelectorAll('.comp__front-hero .message h1');
  let heroMsgsLine = document.querySelectorAll('.comp__front-hero .message .line');
  let heroMsgsIcon = document.querySelectorAll('.comp__front-hero .message .icon');


  $.each(heroMsgs,function(i, val){
    setTimeout(function(){

      TweenMax.fromTo($(val).parent().find('.icon'), 0.2, {
        opacity: 0,
        y: 20,
      }, {
        opacity: 1,
        y: 0,
      })

      TweenMax.fromTo($(val).parent().find('.line'), 0.2, {
        width: 0,
      }, {
        width: $(val).outerWidth(),
        delay: 0.25,
      })

      TweenMax.fromTo($(val), 0.2, {
        opacity: 0,
        y: 20,
      }, {
        opacity: 1,
        y: 0,
        ease: Sine.easeInOut,
        delay: 0.35,
        onComplete: function(){
          baffle(val)
          .text(currentText => currentText)
          .start()
          .set({
            characters : val.innerHTML,
            speed: 100
          })
          .reveal(800, 100);
        }
      })

    }, i*800)
  })

  // heroMsgs.forEach(function(el, i){
  //   setTimeout(function(){
  //
  //     TweenMax.fromTo(el, 0.2, {
  //       opacity: 0,
  //       y: 20,
  //     }, {
  //       opacity: 1,
  //       y: 0,
  //       ease: Sine.easeInOut,
  //       onComplete: function(){
  //         baffle(el)
  //         .text(currentText => currentText)
  //         .start()
  //         .set({
  //           characters : el.innerHTML,
  //           speed: 50
  //         })
  //         .reveal(1000, 100);
  //       }
  //     })
  //   }, i*800)
  // });

  TweenMax.fromTo(sequence2Btn, 0.2, {
    opacity: 0,
    y: 20,
  }, {
    opacity: 1,
    y: 0,
    delay:2.5
  })

  sequence2Btn.addEventListener(
    'click',
    function(){
      TweenMax.to('.comp__front-hero .sequence1', 0.2, {
        opacity: 0,
        y: -10,
        display: 'none',
        onComplete: function(){
          TweenMax.to(heroTitle, 0.2, {
            opacity: 1,
            visibility: 'visible',
            onComplete: function(){
              let heroBaffleText = baffle(heroTitle)
                .text(currentText => currentText)
                .start()
                .set({
                  characters : heroTitle.innerHTML,
                  speed: 100
                })
                .reveal(1000, 200);
            }
          })
        }
      });
    }
  )

  // let heroToggle = document.querySelector('.container--hero .comp__toggle--hero');
  // get the targetheight for animation reverse
  const targetHeight = document.querySelector('.container--hero').offsetHeight;
  // heroToggle.addEventListener(
  //   'click',
  //   function(){
  //     myToggle(this, heroAnimation(targetHeight));
  // });

}
