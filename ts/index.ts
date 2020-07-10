interface iTextContent {
  text: string;
  classList?: Array<string>;
  id?: string;
}

interface iClassContent {
  className?: string;
  classList?: Array<string>;
}

abstract class TextContent {
  protected htmlElement:
    | HTMLParagraphElement
    | HTMLHeadingElement
    | HTMLElement;
  constructor(
    content: iTextContent,
    instanceItem: HTMLElement | HTMLHeadingElement | HTMLParagraphElement
  ) {
    this.htmlElement = instanceItem;
    content.classList.forEach((className: string) => {
      this.htmlElement.classList.add(className);
    });
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
}

class HeadingElement extends TextContent {
  protected htmlElement: HTMLHeadingElement;

  constructor(content: iTextContent, instanceItem: HTMLHeadingElement) {
    super(content, instanceItem);
  }

  getElement(): HTMLHeadingElement {
    return this.htmlElement;
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

export class P extends TextContent {
  protected htmlElement: HTMLParagraphElement;
  constructor(content: iTextContent) {
    const newElement: HTMLParagraphElement = document.createElement("p");
    super(content, newElement);
  }
  getElement(): HTMLParagraphElement {
    return this.htmlElement;
  }
}