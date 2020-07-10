import {Div, H1, P } from '../js/index'

const root = document.querySelector('#root');

const newDiv = new Div({}).addChild(new H1({text:'Hello World'})).addClass({className:'wazaaaa'});

const para = new P({text:'This is a new paragraph', classList:['class1', 'class2']});

newDiv.addChild(para);

root.appendChild(newDiv.getElement());

console.log(newDiv.toString());