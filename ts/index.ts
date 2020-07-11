interface iGenericContent {
  classList?: Array<string>;
  id?: string;
}

interface iTextContent extends iGenericContent {
  text?: string;
}

interface iClassContent {
  className?: string;
  classList?: Array<string>;
}

interface iMediaContent extends iGenericContent {
  src?: string;
  alt?: string;
}

interface iAnchorContent extends iTextContent {
  href?: string;
}

abstract class GenericContent {
  protected htmlElement: HTMLElement;
  protected children: Array<GenericContent>;
  constructor(content: iGenericContent, instance: HTMLElement) {
    this.htmlElement = instance;
    if (content.classList != undefined) {
      content.classList.forEach((className: string) => {
        this.htmlElement.classList.add(className);
      });
    }
    if (content.id != undefined) {
      this.htmlElement.id = content.id;
    }
  }
  getElement(): HTMLElement | HTMLParagraphElement | HTMLHeadingElement {
    return this.htmlElement;
  }
  removeElement(): void {
    this.htmlElement.remove();
  }
  addClass(classContent: iClassContent): this {
    if (
      classContent.classList != undefined &&
      classContent.classList.length > 0
    ) {
      classContent.classList.forEach((className: string) => {
        this.htmlElement.classList.add(className);
      });
    }
    if (classContent.className != undefined) {
      this.htmlElement.classList.add(classContent.className);
    }
    return this;
  }
  addChild(element: TextContent): this {
    this.htmlElement.appendChild(this.getElement());
    this.children.push(element);
    return this;
  }
  toString(): string {
    return this.htmlElement.outerHTML;
  }
}

abstract class TextContent extends GenericContent {
  protected htmlElement: HTMLElement;
  constructor(content: iTextContent, instanceItem: HTMLElement) {
    const genericContent: iGenericContent = {
      classList: content.classList,
      id: content.id,
    };
    super(genericContent, instanceItem);
    if (content.text != undefined) {
      this.htmlElement.innerText = content.text;
    }
  }
  updateText(content: string): this {
    this.htmlElement.innerText = content;
    return this;
  }
}

class HeadingElement extends TextContent {
  protected htmlElement: HTMLHeadingElement;

  constructor(content: iTextContent, instanceItem: HTMLHeadingElement) {
    super(content, instanceItem);
  }

  getElement(): HTMLHeadingElement {
    return this.htmlElement;
  }
  addChild(element: TextContent): this {
    this.htmlElement.appendChild(element.getElement());
    return this;
  }
}

export class H1 extends HeadingElement {
  constructor(content: iTextContent) {
    const newElement: HTMLHeadingElement = document.createElement("h1");
    super(content, newElement);
  }
}

export class H2 extends HeadingElement {
  constructor(content: iTextContent) {
    const newElement: HTMLHeadingElement = document.createElement("h2");
    super(content, newElement);
  }
}

export class H3 extends HeadingElement {
  constructor(content: iTextContent) {
    const newElement: HTMLHeadingElement = document.createElement("h3");
    super(content, newElement);
  }
}

export class H4 extends HeadingElement {
  constructor(content: iTextContent) {
    const newElement: HTMLHeadingElement = document.createElement("h4");
    super(content, newElement);
  }
}

export class H5 extends HeadingElement {
  constructor(content: iTextContent) {
    const newElement: HTMLHeadingElement = document.createElement("h5");
    super(content, newElement);
  }
}

export class H6 extends HeadingElement {
  constructor(content: iTextContent) {
    const newElement: HTMLHeadingElement = document.createElement("h6");
    super(content, newElement);
  }
}

class ParagraphElement extends TextContent {
  protected htmlElement: HTMLParagraphElement;

  constructor(content: iTextContent, instanceItem: HTMLHeadingElement) {
    super(content, instanceItem);
  }

  getElement(): HTMLParagraphElement {
    return this.htmlElement;
  }
  addChild(element: TextContent): this {
    this.htmlElement.appendChild(element.getElement());
    return this;
  }
}

export class P extends ParagraphElement {
  constructor(content: iTextContent) {
    const newElement: HTMLParagraphElement = document.createElement("p");
    super(content, newElement);
  }
}

export class Strong extends TextContent {
  constructor(content: iTextContent) {
    const newElement: HTMLElement = document.createElement("strong");
    super(content, newElement);
  }
}

class AnchorElement extends TextContent {
  constructor(content: iAnchorContent, instance: HTMLElement) {
    const textContent: iTextContent = {
      classList: content.classList,
      id: content.id,
      text: content.text,
    };
    super(textContent, instance);
  }
  setHref(address: string): this {
    this.htmlElement.setAttribute("href", address);
    return this;
  }
}

export class A extends AnchorElement {
  htmlElement: HTMLAnchorElement;
  constructor(content: iAnchorContent) {
    const instance = document.createElement("a");
    super(content, instance);
  }
}

class LayoutElement extends TextContent {
  protected htmlElement: HTMLElement;

  constructor(content: iTextContent, instanceItem: HTMLElement) {
    super(content, instanceItem);
  }

  getElement(): HTMLElement {
    return this.htmlElement;
  }
  addChild(element: TextContent): this {
    this.htmlElement.appendChild(element.getElement());
    return this;
  }
}

export class Div extends LayoutElement {
  protected htmlElement: HTMLDivElement;
  constructor(content: iTextContent) {
    const newElement: HTMLDivElement = document.createElement("div");
    super(content, newElement);
  }
  getElement(): HTMLDivElement {
    return this.htmlElement;
  }
}

export class Span extends LayoutElement {
  protected htmlElement: HTMLSpanElement;
  constructor(content: iTextContent) {
    const newElement: HTMLSpanElement = document.createElement("span");
    super(content, newElement);
  }
  getElement(): HTMLSpanElement {
    return this.htmlElement;
  }
}

class MediaElement extends GenericContent {
  htmlElement: HTMLImageElement | HTMLVideoElement | HTMLMediaElement;
  constructor(content: iMediaContent, instance: HTMLElement) {
    const genericContent: iGenericContent = {
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
  setSrc(src: string): this {
    this.htmlElement.setAttribute("src", src);
    return this;
  }
  setAlt(alt: string): this {
    this.htmlElement.setAttribute("alt", alt);
    return this;
  }
}

export class Img extends MediaElement {
  htmlElement: HTMLImageElement;
  constructor(content: iMediaContent) {
    const instance: HTMLImageElement = document.createElement("img");
    super(content, instance);
  }
  getElement(): HTMLImageElement {
    return this.htmlElement;
  }
}
