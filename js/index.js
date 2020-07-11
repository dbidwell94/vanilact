"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Img = exports.Span = exports.Div = exports.A = exports.Strong = exports.P = exports.H6 = exports.H5 = exports.H4 = exports.H3 = exports.H2 = exports.H1 = void 0;
/**
 * The base class in which all element classes are built on
 */
class GenericContent {
    /**
     * Creates a GenericContent class which holds an HTMLElement
     * @param content A required object containing optional elements from iGenericContent
     * @param instance The instance of any raw HTMLElement (passed down from child class)
     */
    constructor(content, instance) {
        this.htmlElement = instance;
        if (content.classList != undefined) {
            content.classList.forEach((className) => {
                this.htmlElement.classList.add(className);
            });
        }
        if (content.id != undefined) {
            this.htmlElement.id = content.id;
        }
    }
    /**
     * Returns the HTMLElement (Needed for DOM injection)
     */
    getElement() {
        return this.htmlElement;
    }
    /**
     * Removes this HTMLElement from the DOM
     */
    removeElement() {
        this.htmlElement.remove();
    }
    /**
     * Adds a new css class to the HTMLElement this Class represents
     * @param classContent A required object of iClassContent type. Can be an object with a string or an object with a list of strings
     */
    addClass(classContent) {
        if (classContent.classList != undefined &&
            classContent.classList.length > 0) {
            classContent.classList.forEach((className) => {
                this.htmlElement.classList.add(className);
            });
        }
        if (classContent.className != undefined) {
            this.htmlElement.classList.add(classContent.className);
        }
        return this;
    }
    /**
     * Takes any takes any vanilact element classes and adds it as a nested child of this element
     * @param element any vanilact element Class (ex. Div, A, P, H1, ...)
     */
    addChild(element) {
        this.htmlElement.appendChild(element.getElement());
        this.children.push(element);
        return this;
    }
    /**
     * Returns a raw HTML representation of this class with all children
     */
    toString() {
        return this.htmlElement.outerHTML;
    }
}
class TextContent extends GenericContent {
    constructor(content, instanceItem) {
        const genericContent = {
            classList: content.classList,
            id: content.id,
        };
        super(genericContent, instanceItem);
        if (content.text != undefined) {
            this.htmlElement.innerText = content.text;
        }
    }
    updateText(content) {
        this.htmlElement.innerText = content;
        return this;
    }
}
// !!INSERT NEW HR CLASS HERE!!
class HeadingElement extends TextContent {
    constructor(content, instanceItem) {
        super(content, instanceItem);
    }
    getElement() {
        return this.htmlElement;
    }
    addChild(element) {
        this.htmlElement.appendChild(element.getElement());
        return this;
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
class H3 extends HeadingElement {
    constructor(content) {
        const newElement = document.createElement("h3");
        super(content, newElement);
    }
}
exports.H3 = H3;
class H4 extends HeadingElement {
    constructor(content) {
        const newElement = document.createElement("h4");
        super(content, newElement);
    }
}
exports.H4 = H4;
class H5 extends HeadingElement {
    constructor(content) {
        const newElement = document.createElement("h5");
        super(content, newElement);
    }
}
exports.H5 = H5;
class H6 extends HeadingElement {
    constructor(content) {
        const newElement = document.createElement("h6");
        super(content, newElement);
    }
}
exports.H6 = H6;
class ParagraphElement extends TextContent {
    constructor(content, instanceItem) {
        super(content, instanceItem);
    }
    getElement() {
        return this.htmlElement;
    }
    addChild(element) {
        this.htmlElement.appendChild(element.getElement());
        return this;
    }
}
class P extends ParagraphElement {
    constructor(content) {
        const newElement = document.createElement("p");
        super(content, newElement);
    }
}
exports.P = P;
class Strong extends TextContent {
    constructor(content) {
        const newElement = document.createElement("strong");
        super(content, newElement);
    }
}
exports.Strong = Strong;
class AnchorElement extends TextContent {
    constructor(content, instance) {
        const textContent = {
            classList: content.classList,
            id: content.id,
            text: content.text,
        };
        super(textContent, instance);
        if (content.href != undefined) {
            this.htmlElement.setAttribute("href", content.href);
        }
    }
    setHref(address) {
        this.htmlElement.setAttribute("href", address);
        return this;
    }
}
class A extends AnchorElement {
    constructor(content) {
        const instance = document.createElement("a");
        super(content, instance);
    }
}
exports.A = A;
class LayoutElement extends TextContent {
    constructor(content, instanceItem) {
        super(content, instanceItem);
    }
    getElement() {
        return this.htmlElement;
    }
    addChild(element) {
        this.htmlElement.appendChild(element.getElement());
        return this;
    }
}
class Div extends LayoutElement {
    constructor(content) {
        const newElement = document.createElement("div");
        super(content, newElement);
    }
    getElement() {
        return this.htmlElement;
    }
}
exports.Div = Div;
class Span extends LayoutElement {
    constructor(content) {
        const newElement = document.createElement("span");
        super(content, newElement);
    }
    getElement() {
        return this.htmlElement;
    }
}
exports.Span = Span;
class MediaElement extends GenericContent {
    constructor(content, instance) {
        const genericContent = {
            classList: content.classList,
            id: content.id,
        };
        super(genericContent, instance);
        if (content.alt != undefined) {
            this.htmlElement.setAttribute("alt", content.alt);
        }
        if (content.src != undefined) {
            this.htmlElement.setAttribute("src", content.src);
        }
    }
    setSrc(src) {
        this.htmlElement.setAttribute("src", src);
        return this;
    }
    setAlt(alt) {
        this.htmlElement.setAttribute("alt", alt);
        return this;
    }
}
class Img extends MediaElement {
    constructor(content) {
        const instance = document.createElement("img");
        super(content, instance);
    }
    getElement() {
        return this.htmlElement;
    }
}
exports.Img = Img;
