interface iTextContent {
  text?: string;
  classList?: Array<string>;
  id?: string;
}

interface iClassContent {
  className?: string;
  classList?: Array<string>;
}

abstract class TextContent {
  protected htmlElement: HTMLElement;
  protected children: Array<TextContent>;
  private parent: TextContent;
  constructor(content: iTextContent, instanceItem: HTMLElement) {
    this.htmlElement = instanceItem;
    this.htmlElement.innerText = content.text || null;
    if (content.classList != null || content.classList != undefined) {
      content.classList.forEach((className) => {
        this.htmlElement.classList.add(className);
      });
    }
  }
  getElement(): HTMLElement | HTMLParagraphElement | HTMLHeadingElement {
    return this.htmlElement;
  }
  removeElement(): void {
    this.htmlElement.remove();
  }
  addClass(classContent: iClassContent): void {
    if (classContent.classList.length > 0) {
      classContent.classList.forEach((className: string) => {
        this.htmlElement.classList.add(className);
      });
    }
    if (classContent.className != undefined) {
      this.htmlElement.classList.add(classContent.className);
    }
  }
  addChild(element: TextContent): this {
    this.htmlElement.appendChild(this.getElement());
    this.children.push(element);
    element.addParent(this);
    return this;
  }
  toString(): string {
    return this.htmlElement.outerHTML;
  }
  private addParent(element: TextContent): void {
    this.parent = element;
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
