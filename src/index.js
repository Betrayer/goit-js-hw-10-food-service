'use strict';

import menuItems from './menu.json';
import menuItemsFeed from './tmpl.hbs';
import './styles.css';

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const refs = {
  menuItems: document.querySelector('.js-menu'),
  bodyElement: document.querySelector('body'),
  themeSwitcher: document.querySelector('#theme-switch-control'),
};

builder(menuItems);

function builder(menuItems) {
  const markup = menuItems.map(menuItem => menuItemsFeed(menuItem)).join('');
  refs.menuItems.insertAdjacentHTML('afterbegin', markup);
}

refs.themeSwitcher.addEventListener('change', themeChange);

function themeChange() {
  if (!refs.themeSwitcher.checked) {
    refs.bodyElement.classList.remove(Theme.DARK);
    refs.bodyElement.classList.add(Theme.LIGHT);
    localStorage.setItem('theme', Theme.LIGHT);
  } else {
    refs.bodyElement.classList.remove(Theme.LIGHT);
    refs.bodyElement.classList.add(Theme.DARK);
    localStorage.setItem('theme', Theme.DARK);
  }
}

smth();

function smth() {
  if (localStorage.getItem('theme') === Theme.DARK) {
    refs.themeSwitcher.checked = true;
    refs.bodyElement.classList.remove(Theme.LIGHT);
    refs.bodyElement.classList.add(Theme.DARK);
  } else {
    refs.themeSwitcher.checked = false;
    refs.bodyElement.classList.remove(Theme.DARK);
    refs.bodyElement.classList.add(Theme.LIGHT);
  }
}
