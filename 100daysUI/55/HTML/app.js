// Very basic slider

'use strict';

var slider, select1, select2, select3, sliderClasses;

slider = document.querySelector('.content-slider');
select1 = document.getElementById('select-item-1');
select2 = document.getElementById('select-item-2');
select3 = document.getElementById('select-item-3');

sliderClasses = ['slide-1-active', 'slide-2-active', 'slide-3-active'];

select1.addEventListener('click', function () {
  slider.className = 'content-slider ';
  slider.classList.add(sliderClasses[0]);
  select1.parentNode.className = '';
  select2.parentNode.className = '';
  select3.parentNode.className = '';
  this.parentNode.className = 'active';
});
select2.addEventListener('click', function () {
  slider.className = 'content-slider ';
  slider.classList.add(sliderClasses[1]);
  select1.parentNode.className = '';
  select2.parentNode.className = '';
  select3.parentNode.className = '';
  this.parentNode.className = 'active';
});
select3.addEventListener('click', function () {
  slider.className = 'content-slider ';
  slider.classList.add(sliderClasses[2]);
  select1.parentNode.className = '';
  select2.parentNode.className = '';
  select3.parentNode.className = '';
  this.parentNode.className = 'active';
});