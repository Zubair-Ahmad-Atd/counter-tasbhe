// Add all your JS here. 


let count = 0;
let audio = document.getElementById('audio');
let value = document.getElementById('count');
function changeState(num) {

  count += num;
  value.innerHTML = count;

  // if (value.innerHTML == 5) {
  //   audio.play();
  // }



}
function reset() {
  value.innerHTML = 0;
  count = 0;

}


document.querySelector('.counter').
  style.backgroundImage = "url('images/img3.jpg')";





