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
	CloudServices
} from 'ckeditor5';

import ruTranslations from 'ckeditor5/translations/ru.js';
import enTranslations from 'ckeditor5/translations/en.js';

import 'ckeditor5/ckeditor5.css';

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
		// The block toolbar is opt-in: it stays hidden unless the consumer
		// provides a `blockToolbar` option (e.g. ContentEditor.create(el,
		// { blockToolbar: ['heading', '|', 'bulletedList', 'numberedList'] })).
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
		// { language: 'en' })). Languages not bundled here fall back to English.
		translations: [ruTranslations, enTranslations],
		language: 'en',
		licenseKey: 'test'
	};
}
