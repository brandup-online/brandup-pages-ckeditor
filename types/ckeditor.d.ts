export interface EditorConfig {
    alignment?: AlignmentConfig | undefined;
    balloonToolbar?: string[] | { items: string[]; shouldNotGroupWhenFull?: boolean | undefined } | undefined;
    blockToolbar?: string[] | { items: string[]; shouldNotGroupWhenFull?: boolean | undefined } | undefined;
    heading?: HeadingConfig | undefined;
    highlight?: HighlightConfig | undefined;
    image?: ImageConfig | undefined;
    indentBlock?: IndentBlockConfig | undefined;
    initialData?: string | undefined;
    language?: string | LanguageConfig | undefined;
    licenseKey?: string | undefined;
    link?: LinkConfig | undefined;
    placeholder?: string | undefined;
    plugins?: Array<string> | undefined;
    removePlugins?: Array<string> | undefined;
    toolbar?:
    | string[]
    | {
        items?: string[] | undefined;
        shouldNotGroupWhenFull?: boolean | undefined;
        removeItems?: string[] | undefined;
    }
    | undefined;
    ui?:
    | {
        viewportTopOffset?: {
            top: number;
            right: number;
            bottom: number;
            left: number;
        };
    }
    | undefined;
}

export interface AlignmentConfig {
    options: Array<AlignmentFormat['name'] | AlignmentFormat>;
}

export interface AlignmentFormat {
    className?: string;
    name: 'left' | 'right' | 'center' | 'justify';
}

export interface LanguageConfig {
    content: string;
    textPartLanguage: TextPartLanguageOption[];
    ui: string;
}

export interface TextPartLanguageOption {
    languageCode: string;
    textDirection?: 'ltr' | 'rtl' | undefined;
    title: string;
}

export interface LinkDecoratorDefinition {
    mode: 'automatic' | 'manual';
}

export interface LinkDecoratorAutomaticDefinition extends LinkDecoratorDefinition {
    attributes?: Record<string, string>;
    callback(url: string): boolean;
    mode: 'automatic';
    classes?: string | string[];
    styles?: Record<string, string>;
}

export interface LinkDecoratorManualDefinition extends LinkDecoratorDefinition {
    attributes?: Record<string, string>;
    defaultValue?: boolean | undefined;
    label: string;
    mode: 'manual';
    styles?: Record<string, string>;
    classes?: string | string[];
}

export interface LinkConfig {
    addTargetToExternalLinks?: boolean | undefined;
    decorators?: Record<string, LinkDecoratorManualDefinition | LinkDecoratorAutomaticDefinition> | undefined;
    defaultProtocol?: string | undefined;
}

export interface IndentBlockConfig {
    classes?: string[] | undefined;
    offset?: number | undefined;
    unit?: string | undefined;
}

export interface ImageConfig {
    insert?: ImageInsertConfig | undefined;
    resizeOptions?: ImageResizeOption[] | undefined;
    resizeUnit?: 'px' | '%' | undefined;
    styles?: ImageStyleConfig | undefined;
    toolbar?: string[] | undefined;
    upload?: ImageUploadConfig | undefined;
}

export interface ImageInsertConfig {
    type?: 'inline' | 'block' | undefined;
    integrations?: string[];
}

export interface ImageResizeOption {
    label?: string | undefined;
    name: string;
    icon?: 'small' | 'medium' | 'large' | 'original' | undefined;
    value: string | null;
}

export interface ImageStyleConfig {
    options: Array<string | ImageStyleOptionDefinition>;
}

export interface ImageStyleOptionDefinition {
    className?: string | undefined;
    icon?: string | undefined;
    isDefault?: boolean | undefined;
    modelElements?: Array<'imageBlock' | 'imageInline'> | undefined;
    name: string;
    title?: string | undefined;
}

export interface ImageUploadConfig {
    types: string[];
}

export interface HighlightOption {
    class: string;
    color: string;
    model: string;
    title: string;
    type: 'marker' | 'pen';
}

export interface HighlightConfig {
    options: HighlightOption[];
}

export interface HeadingConfig {
    options: HeadingOption[];
}

export interface HeadingOption {
    class?: string | undefined;
    icon?: string | undefined;
    model: string;
    title: string;
    view?: ElementDefinition | undefined;
}

export type ElementDefinition =
    | string
    | {
        attributes?: Record<string, string> | undefined;
        classes?: string | string[] | undefined;
        name: string;
        priority?: number | undefined;
        styles?: Record<string, string> | undefined;
    };

export declare class EditorInstance {
    get isReadOnly(): boolean;
    get state(): 'initializing' | 'ready' | 'destroyed';
    readonly model: Model;
    readonly data: DataController;
    readonly sourceElement?: HTMLElement | undefined;

    updateSourceElement(): void;
    setData(data: string): void;
    getData(options?: { rootName?: string | undefined; trim?: 'empty' | 'none' | undefined }): string;
    destroy(): Promise<void>;

    execute(commandName: string, ...args: unknown[]): any;

    focus(): void;

    on(event: string, callback: () => void, options?: {
        priority: PriorityString | number;
    }): void;
    once(event: string, callback: () => void, options?: {
        priority: PriorityString | number;
    }): void;
    off(event: string, callback: () => void): void;
}
export declare class DataController {
    readonly model: Model;

    on<K extends string>(
        event: K,
        callback: (this: this, info: EventInfo<this, K>, ...args: any[]) => void,
        options?: { priority?: number | PriorityString | undefined },
    ): void;
    once<K extends string>(
        event: K,
        callback: (this: this, info: EventInfo<this, K>, ...args: any[]) => void,
        options?: { priority?: number | PriorityString | undefined },
    ): void;
    off<K extends string>(event: K, callback?: (this: this, info: EventInfo<this, K>, ...args: any[]) => void): void;

    get(options?: { rootName?: string | undefined; trim?: 'empty' | 'none' | undefined }): string;
    set(data: string | Record<string, string>, options?: { batchType?: 'default' | 'transparent' }): void;

    destroy(): void;
}
export declare class Model {
    readonly document: Document;
    hasContent(
        rangeOrElement: Range | Element,
        options?: { ignoreWhitespaces?: boolean | undefined; ignoreMarkers?: boolean | undefined },
    ): boolean;
    destroy(): void;
}
export declare class Document {
    readonly differ: Differ;
    readonly graveyard: RootElement;
    readonly model: Model;

    destroy(): void;
    getRoot(name?: string): RootElement | null;
    getRootNames(): string[];
    toJSON(): Omit<this, 'selection' | 'model'> & {
        selection: '[engine.model.DocumentSelection]';
        model: '[engine.model.Model]';
    };

    on<K extends string>(
        event: K,
        callback: (this: this, info: EventInfo<this, K>, ...args: any[]) => void,
        options?: { priority?: number | PriorityString | undefined },
    ): void;
    once<K extends string>(
        event: K,
        callback: (this: this, info: EventInfo<this, K>, ...args: any[]) => void,
        options?: { priority?: number | PriorityString | undefined },
    ): void;
    off<K extends string>(event: K, callback?: (this: this, info: EventInfo<this, K>, ...args: any[]) => void): void;
}
export declare class Differ {
    readonly isEmpty: boolean;
    bufferMarkerChange(markerName: string, oldRange: Range | null, newRange: Range | null, affectsData: boolean): void;
    bufferOperation(operation: Operation): void;
    getChangedMarkers(): Marker[];
    getChanges(options?: { includeChangesInGraveyard?: boolean | undefined }): DiffItem[];
    getMarkersToAdd(): Marker[];
    getMarkersToRemove(): Marker[];
    hasDataChanges(): boolean;
    //refreshItem(item: Item): void;
    reset(): void;
}

export type DiffItem = DiffItemInsert | DiffItemRemove | DiffItemAttribute;

export declare class DiffItemAttribute {
    attributeKey: string;
    attributeNewValue: string;
    attributeOldValue: string;
    range: Range;
    type: "attribute";
}

export declare class DiffItemInsert {
    length: number;
    name: string;
    position: Position;
    type: "insert";
}

export declare class DiffItemRemove {
    length: number;
    name: string;
    position: Position;
    type: "remove";
}

export declare class Position { }

export declare class Range { }

export declare class Operation { }

export declare class Marker { }

export declare class Element {
}
export declare class RootElement extends Element {
}
export type PriorityString = 'highest' | 'high' | 'normal' | 'low' | 'lowest';

export declare class EventInfo<S, N> {
    constructor(source: S, name: N);
    readonly source: S;
    readonly name: N;
    readonly path: object[];
    stop: {
        (): void;
        called: boolean;
    };
    off: {
        (): void;
        called: boolean;
    };
    return?: unknown | undefined;
}

export default class ContentEditor extends EditorInstance {
    static create(elem: HTMLElement, config: EditorConfig): Promise<ContentEditor>;
}

//declare const createEditor: (elem: HTMLElement, config: EditorConfig) => Promise<ContentEditor>;
//export default createEditor;