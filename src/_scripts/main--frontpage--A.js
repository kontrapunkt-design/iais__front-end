// Main javascript entry point
// Should handle bootstrapping/starting application

'use strict';
import compFrontheroA from './components/compFrontheroA';

$(() => {
  setTimeout(function(){
    compFrontheroA();
  }, 3000)
});
