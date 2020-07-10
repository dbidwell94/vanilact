interface iGenericContent {
    classList?: Array<string>;
    id?: string;
}
interface iTextContent {
    text?: string;
    classList?: Array<string>;
    id?: string;
}
interface iClassContent {
    className?: string;
    classList?: Array<string>;
}
interface iMediaContent {
    src?: string;
    classList?: Array<string>;
    id?: string;
    alt?: string;
}
declare abstract class GenericContent {
    protected htmlElement: HTMLElement;
    protected children: Array<GenericContent>;
    constructor(content: iGenericContent, instance: HTMLElement);
    getElement(): HTMLElement | HTMLParagraphElement | HTMLHeadingElement;
    removeElement(): void;
    addClass(classContent: iClassContent): this;
    addChild(element: TextContent): this;
    toString(): string;
}
declare abstract class TextContent extends GenericContent {
    protected htmlElement: HTMLElement;
    constructor(content: iTextContent, instanceItem: HTMLElement);
    updateText(content: string): this;
}
declare class HeadingElement extends TextContent {
    protected htmlElement: HTMLHeadingElement;
    constructor(content: iTextContent, instanceItem: HTMLHeadingElement);
    getElement(): HTMLHeadingElement;
    addChild(element: TextContent): this;
}
export declare class H1 extends HeadingElement {
    constructor(content: iTextContent);
}
export declare class H2 extends HeadingElement {
    constructor(content: iTextContent);
}
export declare class H3 extends HeadingElement {
    constructor(content: iTextContent);
}
export declare class H4 extends HeadingElement {
    constructor(content: iTextContent);
}
export declare class H5 extends HeadingElement {
    constructor(content: iTextContent);
}
export declare class H6 extends HeadingElement {
    constructor(content: iTextContent);
}
declare class ParagraphElement extends TextContent {
    protected htmlElement: HTMLParagraphElement;
    constructor(content: iTextContent, instanceItem: HTMLHeadingElement);
    getElement(): HTMLParagraphElement;
    addChild(element: TextContent): this;
}
export declare class P extends ParagraphElement {
    constructor(content: iTextContent);
}
declare class LayoutElement extends TextContent {
    protected htmlElement: HTMLElement;
    constructor(content: iTextContent, instanceItem: HTMLElement);
    getElement(): HTMLElement;
    addChild(element: TextContent): this;
}
export declare class Div extends LayoutElement {
    protected htmlElement: HTMLDivElement;
    constructor(content: iTextContent);
    getElement(): HTMLDivElement;
}
export declare class Span extends LayoutElement {
    protected htmlElement: HTMLSpanElement;
    constructor(content: iTextContent);
    getElement(): HTMLSpanElement;
}
declare class MediaElement extends GenericContent {
    htmlElement: HTMLImageElement | HTMLVideoElement | HTMLMediaElement;
    constructor(content: iMediaContent, instance: HTMLElement);
    setSrc(src: string): this;
    setAlt(alt: string): this;
}
export declare class Img extends MediaElement {
    htmlElement: HTMLImageElement;
    constructor(content: iMediaContent);
    getElement(): HTMLImageElement;
}
export {};
