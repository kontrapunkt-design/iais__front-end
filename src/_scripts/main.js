// Main javascript entry point
// Should handle bootstrapping/starting application

'use strict';

import $ from 'jquery';
import gsap from 'gsap';
import modernizr from './vendors/modernizr-custom';
import compNavigation from './components/compNavigation';
import compSearch from './components/compSearch';
import compTooltips from './components/compTooltips';
import svg4everybody from 'svg4everybody';

$(() => {
  // new Link(); // Activate Link modules logic
  svg4everybody();
  compSearch();
  compNavigation();
  compTooltips();
  console.log('Welcome to Yeogurt!');
});
