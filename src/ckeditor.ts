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

import coreTranslations from 'ckeditor5/translations/ru.js';

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
		blockToolbar: [
			'heading',
			'|',
			'bulletedList',
			'numberedList'
		],
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
		translations: [coreTranslations],
		language: 'ru',
		licenseKey: 'test'
	};
}
