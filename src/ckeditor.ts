import {
	BalloonEditor as BalloonEditorBase,
	Essentials,
	Autoformat,
	BlockToolbar,
	Bold,
	Italic,
	Strikethrough,
	BlockQuote,
	EasyImage,
	Heading,
	Image,
	ImageCaption,
	ImageStyle,
	ImageToolbar,
	ImageUpload,
	Indent,
	Link,
	List,
	MediaEmbed,
	Paragraph,
	PasteFromOffice,
	TextTransformation,
	CloudServices,
	type EditorConfig
} from 'ckeditor5';

import ruTranslations from 'ckeditor5/translations/ru.js';
import enTranslations from 'ckeditor5/translations/en.js';

import 'ckeditor5/ckeditor5.css';

/**
 * An item that can be placed in the block toolbar. `'|'` is a separator;
 * the rest are toolbar components registered by the bundled plugins.
 */
export type BlockToolbarItem =
	| '|'
	| 'heading'
	| 'bulletedList'
	| 'numberedList'
	| 'blockQuote'
	| 'uploadImage'
	| 'mediaEmbed'
	| 'indent'
	| 'outdent';

const DEFAULT_BLOCK_TOOLBAR_ITEMS: Array<BlockToolbarItem> = ['heading', '|', 'bulletedList', 'numberedList'];

export interface ContentEditorConfig extends EditorConfig {
	/**
	 * Whether the block toolbar is enabled. Defaults to `false`.
	 */
	blockToolbarEnabled?: boolean;

	/**
	 * Items shown in the block toolbar when it is enabled.
	 * Defaults to `['heading', '|', 'bulletedList', 'numberedList']`.
	 */
	blockToolbarItems?: Array<BlockToolbarItem>;
}

export default class ContentEditor extends BalloonEditorBase {
	public static override builtinPlugins = [
		CloudServices,
		Essentials,
		Autoformat,
		BlockToolbar,
		Bold,
		Italic,
		Strikethrough,
		BlockQuote,
		EasyImage,
		Heading,
		Image,
		ImageCaption,
		ImageStyle,
		ImageToolbar,
		ImageUpload,
		Indent,
		Link,
		List,
		MediaEmbed,
		Paragraph,
		PasteFromOffice,
		TextTransformation
	];

	public static override defaultConfig = {
		toolbar: {
			items: [
				'bold',
				'italic',
				'link',
				'strikethrough'
			]
		},
		image: {
			toolbar: [
				'imageStyle:full',
				'imageStyle:inline',
				'imageStyle:block',
				'imageStyle:side',
				'|',
				'toggleImageCaption',
				'imageTextAlternative'
			]
		},
		table: {
			contentToolbar: [
				'tableColumn',
				'tableRow',
				'mergeTableCells'
			]
		},
		// Bundled UI translations. The interface language is selected at
		// runtime via the `language` option (e.g. ContentEditor.create(el,
		// { language: 'ru' })). Languages not bundled here fall back to English.
		translations: [ruTranslations, enTranslations],
		language: 'en',
		licenseKey: 'test'
	};

	/**
	 * Creates a `ContentEditor` instance.
	 *
	 * In addition to the standard CKEditor configuration, two options control
	 * the block toolbar:
	 *
	 * - `blockToolbarEnabled` — turns the block toolbar on/off (default `false`).
	 * - `blockToolbarItems` — the items it shows when enabled
	 *   (default `['heading', '|', 'bulletedList', 'numberedList']`).
	 */
	public static override create( config: ContentEditorConfig ): Promise<ContentEditor>;
	public static override create( sourceElementOrData: HTMLElement | string, config?: ContentEditorConfig ): Promise<ContentEditor>;
	public static override create(
		sourceElementOrDataOrConfig: HTMLElement | string | ContentEditorConfig,
		config: ContentEditorConfig = {}
	): Promise<ContentEditor> {
		const isSource = typeof sourceElementOrDataOrConfig === 'string' ||
			( typeof HTMLElement !== 'undefined' && sourceElementOrDataOrConfig instanceof HTMLElement );

		const source = isSource ? sourceElementOrDataOrConfig as HTMLElement | string : undefined;
		const { blockToolbarEnabled, blockToolbarItems, ...editorConfig } =
			isSource ? config : sourceElementOrDataOrConfig as ContentEditorConfig;

		const finalConfig: EditorConfig = { ...editorConfig };

		if (blockToolbarEnabled) {
			finalConfig.blockToolbar = blockToolbarItems ?? DEFAULT_BLOCK_TOOLBAR_ITEMS;
		}

		return ( source === undefined
			? super.create(finalConfig)
			: super.create(source, finalConfig) ) as Promise<ContentEditor>;
	}
}
