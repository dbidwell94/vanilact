"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.H1 = void 0;
class Element {
    constructor() {
        this.htmlElement = null;
    }
    getElement() {
        return this.htmlElement;
    }
}
class H1 extends Element {
    constructor(content) {
        super();
        this.htmlElement = document.createElement("h1");
        if (content.classList.length > 0) {
            content.classList.forEach((className) => {
                this.htmlElement.classList.add(className);
            });
        }
        this.htmlElement.id = content.id;
    }
}
exports.H1 = H1;
