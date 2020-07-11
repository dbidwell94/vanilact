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
/**
 * The base class in which all element classes are built on
 */
declare abstract class GenericContent {
    protected htmlElement: HTMLElement;
    protected children: Array<GenericContent>;
    /**
     * Creates a GenericContent class which holds an HTMLElement
     * @param content A required object containing optional elements from iGenericContent
     * @param instance The instance of any raw HTMLElement (passed down from child class)
     */
    constructor(content: iGenericContent, instance: HTMLElement);
    /**
     * Returns the HTMLElement (Needed for DOM injection)
     */
    getElement(): HTMLElement | HTMLParagraphElement | HTMLHeadingElement;
    /**
     * Removes this HTMLElement from the DOM
     */
    removeElement(): void;
    /**
     * Adds a new css class to the HTMLElement this Class represents
     * @param classContent A required object of iClassContent type. Can be an object with a string or an object with a list of strings
     */
    addClass(classContent: iClassContent): this;
    /**
     * Takes any takes any vanilact element classes and adds it as a nested child of this element
     * @param element any vanilact element Class (ex. Div, A, P, H1, ...)
     */
    addChild(element: GenericContent): this;
    /**
     * Returns a raw HTML representation of this class with all children
     */
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
export declare class Strong extends TextContent {
    constructor(content: iTextContent);
}
declare class AnchorElement extends TextContent {
    constructor(content: iAnchorContent, instance: HTMLElement);
    setHref(address: string): this;
}
export declare class A extends AnchorElement {
    htmlElement: HTMLAnchorElement;
    constructor(content: iAnchorContent);
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
