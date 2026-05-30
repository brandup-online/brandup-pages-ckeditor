# brandup-pages-ckeditor

HTML editor for brandup-ui-pages.

## Using

```
ContentEditor.create(document.querySelector('#editor'), { language: 'ru' })
		.then( editor => {
			window.editor = editor;
		} )
		.catch( error => {
			console.error( 'There was a problem initializing the editor.', error );
		} );
```

### Language

The interface language is selected with the `language` option. English (`en`,
the default) and Russian (`ru`) translations are bundled; any other value falls
back to English.

```
ContentEditor.create(document.querySelector('#editor'), { language: 'ru' });
```

### Block toolbar

The block toolbar is disabled by default. Enable it by passing a `blockToolbar`
option with the items to show:

```
ContentEditor.create(document.querySelector('#editor'), {
	blockToolbar: ['heading', '|', 'bulletedList', 'numberedList']
});
```

Using in TypeScript.

```
import ContentEditor from "brandup-pages-ckeditor";

ContentEditor.create(elem, { placeholder: this.options.placeholder })
	.then(editor => {
		editor.model.document.on('change', () => {
			if (editor.model.document.differ.hasDataChanges())
				this.__isChanged = true;
		});
	});
```