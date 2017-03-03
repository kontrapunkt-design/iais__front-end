'use restric'

import baffle from 'baffle'
import {heroAnimation} from './globalAnimation'
import browser from 'detect-browser'

export default()=>{
  console.log('load front hero');

  let heroTitle = document.querySelector('.comp__front-hero--B .title');

  let heroBaffleText = baffle(heroTitle)
    .text(currentText => currentText)
    .start()
    .set({
      characters : heroTitle.innerHTML,
      speed: 100
    })
    .reveal(1500, 200);


  let changeText = (x, animation)=>{

    console.log(browser.name);
    if (browser.name === 'ie'){
      let words = x.data('highlight').split(',');
    }else{
      let words = x.dataset.highlight.split(',');
      let htmlContent = x.innerHTML;
      for(let i=0; i<words.length; i++){
        let reg = new RegExp(words[i], 'g');
        htmlContent = htmlContent.replace(reg, "<span class='highlight'>"+"<span class='line'></span>"+"<span class='text'>"+words[i]+"</span>"+"</span>");
      }
      x.innerHTML = htmlContent;
    }
    // let words = ['行政情報', '電子政府', '接点に位置'];

    setTimeout(function(){
      animation();
    }, 500)

  }


  setTimeout(function(){
    changeText(heroTitle, function(){
      TweenMax.staggerFromTo('.highlight .line', 0.2, {
        width: 0,
        opacity: 0,
      }, {
        width: '100%',
        opacity: 1,
      }, 0.1)
    });
    // html = html;
  }, 2000)
}
