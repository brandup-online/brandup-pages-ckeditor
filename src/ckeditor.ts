import { BalloonEditor as BalloonEditorBase } from '@ckeditor/ckeditor5-editor-balloon';

import { Essentials } from '@ckeditor/ckeditor5-essentials';
//import { CKFinderUploadAdapter } from '@ckeditor/ckeditor5-adapter-ckfinder';
import { Autoformat } from '@ckeditor/ckeditor5-autoformat';
import { BlockToolbar } from '@ckeditor/ckeditor5-ui';
import { Bold, Italic, Strikethrough } from '@ckeditor/ckeditor5-basic-styles';
import { BlockQuote } from '@ckeditor/ckeditor5-block-quote';
import { CKFinder } from '@ckeditor/ckeditor5-ckfinder';
import { EasyImage } from '@ckeditor/ckeditor5-easy-image';
import { Heading } from '@ckeditor/ckeditor5-heading';
import { Image, ImageCaption, ImageStyle, ImageToolbar, ImageUpload } from '@ckeditor/ckeditor5-image';
import { Indent } from '@ckeditor/ckeditor5-indent';
import { Link } from '@ckeditor/ckeditor5-link';
import { List } from '@ckeditor/ckeditor5-list';
import { MediaEmbed } from '@ckeditor/ckeditor5-media-embed';
import { Paragraph } from '@ckeditor/ckeditor5-paragraph';
import { PasteFromOffice } from '@ckeditor/ckeditor5-paste-from-office';
//import { Table, TableToolbar } from '@ckeditor/ckeditor5-table';
import { TextTransformation } from '@ckeditor/ckeditor5-typing';
import { CloudServices } from '@ckeditor/ckeditor5-cloud-services';

export default class ContentEditor extends BalloonEditorBase {
	public static override builtinPlugins = [
		CloudServices,
		Essentials,
		//UploadAdapter,
		Autoformat,
		BlockToolbar,
		Bold,
		Italic,
		Strikethrough,
		BlockQuote,
		//CKFinder,
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
			'numberedList',
			//'|',
			//'outdent',
			//'indent',
			//'|',
			//'uploadImage',
			//'blockQuote',
			//'insertTable',
			//'mediaEmbed'
		],
		toolbar: {
			items: [
				'bold',
				'italic',
				'link',
				'strikethrough'
				//'|',
				//'indent',
				//'outdent',
				//'|',
				//'imageUpload',
				//'blockQuote',
				//'insertTable',
				//'mediaEmbed',
				//'undo',
				//'redo'
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
		language: 'ru',
		licenseKey: 'test'
	};
}