import '../css/style.css'
import javascriptLogo from '../javascript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.js'

document.querySelector('#app').innerHTML = `
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
      <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
    </a>
    <h1>Hello Vite!</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite logo to learn more
    </p>
  </div>
`

setupCounter(document.querySelector('#counter'))

function enableTextEditing() {
    const textElements = document.querySelectorAll("p b h2");

    textElements.forEach(el => {
        el.contentEditable = true;
        el.style.border = '1px dashed #ccc';
    });
}

function disableTextEditing() {
    document.querySelectorAll('[contenteditable="true"]').forEach(el => {
        el.contentEditable = false;
        el.style.border = 'none';
    });
}

let isEditable = false;

document.getElementById("edit").addEventListener('click', () => {
    alert("Button is clicked");
    if (isEditable) disableTextEditing();
    else enableTextEditing();
    isEditable = !isEditable;
})
