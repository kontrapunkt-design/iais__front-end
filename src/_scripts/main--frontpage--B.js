// Main javascript entry point
// Should handle bootstrapping/starting application

'use strict';
import compFrontheroB from './components/compFrontheroB';

$(() => {
  setTimeout(function(){
    compFrontheroB();
  }, 3000)
});
