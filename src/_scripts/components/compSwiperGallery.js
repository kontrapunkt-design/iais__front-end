'use restric'
import swiper from 'swiper';

export default()=>{
  console.log('load swiper gallery');
  let swiper = new Swiper('.swiper-container', {
          pagination: '.swiper-pagination',
          slidesPerView: 1,
          paginationClickable: true,
          spaceBetween: 0,
          keyboardControl: true,
          nextButton: '.swiper-button-next',
          prevButton: '.swiper-button-prev',
      });
}
