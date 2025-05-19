const one = document.getElementById('vid-one');
const two = document.getElementById('vid-two');
const videoBox = document.getElementById('VideoBox');
const videoBoxer = { one, two};

videoBox.addEventListener('mouseenter', () => {
  videoBoxer.one.play();
});

videoBox.addEventListener('mouseleave', () => {
  videoBoxer.one.pause();
  video.currentTime = 0;
});

videoBox.addEventListener('mouseenter', () => {
    videoBoxer.two.play();
  });
  
  videoBox.addEventListener('mouseleave', () => {
    videoBoxer.two.pause();
    video.currentTime = 0;
  });