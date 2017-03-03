'use restric'
import {searchAnimation} from './globalAnimation';
import {myToggle} from './compToggle'

export default()=>{
  console.log('load global search toggle');
  let toggle = document.querySelector('.comp__search');
  let toggleNav = document.querySelector('.comp__toggle-menu');
  toggleNav.style.visibility = 'visible';
  // let _toggled = (x)=>{
  //   if (toggleStatus === false ){
  //     x.classList.add('toggled');
  //     searchAnimation().animation.play();
  //     toggleStatus = true;
  //   }else{
  //     x.classList.remove('toggled');
  //     searchAnimation().animation.reverse(0);
  //     toggleStatus = false;
  //   }
  // }
  let toggleStatus = false;

  let _render = ()=>{
    toggle.addEventListener(
      'click',
      function(){
        myToggle(this, searchAnimation());
        if(toggleNav.style.visibility === 'visible' && document.getElementsByTagName( 'html' )[0].classList.contains('mobile-menu')){
          toggleNav.style.visibility = 'hidden';
        }else{
          toggleNav.style.visibility = 'visible';
        }
      }
    );
  }

  return{
    render: _render()
  }

}
