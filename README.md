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

The interface language is selected with the `language` option. Russian (`ru`,
the default) and English (`en`) translations are bundled; any other value falls
back to English.

```
ContentEditor.create(document.querySelector('#editor'), { language: 'en' });
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