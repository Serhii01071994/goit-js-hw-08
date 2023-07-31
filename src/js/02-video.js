import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

//! Вариант 1

// const CURRENT_TIME = 'videoplayer-current-time';
// const iframe = document.querySelector('iframe');

// const player = new Player(iframe, {
//   loop: true,
//   fullscreen: true,
//   quality: '1080p',
// });

// const getCurrentTime = function (currentTime) {
//   const seconds = currentTime.seconds;
//   localStorage.setItem(CURRENT_TIME, JSON.stringify(seconds));
// };

// player.on('timeupdate', throttle(getCurrentTime, 1000));

// player.setCurrentTime(JSON.parse(localStorage.getItem(CURRENT_TIME)) || 0);
// player
//   .setColor('#fff')
//   .then(function (color) {
//     console.log('The new color value: #fff');
//   })
//   .catch(function (error) {
//     console.log('An error occurred while setting the color');
//   });

//! Вариант 2

const CURRENT_TIME = 'videoplayer-current-time';
const iframe = document.querySelector('iframe');

const player = new Player(iframe, {
  loop: true,
  fullscreen: true,
  quality: '1080p',
});

const getCurrentTime = function (currentTime) {
  const seconds = currentTime.seconds;
  localStorage.setItem(CURRENT_TIME, JSON.stringify(seconds));
};

player.on('timeupdate', throttle(getCurrentTime, 1000));

const pauseTime = JSON.parse(localStorage.getItem(CURRENT_TIME));
const initialTime = pauseTime ? pauseTime : 0;
player.setCurrentTime(initialTime);

player
  .setColor('#fff')
  .then(function (color) {
    console.log('The new color value: #fff');
  })
  .catch(function (error) {
    console.log('An error occurred while setting the color');
  });
