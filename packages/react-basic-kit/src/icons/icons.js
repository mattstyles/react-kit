
// Icons are slightly modified from [eva](https://akveo.github.io/eva-icons)
const ICONS = {
  _default: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"></svg>',
  check: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M9.86 18a1 1 0 01-.73-.32l-4.86-5.17a1 1 0 111.46-1.37l4.12 4.39 8.41-9.2a1 1 0 111.48 1.34l-9.14 10a1 1 0 01-.73.33z"/></svg>',
  'chevron-thin': '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 477.175 477.175"><path d="M145.188 238.575l215.5-215.5c5.3-5.3 5.3-13.8 0-19.1s-13.8-5.3-19.1 0l-225.1 225.1c-5.3 5.3-5.3 13.8 0 19.1l225.1 225c2.6 2.6 6.1 4 9.5 4s6.9-1.3 9.5-4c5.3-5.3 5.3-13.8 0-19.1l-215.4-215.5z"/></svg>',
  chevron: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 15.5a1 1 0 01-.71-.29l-4-4a1 1 0 111.42-1.42L12 13.1l3.3-3.18a1 1 0 111.38 1.44l-4 3.86a1 1 0 01-.68.28z"/></svg>',
  'chevron-large': '<svg xmlns="http://www.w3.org/2000/svg" viewBox="6 6 12 12"><path d="M12 15.5a1 1 0 01-.71-.29l-4-4a1 1 0 111.42-1.42L12 13.1l3.3-3.18a1 1 0 111.38 1.44l-4 3.86a1 1 0 01-.68.28z"/></svg>'
}

export const getIcon = id => {
  return ICONS[id] || ICONS._default
}
