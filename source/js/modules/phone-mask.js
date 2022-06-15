const userPhoneMaskFill = () => {
  let userPhone = document.getElementById('user-phone');
  let maskOptions = {
    mask: '+{7}(000)000-00-00',
    autofix: true,
  };

  IMask(userPhone, maskOptions);
};

export {userPhoneMaskFill};
