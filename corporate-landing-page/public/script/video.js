document.addEventListener("DOMContentLoaded", function(event) {
  const playLogoPath = '../images/play-icon.svg';
  const pauseLogoPath = '../images/pause-icon.svg';
  let playButton = document.querySelector('.play-container');
  let buttonLogo = document.querySelector('.play-container__logo');
  const leftMargin = buttonLogo.style.marginLeft;
  let video = document.querySelector('.video-bg');
  playButton.onclick = function(event) {
    if (video.paused) {
      video.play();
      buttonLogo.src = pauseLogoPath;
      buttonLogo.style.marginLeft = 0;
    } else {
      video.pause();
      buttonLogo.src = playLogoPath;
      buttonLogo.style.marginLeft = leftMargin;
    }
  };
});