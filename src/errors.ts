class HTMLError extends Error {
  constructor(message: string) {
    super(message);
    Object.setPrototypeOf(this, HTMLError.prototype);
  }
}

export class HTMLParseError extends HTMLError {
  constructor(message: string) {
    super(message);
    Object.setPrototypeOf(this, HTMLParseError.prototype);
  }
}

export class HTMLAttrParseError extends HTMLError {
  constructor(attr: string) {
    super(`Unable to parse html attriutes for the following string: ${attr}`);
    Object.setPrototypeOf(this, HTMLAttrParseError.prototype);
  }
}

export class HTMLTagMismatchError extends HTMLParseError {
  tag: string;
  constructor(tag: string) {
    super(`There was an error parsing the HTML. Mismatching '${tag}' tag`);
    this.tag = tag;
    Object.setPrototypeOf(this, HTMLTagMismatchError.prototype);
  }
}
