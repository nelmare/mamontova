const tabsContentCards = document.querySelectorAll('[data-tabcard]');

export const shadowTextFill = () => {
  tabsContentCards.forEach((tabsContentCard) => {
    const price = tabsContentCard.querySelector('[data-price]');
    const text = price.textContent;
    let textShadow = `<p class="tabs__text-shadow">${text}</p>`;
    tabsContentCard.insertAdjacentHTML('beforeend', textShadow);
  });
};
