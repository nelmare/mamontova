const introBlock = document.querySelector('.intro__description-wrapper');
const introText = introBlock.querySelector('[data-text="1"]');

const onIntroTextContentSet = () => {
  if (introText && window.innerWidth <= 767) {
    introText.textContent = 'Помогаю женщинам найти свое место в\u00A0жизни и\u00A0научиться жить в\u00A0любви и\u00A0вдохновении';
  } else if (introText && window.innerWidth >= 768) {
    introText.textContent = 'Помогаю женщинам найти свое место в\u00A0жизни';
  }
};

const changeIntroTextContent = () => {
  window.addEventListener('resize', onIntroTextContentSet);
};

export {introBlock, introText, onIntroTextContentSet, changeIntroTextContent};
