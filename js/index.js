"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.H2 = exports.H1 = void 0;
class HeadingElement {
    constructor(content, createdElement) {
        this.htmlElement = createdElement;
        if (content.classList.length > 0) {
            content.classList.forEach((className) => {
                this.htmlElement.classList.add(className);
            });
        }
        this.htmlElement.id = content.id;
    }
    getElement() {
        return this.htmlElement;
    }
    deleteElement() {
        this.htmlElement.remove();
    }
}
class H1 extends HeadingElement {
    constructor(content) {
        const newElement = document.createElement("h1");
        super(content, newElement);
    }
}
exports.H1 = H1;
class H2 extends HeadingElement {
    constructor(content) {
        const newElement = document.createElement("h2");
        super(content, newElement);
    }
}
exports.H2 = H2;
