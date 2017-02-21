'use restric'
import {searchAnimation} from './globalAnimation';

export default()=>{
  console.log('load global search toggle');
  let toggle = document.querySelector('.comp__search');
  let toggleStatus = false;

  let _toggled = (x)=>{
    if (toggleStatus === false ){
      x.classList.add('toggled');
      searchAnimation().animation.play();
      toggleStatus = true;
    }else{
      x.classList.remove('toggled');
      searchAnimation().animation.reverse(0);
      toggleStatus = false;
    }
  }

  let _render = ()=>{
    toggle.addEventListener(
      'click',
      function(){
        _toggled(this);
      }
    );
  }


  return{
    render: _render()
  }

}
