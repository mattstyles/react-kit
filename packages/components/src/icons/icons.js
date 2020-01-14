
const ICONS = {
  _default: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"></svg>',
  LOADING: '<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><title>Loading</title><description>Created by Nurutdinov Timur from the Noun Project</description><path d="M30.5 41.634c4.142 0 7.5-4.254 7.5-9.5 0-5.247-3.358-9.5-7.5-9.5-4.142 0-7.5 4.253-7.5 9.5 0 5.246 3.358 9.5 7.5 9.5zm14.252-11.64c2.607 3.22 8.026 3.153 12.103-.148 4.078-3.302 5.27-8.59 2.663-11.808-2.606-3.22-8.025-3.152-12.103.15-4.077 3.302-5.27 8.588-2.663 11.807zm18.31 3.982c-.932 4.036 2.456 8.264 7.57 9.445 5.11 1.18 10.01-1.134 10.942-5.17.932-4.036-2.457-8.265-7.57-9.445-5.11-1.18-10.01 1.135-10.943 5.17zm8.133 16.505c-3.723 1.817-4.876 7.112-2.576 11.827 2.3 4.716 7.18 7.067 10.904 5.25 3.723-1.815 4.877-7.11 2.577-11.825-2.3-4.716-7.182-7.067-10.905-5.25zm-7.997 16.945c-3.723-1.815-8.605.535-10.905 5.25-2.3 4.717-1.147 10.012 2.576 11.827 3.722 1.816 8.605-.535 10.905-5.25 2.3-4.716 1.146-10.01-2.577-11.827zm-17.912 4.213c-.932-4.036-5.83-6.35-10.943-5.17-5.113 1.18-8.502 5.408-7.57 9.444.932 4.036 5.832 6.35 10.944 5.17 5.112-1.18 8.5-5.408 7.57-9.444zm-14.71-11.604c2.606-3.22 1.414-8.505-2.664-11.807-4.077-3.302-9.496-3.37-12.103-.15-2.607 3.22-1.415 8.505 2.662 11.807 4.078 3.302 9.497 3.37 12.103.15zm0 0" fill-rule="evenodd"/></svg>',
  CHECK: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" enable-background="new 0 0 100 100"><path d="M96.988 23.09l-9.79-9.792c-1.354-1.35-3.54-1.35-4.893.004L34.57 61.032 17.694 44.16c-1.353-1.353-3.54-1.353-4.892-.003l-9.79 9.79c-1.35 1.354-1.35 3.543.002 4.897l27.862 27.86c1 1.003 2.298 2.32 3.623 2.32s2.762-1.317 3.763-2.32l58.722-58.72c1.353-1.352 1.353-3.543.003-4.895z"/></svg>',
  ARROW: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 477.175 477.175"><path d="M145.188 238.575l215.5-215.5c5.3-5.3 5.3-13.8 0-19.1s-13.8-5.3-19.1 0l-225.1 225.1c-5.3 5.3-5.3 13.8 0 19.1l225.1 225c2.6 2.6 6.1 4 9.5 4s6.9-1.3 9.5-4c5.3-5.3 5.3-13.8 0-19.1l-215.4-215.5z"/></svg>',
  SETTINGS: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 478.703 478.703"><path d="M454.2 189.1l-33.6-5.7c-3.5-11.3-8-22.2-13.5-32.6l19.8-27.7c8.4-11.8 7.1-27.9-3.2-38.1l-29.8-29.8c-5.6-5.6-13-8.7-20.9-8.7-6.2 0-12.1 1.9-17.1 5.5l-27.8 19.8c-10.8-5.7-22.1-10.4-33.8-13.9l-5.6-33.2A29.54 29.54 0 0 0 259.5 0h-42.1c-14.5 0-26.8 10.4-29.2 24.7l-5.8 34c-11.2 3.5-22.1 8.1-32.5 13.7l-27.5-19.8c-5-3.6-11-5.5-17.2-5.5-7.9 0-15.4 3.1-20.9 8.7L54.4 85.6c-10.2 10.2-11.6 26.3-3.2 38.1l20 28.1c-5.5 10.5-9.9 21.4-13.3 32.7l-33.2 5.6A29.54 29.54 0 0 0 0 219.3v42.1c0 14.5 10.4 26.8 24.7 29.2l34 5.8c3.5 11.2 8.1 22.1 13.7 32.5l-19.7 27.4c-8.4 11.8-7.1 27.9 3.2 38.1l29.8 29.8c5.6 5.6 13 8.7 20.9 8.7 6.2 0 12.1-1.9 17.1-5.5l28.1-20c10.1 5.3 20.7 9.6 31.6 13L189 454a29.54 29.54 0 0 0 29.2 24.7h42.2c14.5 0 26.8-10.4 29.2-24.7l5.7-33.6c11.3-3.5 22.2-8 32.6-13.5l27.7 19.8c5 3.6 11 5.5 17.2 5.5 7.9 0 15.3-3.1 20.9-8.7l29.8-29.8c10.2-10.2 11.6-26.3 3.2-38.1l-19.8-27.8c5.5-10.5 10.1-21.4 13.5-32.6l33.6-5.6a29.54 29.54 0 0 0 24.7-29.2v-42.1c.2-14.5-10.2-26.8-24.5-29.2zm-2.3 71.3c0 1.3-.9 2.4-2.2 2.6l-42 7c-5.3.9-9.5 4.8-10.8 9.9-3.8 14.7-9.6 28.8-17.4 41.9-2.7 4.6-2.5 10.3.6 14.7l24.7 34.8c.7 1 .6 2.5-.3 3.4l-29.8 29.8c-.7.7-1.4.8-1.9.8-.6 0-1.1-.2-1.5-.5l-34.7-24.7c-4.3-3.1-10.1-3.3-14.7-.6-13.1 7.8-27.2 13.6-41.9 17.4-5.2 1.3-9.1 5.6-9.9 10.8l-7.1 42c-.2 1.3-1.3 2.2-2.6 2.2h-42.1c-1.3 0-2.4-.9-2.6-2.2l-7-42c-.9-5.3-4.8-9.5-9.9-10.8-14.3-3.7-28.1-9.4-41-16.8-2.1-1.2-4.5-1.8-6.8-1.8-2.7 0-5.5.8-7.8 2.5l-35 24.9c-.5.3-1 .5-1.5.5-.4 0-1.2-.1-1.9-.8L75 375.6c-.9-.9-1-2.3-.3-3.4l24.6-34.5c3.1-4.4 3.3-10.2.6-14.8-7.8-13-13.8-27.1-17.6-41.8-1.4-5.1-5.6-9-10.8-9.9L29.2 264c-1.3-.2-2.2-1.3-2.2-2.6v-42.1c0-1.3.9-2.4 2.2-2.6l41.7-7c5.3-.9 9.6-4.8 10.9-10 3.7-14.7 9.4-28.9 17.1-42 2.7-4.6 2.4-10.3-.7-14.6l-24.9-35c-.7-1-.6-2.5.3-3.4l29.8-29.8c.7-.7 1.4-.8 1.9-.8.6 0 1.1.2 1.5.5l34.5 24.6c4.4 3.1 10.2 3.3 14.8.6 13-7.8 27.1-13.8 41.8-17.6 5.1-1.4 9-5.6 9.9-10.8l7.2-42.3c.2-1.3 1.3-2.2 2.6-2.2h42.1c1.3 0 2.4.9 2.6 2.2l7 41.7c.9 5.3 4.8 9.6 10 10.9 15.1 3.8 29.5 9.7 42.9 17.6 4.6 2.7 10.3 2.5 14.7-.6l34.5-24.8c.5-.3 1-.5 1.5-.5.4 0 1.2.1 1.9.8l29.8 29.8c.9.9 1 2.3.3 3.4l-24.7 34.7c-3.1 4.3-3.3 10.1-.6 14.7 7.8 13.1 13.6 27.2 17.4 41.9 1.3 5.2 5.6 9.1 10.8 9.9l42 7.1c1.3.2 2.2 1.3 2.2 2.6v42.1h-.1z"/><path d="M239.4 136c-57 0-103.3 46.3-103.3 103.3s46.3 103.3 103.3 103.3 103.3-46.3 103.3-103.3S296.4 136 239.4 136zm0 179.6c-42.1 0-76.3-34.2-76.3-76.3s34.2-76.3 76.3-76.3 76.3 34.2 76.3 76.3-34.2 76.3-76.3 76.3z"/></svg>',
  HOME: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 486.196 486.196"><path d="M481.708 220.456l-228.8-204.6c-.4-.4-.8-.7-1.3-1-5-4.8-13-5-18.3-.3l-228.8 204.6c-5.6 5-6 13.5-1.1 19.1 2.7 3 6.4 4.5 10.1 4.5 3.2 0 6.4-1.1 9-3.4l41.2-36.9v238.6c0 18.7 15.2 34 34 34h72.2c17.6 0 31.9-14.3 31.9-31.9v-121.3c0-2.7 2.2-4.9 4.9-4.9h72.9c2.7 0 4.9 2.2 4.9 4.9v121.3c0 17.6 14.3 31.9 31.9 31.9h72.2c19 0 34-18.7 34-42.6v-228.7l41.2 36.9c2.6 2.3 5.8 3.4 9 3.4 3.7 0 7.4-1.5 10.1-4.5 4.8-5.6 4.3-14.1-1.2-19.1zm-86.2 66.7v145.1c0 9.7-4.8 15.6-7 15.6h-72.2c-2.7 0-4.9-2.2-4.9-4.9v-121.1c0-17.6-14.3-31.9-31.9-31.9h-72.9c-17.6 0-31.9 14.3-31.9 31.9v121.3c0 2.7-2.2 4.9-4.9 4.9h-72.2c-3.8 0-7-3.1-7-7v-262.8l151.8-135.6 153.1 136.9v107.6z"/></svg>',
  BADGE: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 283.46 283.46"><path d="M276.393 157.13l-4.283-5.825c-4.622-6.396-4.738-15.016-.17-21.41l4.167-5.88c6.396-9.022 3.427-21.583-6.338-26.78l-6.394-3.426c-6.966-3.71-10.734-11.477-9.422-19.24l1.2-7.14c1.825-10.905-6.283-20.954-17.357-21.41l-7.196-.286c-7.88-.343-14.672-5.65-16.843-13.246l-2-6.966c-3.08-10.62-14.73-16.102-24.892-11.762l-6.623 2.855c-7.25 3.14-15.644 1.255-20.955-4.626l-4.796-5.367c-7.42-8.28-20.326-8.165-27.576.17l-4.74 5.425c-5.196 5.937-13.59 7.936-20.84 4.91l-6.68-2.742C84.433 10.162 72.84 15.87 69.93 26.55l-1.884 6.965C65.99 41.11 59.253 46.533 51.373 46.99l-7.193.4c-11.02.627-19.014 10.79-17.015 21.64l1.312 7.078c1.427 7.766-2.284 15.53-9.135 19.355l-6.34 3.483C3.356 104.314.558 116.93 7.066 125.84l4.283 5.823c4.625 6.396 4.738 15.018.17 21.41l-4.167 5.882c-6.394 9.02-3.424 21.584 6.34 26.777l6.393 3.427c6.966 3.71 10.734 11.475 9.42 19.243l-1.198 7.135c-1.826 10.905 6.28 20.952 17.358 21.41l7.193.285c7.88.343 14.674 5.655 16.844 13.246l2 6.966c3.082 10.62 14.73 16.102 24.893 11.76l6.623-2.853c7.25-3.14 15.645-1.256 20.955 4.626l4.796 5.365c7.367 8.223 20.27 8.107 27.52-.228l4.74-5.424c5.196-5.94 13.588-7.938 20.84-4.91l6.68 2.74c10.22 4.225 21.813-1.485 24.723-12.162l1.885-6.966c2.055-7.594 8.792-13.018 16.67-13.473l7.196-.4c11.02-.628 19.013-10.79 17.016-21.64l-1.313-7.08c-1.428-7.763 2.285-15.53 9.136-19.354l6.336-3.484c9.708-5.307 12.507-17.924 5.997-26.832z"/></svg>',
  PAUSE: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 60"><path d="M30 0C13.458 0 0 13.458 0 30s13.458 30 30 30 30-13.458 30-30S46.542 0 30 0zm-3 46h-8V14h8v32zm14 0h-8V14h8v32z"/></svg>',
  PLAY: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 41.999 41.999"><path d="M36.068 20.176l-29-20A1 1 0 0 0 5.5 1v40a1 1 0 0 0 1.568.822l29-20a1 1 0 0 0 0-1.646z"/></svg>',
  PLAY2: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 283.46 283.46"><path d="M269.314 136.175L139.704 1.188a6.78 6.78 0 0 0-6.972-.418 6.742 6.742 0 0 0-3.61 5.973V276.71a6.753 6.753 0 0 0 3.61 5.98 6.8 6.8 0 0 0 3.138.77c1.343 0 2.68-.405 3.834-1.195l129.61-134.98a6.74 6.74 0 0 0 2.916-5.555 6.758 6.758 0 0 0-2.916-5.555z"/><path d="M173.314 136.175L43.704 1.188A6.78 6.78 0 0 0 36.732.77a6.742 6.742 0 0 0-3.61 5.973V276.71a6.753 6.753 0 0 0 3.61 5.98 6.8 6.8 0 0 0 3.138.77c1.343 0 2.68-.405 3.834-1.195l129.61-134.98a6.74 6.74 0 0 0 2.916-5.555 6.758 6.758 0 0 0-2.916-5.555z"/></svg>',
  PLAY3: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 283.46 283.46"><path d="M107.98 136.176L25.705 1.188A6.78 6.78 0 0 0 18.732.77a6.742 6.742 0 0 0-3.61 5.973V276.71a6.753 6.753 0 0 0 3.61 5.98 6.8 6.8 0 0 0 3.138.77c1.343 0 2.68-.405 3.834-1.195l82.277-134.98c1.83-1.262 2.917-3.334 2.917-5.554s-1.093-4.292-2.916-5.554z"/><path d="M194.98 136.175L112.705 1.188a6.78 6.78 0 0 0-6.972-.418 6.742 6.742 0 0 0-3.61 5.973V276.71a6.753 6.753 0 0 0 3.61 5.98 6.8 6.8 0 0 0 3.138.77c1.343 0 2.68-.405 3.834-1.195l82.277-134.98a6.74 6.74 0 0 0 2.917-5.555 6.758 6.758 0 0 0-2.916-5.555z"/><path d="M280.544 136.175L198.267 1.188a6.782 6.782 0 0 0-6.973-.418 6.74 6.74 0 0 0-3.61 5.973V276.71a6.754 6.754 0 0 0 3.61 5.98c.986.513 2.066.77 3.14.77 1.343 0 2.68-.405 3.833-1.195l82.277-134.98a6.74 6.74 0 0 0 2.916-5.555 6.756 6.756 0 0 0-2.916-5.555z"/></svg>'
}

export const getIcon = id => {
  return ICONS[id] || ICONS._default
}
