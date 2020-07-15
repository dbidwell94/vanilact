import { Div, H1, P, A, H2, Strong } from "../js/index";

const root = document.querySelector("#root");

const injectionDiv = new Div({})
.addChild(
    new H1({text: 'Hello World!'})
)
.addChild(
    new HR({})
)
.addChild(
    new P({text: 'This is a test'})
).addChild(
    new A({href: 'http://www.google.com', text:'A link to google!'})
).addChild(
    new Div({classList:['nested-div']})
    .addChild(
        new H2({text:'Another Nesting Test'})
    )
    .addChild(
        new P({text: 'Yet another nesting test'})
    )
    .addClass(
        {className:'test'}
    )
    .addChild(
        new Strong({text: 'Strong Text!'})
    )
)

root.appendChild(injectionDiv.getElement());