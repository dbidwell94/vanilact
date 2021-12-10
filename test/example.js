const body = document.querySelector('body');

const element = html`<h1 style="font-size: 25rem">Hello World</h1>`;

document.querySelector('body').appendChild(element.rootElement);
