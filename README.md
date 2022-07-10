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