
// Icons are slightly modified from [eva](https://akveo.github.io/eva-icons)
const ICONS = {
  _default: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"></svg>',
  check: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M9.86 18a1 1 0 01-.73-.32l-4.86-5.17a1 1 0 111.46-1.37l4.12 4.39 8.41-9.2a1 1 0 111.48 1.34l-9.14 10a1 1 0 01-.73.33z"/></svg>',
  'chevron-thin': '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 477.175 477.175"><path d="M145.188 238.575l215.5-215.5c5.3-5.3 5.3-13.8 0-19.1s-13.8-5.3-19.1 0l-225.1 225.1c-5.3 5.3-5.3 13.8 0 19.1l225.1 225c2.6 2.6 6.1 4 9.5 4s6.9-1.3 9.5-4c5.3-5.3 5.3-13.8 0-19.1l-215.4-215.5z"/></svg>',
  chevron: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 15.5a1 1 0 01-.71-.29l-4-4a1 1 0 111.42-1.42L12 13.1l3.3-3.18a1 1 0 111.38 1.44l-4 3.86a1 1 0 01-.68.28z"/></svg>',
  'chevron-large': '<svg xmlns="http://www.w3.org/2000/svg" viewBox="6 6 12 12"><path d="M12 15.5a1 1 0 01-.71-.29l-4-4a1 1 0 111.42-1.42L12 13.1l3.3-3.18a1 1 0 111.38 1.44l-4 3.86a1 1 0 01-.68.28z"/></svg>',
  squircle: '<svg xmlns="http://www.w3.org/2000/svg" width="608" height="608" viewBox="-324 -324 648 648" stroke-width="25"><path fill="none" d="M0 288c126.2 0 196.356 0 242.178-45.822S288 126.2 288 0s0-196.356-45.822-242.178S126.2-288 0-288s-196.356 0-242.178 45.822S-288-126.2-288 0s0 196.356 45.822 242.178S-126.2 288 0 288z"/></svg>',
  squizzle: '<svg fill-rule="evenodd" clip-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="1.414" xmlns="http://www.w3.org/2000/svg" aria-labelledby="title" viewBox="0 0 32 32" preserveAspectRatio="xMidYMid meet" id="checkbox"><title id="title">checkbox</title><g><path d="M22.586,22.586c0.864,-0.864 1.414,-2.572 1.414,-6.586c0,-4.014 -0.55,-5.722 -1.414,-6.586c-0.864,-0.864 -2.572,-1.414 -6.586,-1.414c-4.014,0 -5.722,0.55 -6.586,1.414c-0.864,0.864 -1.414,2.572 -1.414,6.586c0,4.014 0.55,5.722 1.414,6.586c0.864,0.864 2.572,1.414 6.586,1.414c4.014,0 5.722,-0.55 6.586,-1.414Zm-6.586,3.414c8,0 10,-2 10,-10c0,-8 -2,-10 -10,-10c-8,0 -10,2 -10,10c0,8 2,10 10,10Z"></path></g></svg>',
  llsquircle: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><title>Luuk Lamers, Noun Project</title><path d="M50 10c-33.239 0-40 6.761-40 40s6.761 40 40 40 40-6.761 40-40-6.761-40-40-40zm0-5c36 0 45 9 45 45s-9 45-45 45S5 86 5 50 14 5 50 5z" fill-rule="evenodd"/></svg>'
}

export const getIcon = id => {
  return ICONS[id] || ICONS._default
}
