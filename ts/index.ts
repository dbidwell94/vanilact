interface iHeadingContent {
  text: string;
  classList?: Array<string>;
  id?: string;
}

class HeadingElement {
  protected htmlElement: HTMLHeadingElement;
  constructor(content: iHeadingContent, createdElement: HTMLHeadingElement) {
    this.htmlElement = createdElement;
    if (content.classList.length > 0) {
      content.classList.forEach((className: string) => {
        this.htmlElement.classList.add(className);
      });
    }
    this.htmlElement.id = content.id;
  }
  getElement(): HTMLHeadingElement {
    return this.htmlElement;
  }
  deleteElement(): void {
    this.htmlElement.remove();
  }
}

export class H1 extends HeadingElement {
  constructor(content: iHeadingContent) {
    const newElement: HTMLHeadingElement = document.createElement("h1");
    super(content, newElement);
  }
}

export class H2 extends HeadingElement {
  constructor(content: iHeadingContent) {
    const newElement: HTMLHeadingElement = document.createElement("h2");
    super(content, newElement);
  }
}

export class H3 extends HeadingElement {
  constructor(content: iHeadingContent) {
    const newElement: HTMLHeadingElement = document.createElement("h3");
    super(content, newElement);
  }
}

export class H4 extends HeadingElement {
  constructor(content: iHeadingContent) {
    const newElement: HTMLHeadingElement = document.createElement("h4");
    super(content, newElement);
  }
}

export class H5 extends HeadingElement {
  constructor(content: iHeadingContent) {
    const newElement: HTMLHeadingElement = document.createElement("h5");
    super(content, newElement);
  }
}

export class H6 extends HeadingElement {
  constructor(content: iHeadingContent) {
    const newElement: HTMLHeadingElement = document.createElement("h6");
    super(content, newElement);
  }
}
