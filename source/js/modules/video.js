const setupVideo = () => {
  const tag = document.createElement('script');
  tag.src = 'https://www.youtube.com/iframe_api';
  const firstScriptTag = document.getElementsByTagName('script')[0];
  firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

  let video = document.querySelector('[data-video="video-wrapper"]');
  let link = video.querySelector('[data-video="link"]');
  let button = video.querySelector('[data-video="button"]');

  video.addEventListener('click', (evt) => {
    link.remove();
    button.remove();
    video.classList.add('video--enabled');
    new YT.Player('player', {
      height: '338',
      width: '522',
      videoId: '7ugZ3PzuPZA',
      events: {
        onReady: (e) => e.target.playVideo(),
      },
    });
    link.removeAttribute('href');
    evt.preventDefault();
    evt.stopPropagation();
  });
};

export {setupVideo};
