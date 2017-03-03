// Main javascript entry point
// Should handle bootstrapping/starting application

'use strict';
import compFronthero from './components/compFronthero';

$(() => {
  setTimeout(function(){
    compFronthero();
  }, 3000)
});
