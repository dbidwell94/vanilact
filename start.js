import { P, Div, H1, Span } from "./js/index";

const root = document.querySelector("#root");

const p = new P({ text: "test" });
const newP = new H1({ text: "test2" });

const div = new Div({});

const span = new Span({});

span.addChild(div.addChild(p).addChild(newP));

console.log(div.toString());

root.appendChild(span.getElement());