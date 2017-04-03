// Main javascript entry point
// Should handle bootstrapping/starting application

'use strict';
import compSwiperGallery from './components/compSwiperGallery';

$(() => {
  compSwiperGallery()
  document.getElementById('cover').style.display = 'none';
  // remove this in proudction
  let activeMenu = document.querySelector('.site--header .navigation .list-item:nth-child(2)').classList.add('active');
});
