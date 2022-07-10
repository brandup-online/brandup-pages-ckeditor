# brandup-pages-ckeditor

Редактор контента для BrandUp.Pages.

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

Использование в TypeScript

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