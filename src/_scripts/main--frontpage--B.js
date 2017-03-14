// Main javascript entry point
// Should handle bootstrapping/starting application

'use strict';
import compFrontheroB from './components/compFrontheroB';
import ProgressBar from 'progressbar.js';
import {loading} from './components/globalAnimation';

$(() => {

  var query = Modernizr.mq('(min-width: 640px)');
  if (query) {
    // the browser window is larger than 900px
    document.getElementsByTagName( 'html' )[0].style.overflow = 'hidden';
    let progressBar = new ProgressBar.Line(
      '#loading-container',
      {
        color: '#ffffff',
        // This has to be the same size as the maximum width to
        // prevent clipping
        strokeWidth: 1,
        trailWidth: 1,
        trailColor: '#26387C',
        easing: 'easeInOut',
        text:{
            style:{
              color:'#26387C',
              position: 'absolute',
              top: '0',
              zIndex: '9999',
              fontSize: '40px',
              fontWeight : 'bold',
              // left: '50%',
              top: '0',
            }
        },
        from: {
          color: '#000',
        },
        to: {
          color: '#000',
        },
        // Set default step function for all animate calls
        step: (state, bar)=> {
          let value = Math.round(bar.value() * 100);
          let vpW = window.innerWidth;
          // bar.setText(Math.round(bar.value() * 100) + ' %');
          if (value === 0) {
          } else {
            bar.setText(value);
            document.querySelector('#cover .progressbar-text').style.left = vpW * (value/100) + 'px';
            // console.log(value);
          }
        }
      }
    )

    progressBar.animate(1, {
      duration: 2000
    }, function() {
        loading().animation.play();
        // console.log('Animation has finished');
    });

    setTimeout(function(){
      compFrontheroB();
    }, 3000)

  } else {
    loading().animation.play();
    compFrontheroB();
  }
});
