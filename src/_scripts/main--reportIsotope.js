// Main javascript entry point
// Should handle bootstrapping/starting application

'use strict';
import compReportIsotope from './components/compReportIsotope';
import compFiltergroup from './components/compFiltergroup';

$(() => {
  compReportIsotope();
  compFiltergroup();
  // remove this in proudction
  let activeMenu = document.querySelector('.site--header .navigation .list-item:nth-child(2)').classList.add('active');
});
