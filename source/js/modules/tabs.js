export const showTabs = () => {
  const menuElements = document.querySelectorAll('[data-tab]');

  const clearCurrentElements = () => {
    for (let i = 0; i < menuElements.length; i++) {
      menuElements[i].classList.remove('current');
      const id = menuElements[i].getAttribute('data-tab');
      document.getElementById(id).classList.remove('current');
    }
  };

  const onCurrentLinkChange = (evt) => {
    evt.preventDefault();
    clearCurrentElements();
    evt.target.classList.add('current');
    const id = evt.currentTarget.getAttribute('data-tab');
    document.getElementById(id).classList.add('current');
  };

  const tabsChange = () => {
    for (let i = 0; i < menuElements.length; i++) {
      menuElements[i].addEventListener('click', onCurrentLinkChange);
    }
  };

  tabsChange();
};
