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

The block toolbar is controlled by two options:

- `blockToolbarEnabled` (boolean) — turns the block toolbar on or off.
  Defaults to `false`.
- `blockToolbarItems` (array) — the items shown when the block toolbar is
  enabled. Defaults to `['heading', '|', 'bulletedList', 'numberedList']`.

```
// Enable the block toolbar with the default items.
ContentEditor.create(document.querySelector('#editor'), {
	blockToolbarEnabled: true
});

// Enable it with a custom set of items.
ContentEditor.create(document.querySelector('#editor'), {
	blockToolbarEnabled: true,
	blockToolbarItems: ['heading', '|', 'bulletedList']
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