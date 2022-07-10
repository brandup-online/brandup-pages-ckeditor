// The editor creator to use.
import BalloonEditorBase from '@ckeditor/ckeditor5-editor-balloon/src/ballooneditor';

import Essentials from '@ckeditor/ckeditor5-essentials/src/essentials';
import UploadAdapter from '@ckeditor/ckeditor5-adapter-ckfinder/src/uploadadapter';
import Autoformat from '@ckeditor/ckeditor5-autoformat/src/autoformat';
import BlockToolbar from '@ckeditor/ckeditor5-ui/src/toolbar/block/blocktoolbar';
import Bold from '@ckeditor/ckeditor5-basic-styles/src/bold';
import Italic from '@ckeditor/ckeditor5-basic-styles/src/italic';
import Strikethrough from '@ckeditor/ckeditor5-basic-styles/src/strikethrough';
import BlockQuote from '@ckeditor/ckeditor5-block-quote/src/blockquote';
import CKFinder from '@ckeditor/ckeditor5-ckfinder/src/ckfinder';
import EasyImage from '@ckeditor/ckeditor5-easy-image/src/easyimage';
import Heading from '@ckeditor/ckeditor5-heading/src/heading';
import Image from '@ckeditor/ckeditor5-image/src/image';
import ImageCaption from '@ckeditor/ckeditor5-image/src/imagecaption';
import ImageStyle from '@ckeditor/ckeditor5-image/src/imagestyle';
import ImageToolbar from '@ckeditor/ckeditor5-image/src/imagetoolbar';
import ImageUpload from '@ckeditor/ckeditor5-image/src/imageupload';
import Indent from '@ckeditor/ckeditor5-indent/src/indent';
import Link from '@ckeditor/ckeditor5-link/src/link';
import List from '@ckeditor/ckeditor5-list/src/list';
import MediaEmbed from '@ckeditor/ckeditor5-media-embed/src/mediaembed';
import Paragraph from '@ckeditor/ckeditor5-paragraph/src/paragraph';
import PasteFromOffice from '@ckeditor/ckeditor5-paste-from-office/src/pastefromoffice';
//import Table from '@ckeditor/ckeditor5-table/src/table';
//import TableToolbar from '@ckeditor/ckeditor5-table/src/tabletoolbar';
import TextTransformation from '@ckeditor/ckeditor5-typing/src/texttransformation';

export default class ContentEditor extends BalloonEditorBase { }

// Plugins to include in the build.
ContentEditor.builtinPlugins = [
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

// Editor configuration.
ContentEditor.defaultConfig = {
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
	language: 'ru'
};

//export default createEditor = (elem, config) => {
//	return ContentEditor.create(elem, config);
//};