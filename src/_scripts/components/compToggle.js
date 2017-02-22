'use restric'

// let toggleStatus = false;

export function myToggle(x, myAnimation){
  // let toggleStatus = false
  // console.log(toggleStatus);
  if (!x.classList.contains('toggled')){
    x.classList.add('toggled');
    x.dataset.toggled = 'true';
    myAnimation.animation.play();
    // toggleStatus = true;
  }else{
    x.classList.remove('toggled');
    myAnimation.animation.reverse(0);
    // toggleStatus = false;
  }
  // return toggleStatus;
}
