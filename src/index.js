'use strict';

import menuItems from './menu.json';
import menuItemsFeed from './tmpl.hbs';
import './styles.css';
// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
// const smth = { menuItems: menuItems };
// const markup = menuItemsFeed(menuItems[0])
// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-

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

// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-

refs.themeSwitcher.addEventListener('change', themeChange);

function themeChange() {
  if (refs.themeSwitcher.checked) {
    refs.bodyElement.classList.toggle(Theme.LIGHT);
    refs.bodyElement.classList.toggle(Theme.DARK);
  } else {
    refs.bodyElement.classList.toggle(Theme.LIGHT);
    refs.bodyElement.classList.toggle(Theme.DARK);
  }
}

// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-

// const source = document.querySelector('#hiddenHtml').innerHTML.trim();
// const template = Handlebars.compile(source);
