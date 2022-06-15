const setupVideo = () => {
  const tag = document.createElement('script');
  tag.src = 'https://www.youtube.com/iframe_api';
  const firstScriptTag = document.getElementsByTagName('script')[0];
  firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

  let video = document.querySelector('.video');
  let link = video.querySelector('[data-video="link"]');
  let button = video.querySelector('[data-video="button"]');

  video.addEventListener('click', (evt) => {
    link.remove();
    button.remove();
    video.classList.add('video--enabled');
    new YT.Player('player', {
      height: '285',
      width: '544',
      videoId: '9TZXsZItgdw',
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
