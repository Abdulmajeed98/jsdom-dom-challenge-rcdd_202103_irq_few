const counter = document.getElementById('counter');
const plus = document.getElementById('plus');
const minus = document.getElementById('minus');
const heart = document.getElementById('heart');
const pauseElement = document.getElementById('pause');
const commentForm = document.getElementById('comment-form');
const submitBTN = document.getElementById('submit');
const likesUL = document.getElementsByTagName('ul')[0];

let c = parseInt(counter.textContent);
let pause = true;
let numberOfTimes = 1;

document.addEventListener('DOMContentLoaded', () =>{
  let counting = setInterval(() => {
  counter.innerText = ++c;
  }, 1000);

  pauseElement.addEventListener('click', () => {
    if (pause) {
      clearInterval(counting);
      counter.innerHTML = c;
      pauseElement.innerHTML = 'resume';
      plus.disabled = true;
      minus.disabled = true;
      heart.disabled = true;
      pause = false;
    }
    else if (!pause){
      counting = setInterval(() => {
      counter.innerText = ++c;
      }, 1000);
       pauseElement.innerHTML = 'pause';
       plus.disabled = false;
       minus.disabled = false;
       heart.disabled = false;
       pause = true;
    }
  });

  plus.addEventListener('click', () =>{
    c++;
    counter.innerHTML = c;
  });

  minus.addEventListener('click', () => {
    c--;
    counter.innerHTML = c;
  });

  // heart.addEventListener('click', () => {
  //   setInterval(() => {
  //     let li = document.createElement('li');
  //     li.innerHTML = `${c} has been liked ${numberOfTimes}`;
  //     likesUL.append(li);
  //     numberOfTimes++;
  //   }, 1000);
  // });

});
