class themeView {
  _parentElement = document.documentElement;
  _sliderBtn = document.querySelector('.slider__circle');

  setTheme(theme) {
    this._parentElement.dataset.theme = theme;
    this._sliderBtn.style.left = theme === 'dark' ? '4.5rem' : '1rem';
  }

  addHandlerChangeTheme(handler) {
    document.querySelector('.slider').addEventListener('click', function () {
      const actualTheme = document.documentElement.dataset.theme;
      handler(actualTheme);
    });
  }
}

export default new themeView();
