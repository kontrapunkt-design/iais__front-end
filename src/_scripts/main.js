// Main javascript entry point
// Should handle bootstrapping/starting application

'use strict';

import $ from 'jquery';
import Link from '../_modules/link/link';
import compNavigation from './components/compNavigation';
import compSearch from './components/compSearch';
import compFronthero from './components/compFronthero';
import compTooltips from './components/compTooltips';

$(() => {
  // new Link(); // Activate Link modules logic
  compSearch();
  compNavigation();
  compFronthero();
  compTooltips();
  console.log('Welcome to Yeogurt!');
});
