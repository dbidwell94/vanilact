import { IParseArgs, IHTMLArg } from './types';
import { HTMLTagMismatchError, HTMLParseError, HTMLAttrParseError } from './errors';

const tagRegex = /^<(?<tag>\w+)\s?(?<attrs>.*)>$/im;
const attrRegex = /(\w+=".*?")/gim;

class Html {
  #rawHtml: string;
  rootElement: HTMLElement;
  constructor(rawHtml: string) {
    this.#rawHtml = rawHtml;
    this.rootElement = this.#parseRootElement();
  }

  #buildElementTreeForElement(rootElement: HTMLElement, content: string) {}

  #parseRootElement(): HTMLElement {
    const rootTag = this.#rawHtml.match(tagRegex);
    if (!rootTag || !rootTag.groups || !rootTag.groups['tag']) {
      throw new HTMLParseError('Unable to parse the root element from the input');
    }

    const tag = rootTag.groups['tag'];
    const tagAttrs = rootTag.groups['attrs'];
    const tags = tagAttrs
      ?.split(attrRegex)
      .filter((arg) => arg.trim())
      .reduce<IHTMLArg[]>((val, currentVal) => {
        const splitArgs = currentVal.split('=');
        if (splitArgs.length < 2) {
          return val;
        }
        return [...val, { key: splitArgs[0], value: splitArgs[1] }];
      }, []);

    const element = document.createElement(tag);
    for (const arg of tags) {
      element.setAttributeNode(this.#parseAttr(arg));
    }
    return element;
  }

  #parseAttr(attr: IHTMLArg): Attr {
    const toReturn = document.createAttribute(attr.key);
    toReturn.value = attr.value.replaceAll('"', '');
    return toReturn;
  }
}

function html(html: TemplateStringsArray, ...args: IParseArgs[]) {
  const builtString: string = html
    .reduce((toReturn, currentValue, index) => {
      const arg: string = args[index] ? args[index].toString() : '';
      return toReturn + currentValue + arg;
    }, '')
    .trim();

  return new Html(builtString);
}

module.exports = html;
