interface iHeadingContent {
  text: string;
  classList?: Array<string>;
  id?: string;
}

class Element {
  protected htmlElement: HTMLElement | null;
  constructor() {
    this.htmlElement = null;
  }
  getElement(): HTMLElement {
    return this.htmlElement;
  }
}

export class H1 extends Element {
  protected htmlElement: HTMLHeadingElement;
  constructor(content: iHeadingContent) {
    super();
    this.htmlElement = document.createElement("h1");
    if (content.classList.length > 0) {
      content.classList.forEach((className: string) => {
        this.htmlElement.classList.add(className);
      });
    }
    this.htmlElement.id = content.id;
  }
}
