
import Player from '@vimeo/player';
import throttle from 'lodash.throttle';


const playerContainer = document.getElementById('vimeo-player-container');
const videoUrl = 'https://player.vimeo.com/video/236203659';


const player = new Player(playerContainer, {
  url: videoUrl,
  autoplay: true, 
});


const saveCurrentTime = throttle(async () => {
  try {
    const currentTime = await player.getCurrentTime();
    localStorage.setItem('videoplayer-current-time', currentTime);
  } catch (error) {
    console.error('Error saving current time:', error);
  }
}, 1000); 


player.on('timeupdate', saveCurrentTime);


window.addEventListener('load', async () => {
  const currentTime = localStorage.getItem('videoplayer-current-time');
  if (currentTime) {
    try {
      await player.setCurrentTime(parseFloat(currentTime));
    } catch (error) {
      console.error('Error setting current time:', error);
    }
  }
});
